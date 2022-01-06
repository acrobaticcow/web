const app = document.getElementById("app");

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
      console.log(this.props.xTurn);
    this.props.xTurn === true
      ? (e.target.innerText = "X")
      : (e.target.innerText = "Y");
    // this.setState((state) => ({
    //   playerTurnX: !state.playerTurnX,
    // }));
  }
  render() {
    return <div onClick={this.handleClick} className="square"></div>;
  }
}
const Row = (props) => {
    const row = [];
    for (let i = 0; i < 3; i ++) {
        row.push(<Square key={i}  xTurn={props.xTurn}/>)
    }
  return (
    <div className="row">
      {row}
    </div>
  );
};
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.winRule = this.winRule.bind(this);
  }
  state = {
    playerTurnX: true, //true mean x turn
  };
  winRule() {

  }
  handleClick() {
      this.setState(state => ({playerTurnX: !state.playerTurnX}))
  }
  render() {
    return (
      <div onClick={this.handleClick} className="board">
        <Row xTurn={this.state.playerTurnX} />
        <Row xTurn={this.state.playerTurnX} />
        <Row xTurn={this.state.playerTurnX} />
      </div>
    );
  }
}

const Test = (props) => <h1>{props.playerTurn}</h1>;

ReactDOM.render(<Board />, app);
