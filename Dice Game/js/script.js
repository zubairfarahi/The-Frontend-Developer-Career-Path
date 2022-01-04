const btnDice = document.querySelector(".btn-el")
const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const player = document.querySelector(".player")
const dice1 = document.querySelector(".dice1")
const dice2 = document.querySelector(".dice2")
const h1 = document.querySelector('h1')
const scoreBoard1 = document.querySelector(".scoreBoard1")
const scoreBoard2 = document.querySelector(".scoreBoard2")
const rest = document.querySelector('.btn-rest')

let score1 = 0
let score2 = 0
let player1active = true

btnDice.addEventListener("click",() =>{
    if(player1active){
        
        player1.textContent = randNumGenerator()
        dice1.classList.remove('player1')
        dice2.classList.remove('select')
        dice1.classList.add('select')
        score1 += parseInt(player1.textContent)
        scoreBoard1.textContent = `Score: ${score1}`
        if(score1 >= 20 ){
            h1.textContent = "Player 1 won!"
            showDisplay()
        }
        player1active = false
    }else{
        player2.textContent = randNumGenerator()
        dice2.classList.remove('player2')
        dice1.classList.remove('select')
        dice2.classList.add('select')
        score2 += parseInt(player2.textContent)
        scoreBoard2.textContent = `Score: ${score2}`
        if(score2 >= 20){
            h1.textContent = "Player 2 won!"
            showDisplay()
        }
        player1active = true
    }
   
})

rest.addEventListener('click',() =>{
    restAll()
})


function restAll(){
    score1 = 0
    score2 = 0
    scoreBoard1.textContent = "Score: 0"
    scoreBoard2.textContent = "Score: 0"
    player1.textContent = "_"
    player2.textContent = "_"
    player1active = true
    rest.classList.add('rest')
    rest.style.display = "none"
    btnDice.style.display = "block"
} 

function showDisplay(){
    btnDice.style.display = 'none'
    rest.style.display = 'block'
}

function randNumGenerator(){
    return Math.floor((Math.random() * 6) + 1)
}