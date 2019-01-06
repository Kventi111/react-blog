import React, { Component } from "react";

import "./postEdit.css";

export default class postEdit extends Component {
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
    var re = /post|edit|\W/g;
    var urlId = window.location.pathname;
    var id = urlId.replace(re, "");

    let jsonData = JSON.stringify(this.state);

    console.log(jsonData);

    fetch(`http://localhost:3333/post/${id}`, {
      method: "put",
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
        <h4>Редактирование поста</h4>
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
            <input
              onChange={this.onChangeHandler}
              name="text"
              placeholder="Last Name"
            />
          </div>
          <button type="submit" className="ui button">
            Изменить
          </button>
        </form>
      </div>
    );
  }
}
