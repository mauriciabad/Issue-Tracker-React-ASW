import React, { Component } from 'react';
import './IssueListRow.css';

class IssueListRow extends Component {
   render() {
    return (
      <tr>
        <th>{this.props.issue.title}</th>
        <th><img className="TableImage" src={`img/${this.props.issue.kind}.svg`}></img></th>
        <th><img className="TableImage" src={`img/${this.props.issue.priority}.svg`}></img></th>
        <th><img className="TableImage" src={`img/${this.props.issue.status}.jpg`}></img></th>
        <th>{this.props.issue.votes}</th>
        <th>{this.props.issue.watches}</th>
        <th>{this.props.issue.created_at}</th>
        <th>{this.props.issue.updated_at}</th>
      </tr>
    )
  };
};

export default IssueListRow;