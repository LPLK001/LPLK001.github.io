let name1 = document.getElementById('name-0')
let name2 = document.getElementById('name-1')
let scoreEl1 = document.getElementById('score-0')
let scoreEl2 = document.getElementById('score-1')
let scoreCurrent1 = document.getElementById('current-0')
let scoreCurrent2 = document.getElementById('current-1')
let imgEl1 = document.querySelector('#dice-1')
let imgEl2 = document.querySelector('#dice-2')
let first = document.querySelector('.player-0-panel')
let second = document.querySelector('.player-1-panel')

let roll = document.querySelector('.btn-roll')
let activePlayer = 0

let hold = document.querySelector('.btn-hold')

let input = document.querySelector('input')

let newbtn = document.querySelector('.btn-new')

function init (){    
    name1.innerText = 'Player 1'
    name2.innerText = 'Player 2'
    scoreEl1.innerText ='0'
    scoreEl2.innerText = '0'
    scoreCurrent1.innerText = '0'
    scoreCurrent2.innerText = '0'
    imgEl1.style.display = 'none'
    imgEl2.style.display = 'none'
    first.classList.add('active')
    second.classList.remove('active')
}

window.onload = init()

roll.addEventListener('click',function(){
    a = Math.floor(Math.random()*6+1)
    b = Math.floor(Math.random()*6+1)
    imgEl1.src = `./img/dice-${a}.png`
    imgEl2.src = `./img/dice-${b}.png`
    imgEl2.style.display = 'block'
    imgEl1.style.display = 'block'
    console.log(a,b)
    if(a!=1 && b!=1){
        document.getElementById(`current-${activePlayer}`).innerText =a+b+ Number(document.getElementById(`current-${activePlayer}`).innerText )
    }
    else if(a==1 || b ==1){
        if(activePlayer == 0){
            activePlayer = 1
            first.classList.remove('active')
            second.classList.add('active')
            imgEl1.style.display = 'none'
            imgEl2.style.display = 'none'
            scoreCurrent1.innerText = '0'
            scoreCurrent2.innerText = '0'
        }
        else if(activePlayer ==1){
            activePlayer = 0
            second.classList.remove('active')
            first.classList.add('active')
            imgEl1.style.display = 'none'
            imgEl2.style.display = 'none'
            scoreCurrent1.innerText = '0'
            scoreCurrent2.innerText = '0'
        }
        
    }
    if(input.value == ''){
        input.value = 100
    }
    
})

hold.addEventListener('click',function(){
    document.getElementById(`score-${activePlayer}`).innerText = Number(document.getElementById(`current-${activePlayer}`).innerText) + Number(document.getElementById(`score-${activePlayer}`).innerText)
    if(Number(document.getElementById(`score-${activePlayer}`).innerText) >= Number(input.value)){
        if(activePlayer ==   0){
            first.classList.remove('active')
            first.classList.add('winner')
            name1.innerText = 'Winner'
            console.log('1')
        }
        else if(activePlayer ==1){
            second.classList.remove('active')
            second.classList.add('winner')
            name2.innerText = 'Winner'
            console.log('2')
        }
    }
    if(activePlayer == 0){
        activePlayer = 1
        first.classList.remove('active')
        second.classList.add('active')
        imgEl1.style.display = 'none'
        imgEl2.style.display = 'none'
        scoreCurrent1.innerText = '0'
        scoreCurrent2.innerText = '0'
    }
    else if(activePlayer ==1){
        activePlayer = 0
        second.classList.remove('active')
        first.classList.add('active')
        imgEl1.style.display = 'none'
        imgEl2.style.display = 'none'
        scoreCurrent1.innerText = '0'
        scoreCurrent2.innerText = '0'
    }

    console.log(Number(document.getElementById(`score-${activePlayer}`).innerText))
    console.log(Number(input.value))
    
})

newbtn.addEventListener('click',init)




