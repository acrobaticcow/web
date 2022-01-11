const app = document.getElementById("app");

const App = () => {
  const [userInput, setUserInput] = React.useState("");
  const [meals, setMeals] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleSubmit = (text) => {
    setUserInput(text);
  };

  React.useEffect(() => {
    getRandomMeal();
  }, []);

  React.useEffect(() => {
    var controller = new AbortController();
    var signal = controller.signal;

    setIsLoading(true);
    userInput &&
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`,
        { signal }
      )
        .then((response) => response.json())
        .then((data) => {
          if ({ ...meals } === null) {
            setMeals(null);
            setIsLoading(false);
          } else {
            const {
              meals: { ...copy },
            } = data;
            const mealsArr = Object.keys(copy).map((key) => ({
              key: copy[key],
            }));
            setMeals(mealsArr);
            setIsLoading(false);
          }
        });
    return () => {
      controller.abort();
    };
  }, [userInput]);

  const getRandomMeal = () => {
    var controller = new AbortController();
    var signal = controller.signal;
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, { signal })
      .then((response) => response.json())
      .then((data) => {
        const {
          meals: { ...copy },
        } = data;
        const mealsArr = Object.keys(copy).map((key) => {
          return { key: copy[key] };
        });
        setMeals(mealsArr);
        setIsLoading(false);
      })
      .then(() => {
        controller.abort();
      });
  };

  const result = meals.length ? meals.map(
    ({ key: { idMeal, strMeal, strMealThumb, strYoutube, strArea } }) => (
      <a href={strYoutube} key={idMeal} className="card">
        <div className="img-wrapper">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="info-wrapper">
          <h2 className="name">{strMeal}</h2>
          <h3 className="region">{strArea} Cuisine</h3>
        </div>
      </a>
    )
  ) : (
    <a href="#" className="card red">
      Blank
    </a>
  ) ;

  return (
    <div className="container">
      <SearchBar random={getRandomMeal} onSubmit={handleSubmit} />{" "}
      {isLoading && <p className="loading">...</p>}
      <div className={meals.length ? "result" : "blank"}>
        {result}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, app);
