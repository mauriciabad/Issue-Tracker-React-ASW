import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import './IssueList.css'

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 650,
//   },
// }));

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
    // const classes = useStyles();

    return (
    <Paper /*className={classes.root}*/>
      <Table /*className={classes.table}*/>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">T</TableCell>
            <TableCell align="center">P</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="right">Votes</TableCell>
            <TableCell align="right">Watches</TableCell>
            {/* <TableCell align="right">Assigned uTableCellr</th> */}
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.issues.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row"><a className="issue_table__link" href={`/issues/${row.id}`}>{row.title}</a></TableCell>
              <TableCell align="center"><img className="issue_table__img" src={`/img/${row.kind}.svg`} alt={row.kind}></img></TableCell>
              <TableCell align="center"><img className="issue_table__img" src={`/img/${row.priority}.svg`} alt={row.priority}></img></TableCell>
              <TableCell align="center"><img className="issue_table__img" src={`/img/${row.status}.jpg`} alt={row.status}></img></TableCell>
              <TableCell align="right">{row.votes}</TableCell>
              <TableCell align="right">{row.watches}</TableCell>
              {/* <TableCell align="right">{row.assigned_user}</TableCell> */}
              <TableCell align="right">{moment(new Date(row.created_at)).fromNow()}</TableCell>
              <TableCell align="right">{moment(new Date(row.updated_at)).fromNow()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    )
  };


};

export default IssueList;