const app = document.getElementById("app");

const Tittle = (props) => {
  return <h1 className="tittle">Tip Calculator</h1>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleBillChange = this.handleBillChange.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
  }
  state = {
    bill: {
      userInput: 0,
      value: 0,
    },
    guest: {
      userInput: 0,
      value: 0,
    },
    tipPercentage:30,
    result: 0,
  };
  handleBillChange(e) {
    this.setState((prevState) => ({
        bill: {
          ...prevState.bill,
          userInput: e.target.value,
        },
      }))
  }
  handleGuestChange(e) {
    this.setState((prevState) => ({
        guest: {
          ...prevState.guest,
          userInput: e.target.value,
        },
      }))
  }
  handleServiceChange(e) {
      this.setState({tipPercentage: e.target.value})
  }
  handleSubmit(e) {
    this.setState(state => ({result: Number(state.bill.value * state.tipPercentage / 100 / state.guest.value).toFixed(2)}))
    console.log(this.state.tipPercentage)
    e.preventDefault();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.bill.userInput !== this.state.bill.userInput) {
      this.setState((prevState) => ({
        bill: {
          ...prevState.bill,
          value: prevState.bill.userInput,
        },
      }));
    }
    if (prevState.guest.userInput !== this.state.guest.userInput) {
        this.setState((prevState) => ({
          guest: {
            ...prevState.guest,
            value: prevState.guest.userInput,
          },
        }));
      }
  }
  render() {
    return (
      <div>
        <Tittle />
        <Btn
          billValue={this.state.bill.userInput}
          guestValue={this.state.guest.userInput}
          handleBillChange={this.handleBillChange}
          handleGuestChange={this.handleGuestChange}
          handleSubmit={this.handleSubmit}
          handleServiceChange={this.handleServiceChange}
          defaultPercentage={this.state.tipPercentage}
          result={this.state.result}
        />
      </div>
    );
  }
}

const Btn = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="bill">
      <label htmlFor="bill">Bill amount</label>
      <br />
      <input
        id="bill"
        onChange={props.handleBillChange}
        value={props.billValue}
        type="text"
      />
      <br />
      <label htmlFor="guest">Number of Guest</label>
      <br />
      <input
        id="guest"
        onChange={props.handleGuestChange}
        value={props.guestValue}
        type="text"
      />
      <br />
      <input type="submit" value="Calculate" />
      <br />
      <select onChange={props.handleServiceChange} defaultValue={props.defaultPercentage} name ="service_quality">
          <option value="30">30% - Outstanding</option>
          <option value="20">20% - Good</option>
          <option value="15">15% - It's Okay</option>
          <option value="10">10% - Bad</option>
          <option value="5">5% - Terrible</option>
      </select>
      <h1 className="result">{isNaN(props.result) ? "Please enter a number" : props.result }</h1>
    </form>
  );
};

ReactDOM.render(<App />, app);
