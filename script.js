var ticTacToeBoxes = document.querySelector('main')
var row1 = document.querySelector('.row1')
var row2 = document.querySelector('.row2')
var row3 = document.querySelector('.row3')

// function player1Turn(event) {
    // ticTacToeBoxes.addEventListener('click', function(event) {
    //     if(event.target.tagName === 'DIV') {
    //         event.target.textContent = 'x'
    //         console.log('x')
    //     } 

    // })
// }


ticTacToeBoxes.addEventListener('click', function(event) {
    if(event.target.tagName === 'DIV' && event.target.className === 'row1') {
        event.target.textContent = 'x'
        event.target.className = 'x'
        console.log('x')
    } 
    if(document.querySelectorAll('.x').length === 2) {
        var allDivElements = documents.querySelectorAll('div')
        for(let i = 0; i < allDivElements.length; i++)            {
            allDivElements[i].className = 'score'
        }
            
    }
})

ticTacToeBoxes.addEventListener('click', function(event) {
    if(event.target.tagName === 'DIV' && event.target.className === 'row2') {
        event.target.textContent = 'x'
        console.log('x')
    } 

})

ticTacToeBoxes.addEventListener('click', function(event) {
    if(event.target.tagName === 'DIV' && event.target.className === 'row3') {
        event.target.textContent = 'x'
        console.log('x')
    } 

})

