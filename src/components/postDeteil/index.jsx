import React, { Component } from "react";

// import './postItem.css'

export default class PostDeteil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 1,
      createAt: 2,
      text: 3
    };
  }

  componentWillMount() {
    // var url = new URL(window.location.hfer);
    // var c = url.searchParams.get("c");

    var re = /post|deteil|\W/g;
    var urlId = window.location.pathname;
    var id = urlId.replace(re, "");

    fetch(`http://localhost:3333/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          createAt: data.createdAt,
          text: data.text
        });
      });
  }

  render() {
    const { title, createAt, text } = this.state;

    return (
      <div>
        <div className="content">
          <a className="ui primary button" href="/">
            <i className="arrow left icon" /> к списку постов
          </a>
        </div>
        <div className="posts__item">
          <h1 className="text text-title">{title}</h1>
          <i>{createAt}</i>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
