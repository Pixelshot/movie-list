import React, { Component } from "react";

class MovieList extends Component {
  state = {
    title: "",
  };

  componentDidMount() {
    // const URL = "http://localhost:3000/movies";

    fetch("/db.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error:", error));
  }

  render() {
    return (
      <>
        <h1>MovieList</h1>
      </>
    );
  }
}

export default MovieList;
