import React, { Component } from "react";
import { connect } from "react-redux";

import PostItem from "../postItem";
import "./postList.css";

class PostList extends Component {
  render() {
    const { postList } = this.props;

    return (
      <div>
        <a className="ui primary button" href="/post/create">
          <i className="add icon" /> пост
        </a>
        <h4>Список постов</h4>
        <div className="ui cards">
          {postList.items.map(item => {
            return (
              <PostItem
                key={item._id}
                title={item.title}
                createAt={item.createdAt}
                id={item._id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(PostList);
