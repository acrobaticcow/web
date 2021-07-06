let tiles = Array.from(document.querySelectorAll(".tile"));
let displayPlayer = Array.from(document.querySelectorAll(".displayPlayer"));
let announcer = document.querySelector(".announcer");
let reset = document.querySelector(".reset");
let container = document.querySelector(".container");
let message = document.querySelector(".announcer-message");
const X_CLASS = 'x';
const O_CLASS = 'o';
let playerTurn;
const winningCondition = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

startGame();

reset.addEventListener('click', startGame);

function startGame() {
    playerTurn = false;
    tiles.forEach(tile => {
        tile.classList.remove(X_CLASS);
        tile.classList.remove(O_CLASS);
        tile.removeEventListener('click', handleClick);
        tile.addEventListener('click', handleClick, { once:true });
    })
    setHoverContainer();
    announcer.classList.remove('show')
}

function handleClick(e) {
    const tile = e.target;
    const currentPlayer = playerTurn ? O_CLASS : X_CLASS;
    placeMard(tile, currentPlayer);
    if (checkWin(currentPlayer)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurn();
        setHoverContainer();
    }
    
}

function placeMard(tile, currentPlayer) {
 tile.classList.add(currentPlayer)
}

function swapTurn() {
    playerTurn = !playerTurn;
    displayPlayer[0].innerText = `${playerTurn ? "O" : "X"}`
}

function setHoverContainer() {
    container.classList.remove(X_CLASS);
    container.classList.remove(O_CLASS);
    if (playerTurn) {
        container.classList.add(O_CLASS);
    } else {
        container.classList.add(X_CLASS);
    }
}

function checkWin(currentPlayer) {
    return winningCondition.some(condition =>{
        return condition.every(index =>{
            return tiles[index].classList.contains(currentPlayer);
        });
    });
}

function endGame(draw) {
    if (draw) {
        message.innerText = 'DRAW!'

    } else {
        displayPlayer[1].innerText = `${playerTurn ? 'Anh dz' : 'Long Loz'}`
    }
    announcer.classList.add('show')
}

function isDraw() {
    return tiles.every(tile => {
        return tile.classList.contains(X_CLASS) || (
            tile.classList.contains(O_CLASS)
        )
    })
}



