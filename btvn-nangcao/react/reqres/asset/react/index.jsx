const app = document.getElementById("app");

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.sortUser = this.sortUser.bind(this);
  }
  state = {
    friendList: [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
      },
      {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
      },
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
      {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
      },
      {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
      },
    ],
    currentSortOpt: "Default",
  };
  sortUser() {
    let select = document.querySelector("#user-category");
    let sortedFrList;
    if (select.value === "id") {
      sortedFrList = this.state.friendList.sort((a, b) => a.id - b.id);
    } else if (select.value === "email") {
      sortedFrList = this.state.friendList.sort((a, b) => {
        let nameA = a.email.toUpperCase();
        let nameB = b.email.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (select.value === "first_name") {
      sortedFrList = this.state.friendList.sort((a, b) => {
        let nameA = a.first_name.toUpperCase();
        let nameB = b.first_name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      sortedFrList = this.state.friendList.sort((a, b) => {
        let nameA = a.last_name.toUpperCase();
        let nameB = b.last_name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({ friendList: sortedFrList });
    this.setState({currentSortOpt: select.value});
  }
  render() {
    return (
      <>
        <Clock />
        <Option handleChange={this.sortUser} option ={this.state.currentSortOpt} />
        <h1 style={{ textAlign: "center" }}>Hello ReqRes users!</h1>
        <div className="friendList">
          {this.state.friendList.map((friend) => {
            return (
              <Friend
                key={friend.id}
                id={friend.id}
                name={`${`${friend.first_name} ${friend.last_name}`}`}
                email={friend.email}
                img={friend.avatar}
              />
            );
          })}
        </div>
      </>
    );
  }
}

console.log("are u okay");

const Friend = (props) => {
  return (
    <div className="friend">
      <h3 className="name">{props.name}</h3>
      <p className="email">{props.email}</p>
      <div className="img-wrapper">
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  );
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({ time: new Date().toUTCString() });
    }, 1000);
  }
  state = {
    time: new Date().toUTCString(),
  };
  render() {
    return <h3 className="clock">{this.state.time}</h3>;
  }
}

Friend.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  email: PropTypes.string,
};
Clock.propTypes = {
  time: PropTypes.string,
};
