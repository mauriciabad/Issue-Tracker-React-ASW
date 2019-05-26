import React, { Component } from 'react';

import './Comentaris.css'

class Comentaris extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch(`https://asw-issue.herokuapp.com/issues/${this.props.issue}/comments.json`, {
      method: 'GET',
      //body: JSON.stringify(dataToSend),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({comments: data});
    });
  }

  render() {
    const commentsList = this.state.comments.map(comment => {
      return(
        <div className="comentari">
          <p><b>{comment._links.creator.name}</b></p>
          <p>{comment.text}</p>
          <p>{comment.created_at}</p>
        </div>
      )
      
    })

    return (
      <div> 
        <span>------------------------------------------------------------------------------------</span>
        <p>Comments ({this.state.comments.length})</p>
        <p className="comentaris">{commentsList}</p>
      </div>

     
      
    )
  }


}

export default Comentaris;
