import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import ProfileCardList from "./components/profile-card-list/profile-card-list.component";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      search_input: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    const { users, search_input } = this.state;
    const filterd_users = users.filter(user =>
      user.name.toLowerCase().includes(search_input.toLowerCase())
    );

    return (
      <div className="App">
        <input
          className="search"
          type="search"
          placeholder="Search Here..."
          onChange={event => {
            this.setState({ search_input: event.target.value });
          }}
        />
        <br />
        <br />
        <ProfileCardList users={filterd_users} />
      </div>
    );
  }
}

export default App;
