import React, { Component } from 'react';
import './IssueListRow.css';
import moment from 'moment';

class IssueListRow extends Component {
   render() {
    return (
      <tr>
        <th><a className="TableLink" href={`${process.env.PUBLIC_URL}/issues/${this.props.issue.id}`}>{this.props.issue.title}</a></th>
        <th><img className="TableImage" src={`img/${this.props.issue.kind}.svg`}></img></th>
        <th><img className="TableImage" src={`img/${this.props.issue.priority}.svg`}></img></th>
        <th><img className="TableImage" src={`img/${this.props.issue.status}.jpg`}></img></th>
        <th>{this.props.issue.votes}</th>
        <th>{this.props.issue.watches}</th>
        {/* <th>{this.props.issue.assigned_user}</th> */}
        <th>{moment(new Date(this.props.issue.created_at)).fromNow()}</th>
        <th>{moment(new Date(this.props.issue.updated_at)).fromNow()}</th>
      </tr>
    )
  };
};

export default IssueListRow;