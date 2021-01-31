import React, { Component } from "react";
import "./App.css";
import Blog from "./Blog.js";

class App extends Component {
  state = {
    response: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/blog");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <Blog />
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
