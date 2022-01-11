const SearchBar = ({ onSubmit, random, reset }) => {
    const [value, setValue] = React.useState("");
  
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(value);
          setValue("");
        }}
        action="search"
      >
        <h1 className="title">Find your meal</h1>
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <input type="submit" value="Search" />
          <button onClick={random}>Random</button>
        </div>
      </form>
    );
  };