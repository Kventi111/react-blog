import React, { Component } from "react";
import {connect} from 'react-redux'

import "./postItem.css";

import { deletePost } from '/Users/babaevmagomed/Sites/redux-todo/src/actions/postList.js'
 
class PostItem extends Component {

  findDeletePost = id => {
    const { postList } = this.props
    let delIndex = 0

    postList.items.map( (item,index) => {
      if (item._id === id) {
        delIndex = index
      }
    })

    postList.items.splice(delIndex,1)
    return postList.items
  }

  delete = (e) => {
    e.preventDefault()
    const {id,deletePost} = this.props;

    deletePost(this.findDeletePost(id))
  
    fetch(`http://localhost:3333/post/${id}`,{
      "method" : "delete"
    })
    .then(response => response.json())
    .then( data => console.log(data))
  };

  render() {
    const { title, createAt, id } = this.props;    
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">
            <a href={`/post/${id}/deteil`}>{title}</a>
          </div>
          <div className="meta">{createAt}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <button className="ui green basic button">
              <a href={`/post/${id}/edit`}>
                <i aria-hidden="true" className="edit icon" />
              </a>
            </button>
            <button className="ui red basic button" onClick={this.delete}>
              <a href={`/post/${id}`}>
                <i aria-hidden="true" className="delete icon" />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  deletePost : posts => dispatch(deletePost(posts))
})


export default connect(mapStateToProps,mapDispatchToProps)(PostItem)