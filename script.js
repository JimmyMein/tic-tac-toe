






var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')
var allboxs = document.querySelectorAll('div')
var ticTacToeBoxes = document.querySelector('main')

var count = 0


function winningConditionRow1(player){
    if(box1.textContent === player && box2.textContent === player && box3.textContent === player) {
        alert(player + " Wins")
    }
}
function winningConditionRow2(player){
    if(box4.textContent === player && box5.textContent === player && box6.textContent === player) {
        alert(player + " Wins")
    }
}
function winningConditionRow3(player){
    if(box7.textContent === player && box8.textContent === player && box9.textContent === player) {
        alert(player + " Wins")
    }
}
function winningConditionColum1(player){
    if(box1.textContent === player && box4.textContent === player && box7.textContent === player) {
        alert(player + " Wins")
    }
}
function winningConditionColum2(player){
    if(box2.textContent === player && box5.textContent === player && box8.textContent === player) {
        alert(player + " Wins")
    }
}
function winningConditionColum3(player){
    if(box3.textContent === player && box6.textContent === player && box9.textContent === player) {
        alert(player + " Wins")
    }
}
function winningConditionCrossFrom1(player){
    if(box1.textContent === player && box5.textContent === player && box9.textContent === player) {
        alert(player + " Wins")
    }
}
function winningConditionCrossFrom3(player){
    if(box3.textContent === player && box5.textContent === player && box7.textContent === player) {
        alert(player + " Wins")
    }
   
}


ticTacToeBoxes.addEventListener('click', function(event) {
    count++
    var isOdd = count % 2 !== 0
    var isEven = count % 2 === 0
    if(event.target.tagName === 'DIV' && event.target.textContent === "" && isOdd) {
        event.target.textContent = 'x'
        event.target.className = 'x'
        console.log('x')
        winningConditionRow1('x')
        winningConditionRow2('x')
        winningConditionRow3('x')
        winningConditionColum1('x')
        winningConditionColum2('x')
        winningConditionColum3('x')
        winningConditionCrossFrom1('x')
        winningConditionCrossFrom3('x')
    } 
    else if(event.target.tagName === 'DIV'&& event.target.textContent === "" && isEven) {
        event.target.textContent = 'o'
        event.target.className = 'o'
        console.log('o')
        winningConditionRow1('o')
        winningConditionRow2('o')
        winningConditionRow3('o')
        winningConditionColum1('o')
        winningConditionColum2('o')
        winningConditionColum3('o')
        winningConditionCrossFrom1('o')
        winningConditionCrossFrom3('o')
    }
    if (count === 9) {
        alert("Good Game, but it's a draw!")
    }
})

