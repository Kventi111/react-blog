import React,{Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

// import axio from "axios"
import { fetchPosts } from '../actions/postList'

import Header from "./header"
import PostList from './postList'
import PostDeteil from './postDeteil'
import PostCreate from "./postCreate"
import PostEdit from "./postEdit"


import '../index.css'
import "../styleGuide.css"

class App extends Component {

  componentWillMount() {
    const { fetchPosts } = this.props

    fetch("http://localhost:3333/posts")
      .then( response => {
         return response.json()
      })
      .then( data => {
        fetchPosts(data)
      })
  }
  
  render() {
    return (
      <Router>  
        <div className="container">
            <Header />
            <div className="content">
              <Switch>
                <div className="content">
                  <Route 
                    path="/" 
                    exact
                    component={PostList} />
                  <Route 
                    path="/post/:id/deteil"
                    exact 
                    component={PostDeteil} />
                  <Route 
                    path="/post/create"
                    exact 
                    component={PostCreate} />
                  <Route 
                    path="/post/:id/edit"
                    exact 
                    component={PostEdit} />
                </div>
              </Switch>
            </div>
        </div>
      </Router> 
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  fetchPosts : items => dispatch(fetchPosts(items))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)