import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadPosts} from '../action/post_action'

class PostList extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

  componentDidMount(){
    loadPosts()
  }

  render(){
    const {list} = this.props.post
    const posts = list.map(post => {
    return (<li key = {post.id}>{post.title}</li>)
    })
    return(
    <div>
    <ul>{posts}</ul>
    {/* <button onClick = {()=>this.props.dispatch(loadPosts)}>try</button> */}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    post:state.post
  }
}

const mapDispatchToProps = {
  loadPosts
}
//组件和rudux
export default connect(mapStateToProps, mapDispatchToProps)(PostList);