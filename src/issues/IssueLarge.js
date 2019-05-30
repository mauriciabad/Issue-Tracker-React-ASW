import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Comment from './comments/Comment';
import Typography from '@material-ui/core/Typography';
import './Issue.css'
import moment from 'moment';

class IssueLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {},
    };
  }

  componentDidMount(){
    fetch(`https://asw-issue.herokuapp.com/issues/${this.props.match.params.id}.json`, {
      method: 'GET',
      //body: JSON.stringify(dataToSend),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({issue: data});
    });
  }

  render() {
    return (
      <Paper className="issue_paper">
        <Typography variant="h3" component="h3">{this.state.issue.title}</Typography>
        <Typography component="p"><b>id</b>: {this.state.issue.id}</Typography>
        <Typography component="p"><b>description</b>: {this.state.issue.description}</Typography>
        <Typography component="p"><b>created_at</b>: {moment(new Date(this.state.issue.created_at)).fromNow()}</Typography>
        <Typography component="p"><b>updated_at</b>: {moment(new Date(this.state.issue.updated_at)).fromNow()}</Typography>
        <Typography component="p"><b>kind</b>: {this.state.issue.kind}</Typography>
        <Typography component="p"><b>priority</b>: {this.state.issue.priority}</Typography>
        <Typography component="p"><b>status</b>: {this.state.issue.status}</Typography>
        <Typography component="p"><b>votes</b>: {this.state.issue.votes}</Typography>
        <Typography component="p"><b>watches</b>: {this.state.issue.watches}</Typography>
     
        <Comment issue={this.props.match.params.id}/>
      </Paper>
    );
  }
}

export default IssueLarge;