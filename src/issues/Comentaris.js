import React, { Component } from 'react';

import './Comentaris.css'
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Comentaris extends Component {
  constructor() {
    super();
    
    this.state = {
      comments: [],
      newComment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newComment: event.target.value});
  }

  handleSubmit(event) {
    
    //TODO: Posar current user
    let dataToSend = {
      "text": this.state.newComment,
      "issue_id": this.props.issue,
      "user_id": "2"
    }

    fetch(`https://asw-issue.herokuapp.com/issues/${this.props.issue}/comments.json`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
      alert('Comentari creat!',window.location.reload());
    });

    event.preventDefault();
    
  }

  handleDelete(commentId) {
    console.log("comentari a borra = ",this.props.issue , commentId)
    fetch(`https://asw-issue.herokuapp.com/issues/${this.props.issue}/comments/${commentId}.json`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
      alert('Comentari eliminat!',window.location.reload());
    });

     
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
    const commentsList = this.state.comments.map((comment , i) => {
      return(
        <div className="comentari" key={i}>
          <b>{comment._links.creator.name}</b>
          <p>{comment.text}</p>
          <p>{moment(new Date(comment.created_at)).fromNow()}</p>
          <Button variant="contained" size="small" >Editar</Button>
          <Button style={{marginLeft:'1em'}} variant="contained" size="small" 
            onClick={() => {this.handleDelete(comment.id)}}>Eliminar</Button>
        </div> 
      )
      
    })

    return (
      <div className="border"> 
        <p>Comments ({this.state.comments.length})</p>
        <div className="comentaris">{commentsList}</div>
        <form onSubmit={this.handleSubmit}>
          <TextField className="full"
            label="Comment"
            placeholder="What would you like to say?"
            margin="normal"
            variant="outlined"
            value={this.state.newComment}
            onChange={this.handleChange}
          ></TextField> 
        </form>
      </div>
    )
  }
}

export default Comentaris;
