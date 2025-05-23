let words = ['magic', 'journey', 'travel', 'explore', 'life', 
'experience', 'happiness', 'gratitude', 'discipline', 'exercise', 
'workout', 'friendship', 'practice', 'routine', 'morning', 'reading', 
'books', 'education', 'amour', 'delibrate', 'protein', 'partner',
'empathy', 'concert', 'patience', 'humor', 'resilience', 'confidence',
'consistency', 'appreciation', 'literature', 'meaning', 'humble',
'province', 'flight', 'alchemy', 'intense', 'adorable', 'swoon', 'stunning',
'sensational', 'provocative', 'apocalypse', 'compliance', 'meticulous',
'replicate', 'relentless', 'pursuit', 'proactive', 'astounding',
'delightful', 'legitimate', 'mesmerizing', 'polarizing', 'validate'];

const levels = {easy : 5, medium : 3, hard : 2}
let currentLevel = levels.easy
let timeCount = currentLevel  + 1
let scoreCount = 0
let wordDisplayed
let isPlaying

const time = document.getElementById('seconds')
const currentWord = document.getElementById('current-word')
const difficultyLevel = document.getElementById('difficulty')
const inputWord = document.getElementById('input-word')
const message = document.getElementById('message')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')

window.addEventListener('DOMContentLoaded', init)
inputWord.addEventListener('input', startMatch)
difficultyLevel.addEventListener('change', changeLevel)

function init() {
    time.textContent = currentLevel
    showWord()
    setInterval(countDown, 1000)
    setInterval(checkStatus, 100)
}

function showWord() {
    let randomWord = Math.floor(Math.random() * words.length)
    wordDisplayed = words[randomWord]
    currentWord.textContent = wordDisplayed
}

function countDown(){
    if(timeCount > 0){
        timeCount--
        timeLeft.textContent = timeCount
    } else if(timeCount === 0){
        isPlaying = false
    }
}

function checkStatus(){
    if(!playing && timeCount === 0){
        message.textContent = 'Times Up!'
        message.className = 'mt3 text-danger'
        score = 0
    }
}

function startMatch(){
    if(this.value === wordDisplayed){
        isPlaying = true
        message.textContent = 'Correct'
        message.className = 'mt3 text-success'
        scoreCount++
        score.textContent = scoreCount
        this.value = ''
        timeCount = currentLevel + 1
        showWord()
    } 
}

function changeLevel() {
    let level = this.options[this.selectedIndex].value

    if(level === 'medium'){
        isPlaying = true
        inputWord.focus()
        currentLevel = level.medium
        timeCount = currentLevel + 1
        timeLeft.textContent = timeCount
        scoreCount = 0
        message.textContent = ''
        startMatch()
    }
    if(level === 'hard'){
        isPlaying = true
        inputWord.focus()
        currentLevel = level.hard
        timeCount = currentLevel + 1
        timeLeft.textContent = timeCount
        scoreCount = 0
        message.textContent = ''
        startMatch()
    }
}