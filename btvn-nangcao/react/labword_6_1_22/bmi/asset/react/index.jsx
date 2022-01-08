const app = document.getElementById("app");

const App = () => {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [expression, setExpression] = React.useState("");

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(weight / (height * height));
    setExpression(bmiGrading);
  };
  const bmiGrading = () => {
    let a;
    if (result < 18.5) a = "Underweight";
    else if (result < 24.9) a = "Normal";
    else if (result < 29.9) a = "Overweight";
    else if (result > 29.9) a = "Obese";
    return a;
  };
  console.log(result);
  return (
    <div className="container">
      <h1>Body Mass Index</h1>
      <form onSubmit={handleSubmit} action="submite">
        <label htmlFor="weight">Weight (kg)</label>
        <br />
        <input onChange={handleChangeWeight} id="weight" type="number" />
        <br />
        <label htmlFor="height">Height (m)</label>
        <br />
        <input onChange={handleChangeHeight} id="height" type="number" />
        <p>Your BMI: {isNaN(result) ? "Please enter number" : result}</p>
        <p>{expression}</p>
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
};

ReactDOM.render(<App />, app);
