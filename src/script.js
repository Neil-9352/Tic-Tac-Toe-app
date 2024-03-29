console.log("Tic Tac Toe");

const music = new Audio('./media/bgmusic.mp3');
const audioTurn = new Audio('./media/ting.mp3');
const gameOver = new Audio('./media/gameover.mp3');

let turn = 'X';
let isGameOver = false;



// Function to Change the turn
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}



// Function to check for a win
const checkWin = () => {
    const boxtexts = document.getElementsByClassName('box-text')
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '200px';
        }
    })
}

// Game logic
// music.play();
const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    const boxtext = element.querySelector('.box-text');

    element.addEventListener('click', () => {
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})



// Ad onclick listener to reset buton
reset.addEventListener('click', () => {
    const boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });

    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '0px';
})