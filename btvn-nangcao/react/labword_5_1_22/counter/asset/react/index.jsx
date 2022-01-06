const app = document.getElementById("app");

const CounterDisplay = (props) => {
  return (
    <div>
      <h1 className="title">Counter</h1>
      <h2 className="counter">{props.counter}</h2>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.incrementBtn = this.incrementBtn.bind(this);
    this.decrementBtn = this.decrementBtn.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
  }
  state = {
    counter: 0,
  };
  incrementBtn() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }
  decrementBtn() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }
  resetBtn() {
    this.setState({counter: 0});
  }
  render() {
    return (
      <div>
        <CounterDisplay counter={this.state.counter} />
        <GroupBtn incrementBtn={this.incrementBtn} decrementBtn={this.decrementBtn} resetBtn={this.resetBtn}/>
      </div>
    );
  }
}

const GroupBtn = (props) => {
  return (
    <div>
      <button onClick={props.incrementBtn} className="increment">
        increase
      </button>
      <button onClick={props.decrementBtn} className="decrement">
        decrease
      </button>
      <button onClick={props.resetBtn} className="reset">reset</button>
    </div>
  );
};

ReactDOM.render(<App />, app);
