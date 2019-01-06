import React, { Component } from "react";

import "./postCreate.css";

export default class postCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: ""
    };
  }

  onChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    let jsonData = JSON.stringify(this.state);

    console.log(jsonData);

    fetch("http://localhost:3333/post", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: jsonData
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data);
        window.location.replace("/");
      });
  };

  render() {
    return (
      <div>
        <div className="content">
          <a className="ui primary button" href="/">
            <i className="arrow left icon" /> к списку постов
          </a>
        </div>
        <h4>Создание нового поста</h4>
        <form className="ui form create-form" onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label>Title</label>
            <input
              placeholder="First Name"
              onChange={this.onChangeHandler}
              name="title"
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              placeholder="Tell us more about you..."
              onChange={this.onChangeHandler}
              name="text"
              rows="10"
            />
          </div>
          <button type="submit" className="ui button">
            Создать
          </button>
        </form>
      </div>
    );
  }
}
