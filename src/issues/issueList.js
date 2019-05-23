import React, { Component } from 'react';
import IssueListRow from "./IssueListRow";

class IssueList extends Component {
  constructor() {
    super();
    this.state = {
      issues: [],
    };
  }

  componentDidMount() {
    fetch(`https://asw-issue.herokuapp.com/issues.json`, {
      method: 'GET',
      //body: JSON.stringify(dataToSend),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({issues: data});
    });
  };

  render() {
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>Title</th>
            <th>T</th>
            <th>P</th>
            <th>Status</th>
            <th>Votes</th>
            <th>Watches</th>
            {/* <th>Assigned user</th> */}
            <th>Created</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {this.state.issues.map((item, index) => (
            <IssueListRow issue={item} />
          ))}
        </tbody>
      </table>
    )
  };


};

export default IssueList;