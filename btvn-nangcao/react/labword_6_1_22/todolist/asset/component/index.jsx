const app = document.getElementById("app");

const useInputValue = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    reset: () => setValue(""),
  };
};

const Form = ({ onSubmit }) => {
  const { reset, ...text } = useInputValue("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.value === "") return;
        onSubmit(text.value);
        reset();
      }}
    >
      <input type="text" {...text} />
      <input type="submit" value="+" />
    </form>
  );
};

const Radio = () => {};

const App = () => {
  const [onGoingsTasks, setonGoingsTasks] = React.useState([]);
  const [finishedTasks, setFinishedTasks] = React.useState([]);
  const renderonGoingsTasks = () => {
    return onGoingsTasks.map(({ text }, i) => {
      return (
        <li key={i}>
          <input
            onClick={() => checkIfFinished(i)}
            type="checkbox"
            name={text}
            id={i}
          />
          <label htmlFor={i}>{text}</label>
        </li>
      );
    });
  };

  const renderFinishedTasks = () => {
    return finishedTasks.map(({ text }, i) => {
      return <li key={i}>{text}</li>;
    });
  };

  const checkIfFinished = (i) => {
    setonGoingsTasks(
      onGoingsTasks.map((task, z) => {
        return z == i ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const completeBtn = () => {
    setFinishedTasks(onGoingsTasks.filter((task) => task.completed));
    setonGoingsTasks(onGoingsTasks.filter((task) => task.completed === false));
  };

  const clearBtn = () => {
    setFinishedTasks([]);
  };

  console.log(onGoingsTasks);

  return (
    <div className="container">
      <h2 className="tittle">My to do list</h2>
      <Form
        onSubmit={(text) => {
          setonGoingsTasks([{ text, completed: false }, ...onGoingsTasks]);
        }}
      />
      <ul className="onGoings-wrapper">
        <button onClick={completeBtn}>Complete Task</button>
        {renderonGoingsTasks()}
      </ul>
      <ul className="onGoings-wrapper">
        <h3>Finished task :</h3>
        {renderFinishedTasks()}
        {finishedTasks && <button onClick={clearBtn}>Clear</button>}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, app);
