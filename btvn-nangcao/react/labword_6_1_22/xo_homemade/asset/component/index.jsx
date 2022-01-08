const app = document.getElementById("app");

const Square = ({ value, handleClick }) => {
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
};

const Board = ({ squares, handleClick }) => {
  return (
    <div className="board">
      {squares.map((playerTurn, i) => {
        return (
          <Square
            key={i}
            value={playerTurn}
            handleClick={() => handleClick(i)}
          /> // truyền index vào hàm callback để dùng cho logic xử lý bên dưới, giúp đặt đúng nước đi người dùng vào mảng "bàn cờ"
        );
      })}
    </div>
  );
};

const Game = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]); // gồm 9 mảng con lưu trữ nước chơi của người dùng
  const [stepNumber, setStepNumber] = React.useState(0); // vị trí trong mảng history
  const [isXsNext, setIsXsNext] = React.useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const playerTurn = isXsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1); //Copy mảng history cho đến nước hiện tại
    const current = historyPoint[stepNumber]; // mảng bao gồm tất cả các nước chơi hiện tại
    const squares = [...current]; // copy mảng trên
    if (winner || squares[i]) return;
    squares[i] = playerTurn;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setIsXsNext(!isXsNext);
  };

  const jumpTo = (i) => {
    setStepNumber(i);
    setIsXsNext(i % 2 === 0); // x bắt đầu trước nên tất cả index sẽ bắt đầu bằng số chẵn
  };


  const renderHistory = () => {
    return history.map((_move, i) => {
      let resetOrMove;
      const destination = i ? `Go to move ${i}` : "Reset";
      return (
        <li key={i}>
          {i ? (
            <button onClick={() => jumpTo(i)}>{destination}</button>
          ) : (
            <button onClick={() => jumpTo(i)}>{destination}</button>
          )}
        </li>
      );
    });
  };

  return (
    <div className="container">
      <Board handleClick={handleClick} squares={history[stepNumber]} />
      <div className="info-wrapper">
        <h3 className="playerTurn">
          {winner ? `${winner} Win:` : `${playerTurn} Next:`}
        </h3>
        <ul className="history">
          <h3>History:</h3>
          {renderHistory()}
        </ul>
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
