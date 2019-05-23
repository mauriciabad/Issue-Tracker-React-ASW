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
    let issues = this.state.issues.reduce((total, issue) => total+`
    <tr>
      <th>${issue.title}</th>
      <th>${issue.id}</th>
    </tr>`, '');
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          <IssueListRow id="000" title="AAA"/>
          {issues}
        </tbody>
      </table>
    )
  };


};

export default IssueList;