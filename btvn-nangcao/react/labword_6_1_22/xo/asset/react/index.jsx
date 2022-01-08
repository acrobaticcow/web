const app = document.getElementById("app");

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `square`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

const Game = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xIsNext, setXisNext] = React.useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    console.log(historyPoint, i)
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () => {
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : `Go to Start`;
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  };

  return (
    <div className="container">
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          <ul>{renderMoves()}</ul>
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player " + xO}</h3>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

ReactDOM.render(<Game />, app);
