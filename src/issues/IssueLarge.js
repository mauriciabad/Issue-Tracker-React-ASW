import React, { Component } from 'react';

import Comentaris from './Comentaris';

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
      <div>
        <h1>IssueLarge</h1>
        <p><b>id</b>: {this.state.issue.id}</p>
        <p><b>title</b>: {this.state.issue.title}</p>
        <p><b>description</b>: {this.state.issue.description}</p>
        <p><b>created_at</b>: {this.state.issue.created_at}</p>
        <p><b>updated_at</b>: {this.state.issue.updated_at}</p>
        <p><b>kind</b>: {this.state.issue.kind}</p>
        <p><b>priority</b>: {this.state.issue.priority}</p>
        <p><b>status</b>: {this.state.issue.status}</p>
        <p><b>votes</b>: {this.state.issue.votes}</p>
        <p><b>watches</b>: {this.state.issue.watches}</p>
     
        <Comentaris issue={this.props.match.params.id}/>
      </div>
    );
  }
}

export default IssueLarge;