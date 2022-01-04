class Option extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      let selectedItem = document.getElementsByName("category");
      console.log(selectedItem.value)
      
    return (
      <WrapperY>
        <label htmlFor="">Sort user.</label>
        <br />
        <select name="category" onChange={this.props.handleChange} id="user-category">
          <option value="id" defaultValue={"Default"} >Default</option>
          <option value="first_name" >First Name</option>
          <option value="last_name">Last Name</option>
          <option value="email">Email</option>
        </select>
        <SortTitle option = {this.props.option} />
      </WrapperY>
    );
  }
}


const SortTitle = (props) => (
  <h2>Currently sort user through {props.option}</h2>
);

const WrapperY = (props) => (
  <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    // }}
    className="wrapper-hor"
  >
    {props.children}
  </div>
);

ReactDOM.render(<FriendList />, app);
