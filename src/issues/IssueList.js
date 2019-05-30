import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import './IssueList.css'

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
  }

  render() {
    return (
      <div>
        <Fab href="/issues/new/" color="primary" aria-label="Add" size="large" style={{position: 'fixed', bottom: '2em', right: '2em'}}>
          <AddIcon />
        </Fab>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{paddindRight: '4px'}}>Title</TableCell>
                <TableCell align="center" className="smallCol">T</TableCell>
                <TableCell align="center" className="smallCol">P</TableCell>
                <TableCell align="center" className="smallCol">Status</TableCell>
                <TableCell align="right" className="smallCol hide2">Votes</TableCell>
                <TableCell align="right" className="smallCol hide2">Watches</TableCell>
                {/* <TableCell align="right">Assigned uTableCellr</th> */}
                <TableCell align="right" className="smallCol hide">Created</TableCell>
                <TableCell align="right" className="hide" style={{paddindleft: '4px'}}>Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.issues.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" style={{paddindRight: '4px'}}>
                    <Link to={`/issues/${row.id}`} className="issue_table__link">{row.title}</Link>
                  </TableCell>
                  <TableCell align="center" className="smallCol"><img className="issue_table__img" src={`/img/${row.kind}.svg`} alt={row.kind}></img></TableCell>
                  <TableCell align="center" className="smallCol"><img className="issue_table__img" src={`/img/${row.priority}.svg`} alt={row.priority}></img></TableCell>
                  <TableCell align="center" className="smallCol"><img className="issue_table__img" src={`/img/${row.status}.jpg`} alt={row.status}></img></TableCell>
                  <TableCell align="right" className="smallCol hide2">{row.votes}</TableCell>
                  <TableCell align="right" className="smallCol hide2">{row.watches}</TableCell>
                  {/* <TableCell align="right">{row.assigned_user}</TableCell> */}
                  <TableCell align="right" className="smallCol hide">{moment(new Date(row.created_at)).fromNow()}</TableCell>
                  <TableCell align="right" className="hide" style={{paddindleft: '4px'}}>{moment(new Date(row.updated_at)).fromNow()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default IssueList;
