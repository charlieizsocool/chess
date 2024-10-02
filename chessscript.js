const boardElement = document.getElementById('board');

const pieces = {
    r: '♖', n: '♘', b: '♗', q: '♕', k: '♔', p: '♙',
    R: '♜', N: '♞', B: '♟', Q: '♛', K: '♚', P: '♟'
};

const initialBoard = [
    'rnbqkbnr',
    'pppppppp',
    '        ',
    '        ',
    '        ',
    '        ',
    'PPPPPPPP',
    'RNBQKBNR'
];

function drawBoard() {
    initialBoard.forEach((row, rowIndex) => {
        [...row].forEach((piece, colIndex) => {
            const square = document.createElement('div');
            square.classList.add('square', (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black');
            square.innerHTML = pieces[piece] || '';
            square.dataset.row = rowIndex;
            square.dataset.col = colIndex;
            square.addEventListener('click', handleSquareClick);
            boardElement.appendChild(square);
        });
    });
}

function handleSquareClick(event) {
    const square = event.target;
    const row = square.dataset.row;
    const col = square.dataset.col;
    console.log(`Clicked on square: ${row}, ${col}`);
    // Add logic for moving pieces and playing against the AI here
}

drawBoard();
