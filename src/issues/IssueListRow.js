import React, { Component } from 'react';

class IssueListRow extends Component {
   render() {
    return (
      <tr>
        <th>{this.props.title}</th>
        <th>{this.props.id}</th>
      </tr>
    )
  };
};

export default IssueListRow;