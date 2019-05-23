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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {this.state.issues.map((item, index) => (
            <IssueListRow id={item.id} title={item.title} />
          ))}
        </tbody>
      </table>
    )
  };


};

export default IssueList;