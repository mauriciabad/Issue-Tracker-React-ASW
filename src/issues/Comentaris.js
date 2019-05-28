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
      editing: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newComment: event.target.value});
  }

  handleSubmit() {
    
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
      window.location.reload();
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
      window.location.reload();
    });
  }

  handleEdit(text, id){
    this.setState({ editing: id });
    this.setState({ newComment: text });
  }

  //TODO: Fer que s'actualitzi l'array de comments amb el result
  // i treure el alert 
  editSave(commentId){
    let dataToSend = {
      "text": this.state.newComment
    }

    fetch(`https://asw-issue.herokuapp.com/issues/${this.props.issue}/comments/${commentId}.json`, {
      method: 'PUT',
      body: JSON.stringify(dataToSend),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => window.location.reload())
    .catch(error => console.error('Error:', error))
    .then( );

    this.setState({ editing: 0 })
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
     
    const CommentsList = this.state.comments.map((comment , i) => {
      return(
        <div className="comentari" key={i}>
          <b>{comment._links.creator.name}</b>
          <p>{comment.text}</p>
          <p>{moment(new Date(comment.updated_at)).fromNow()}</p>
          <Button variant="contained" size="small" onClick={() => {this.handleEdit(comment.text, comment.id)}}>Editar</Button>
          <Button style={{marginLeft:'1em'}} variant="contained" size="small" 
            onClick={() => {this.handleDelete(comment.id)}}>Eliminar</Button>
          { this.state.editing === comment.id ? 
            <div >
                <TextField className="full"
                  label="Comment"
                  margin="normal"
                  variant="outlined"
                  value={this.state.newComment}
                  onChange={this.handleChange}>
                </TextField>
                <Button variant="contained" size="small" color="primary" 
                    onClick={() => {this.editSave(comment.id)}}>Save</Button>
                <Button size="small" style={{marginLeft:'1em'}}
                    onClick={() => {this.setState({ editing: 0 })}}>Cancel</Button>
                
            </div> : null }
            
        </div> 
      )
    })



    return (
      <div className="border"> 
        <p>Comments ({this.state.comments.length})</p>
        <div className="comentaris">{CommentsList}</div>
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
