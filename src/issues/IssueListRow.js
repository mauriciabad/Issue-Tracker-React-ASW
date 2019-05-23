import React, { Component } from 'react';

class IssueListRow extends Component {
   render() {
    return (
      <tr>
        <th>{this.props.issue.title}</th>
        <th>{this.props.issue.kind}</th>
        <th>{this.props.issue.priority}</th>
        <th>{this.props.issue.status}</th>
        <th>{this.props.issue.votes}</th>
        <th>{this.props.issue.watches}</th>
        <th>{this.props.issue.created_at}</th>
        <th>{this.props.issue.updated_at}</th>
      </tr>
    )
  };
};

export default IssueListRow;