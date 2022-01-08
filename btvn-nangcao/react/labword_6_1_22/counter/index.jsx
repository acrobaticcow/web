const app = document.getElementById("app");

const Counter = () => {
  const [value, setValue] = React.useState(0);
  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);
  const reset = () => setValue(0);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<Counter/>, app)
