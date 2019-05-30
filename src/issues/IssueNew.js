import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Issue.css'

class IssueNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {},
    };
  }

  createIssue(){
    let k = document.getElementById("kind");
    let p = document.getElementById("priority");
    let u = document.getElementById("assigned_user");
    let dataToSend = {
      "title": document.getElementById('title').value,
      "description": document.getElementById('description').value,
      "kind": k.options[k.selectedIndex].value,
      "priority": p.options[p.selectedIndex].value,
      "assigned_user": u.options[u.selectedIndex].value,
      "status": "open"
    }
    console.log('data', dataToSend);
    

    fetch(`https://asw-issue.herokuapp.com/issues`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    })
    // .then((response) => response.json())
    .then((data) => {
      console.log('response',data);
      
      // window.location = "/issues"
    });
  }

  render() {
    return (
      <Paper className="issue_paper">
      <Typography variant="h5" component="h5" style={{textAlign: 'center'}}>New Issue</Typography>
        <form>
          <div className="grid">
            <label>Title</label>
            <input id="title" type="text" name="title" />

            <label>Description</label>
            <textarea id="description" name="description"></textarea>

            <label>Kind</label>
            <select name="kind" id="kind"><option value="bug">bug</option>
              <option value="enhancement">enhancement</option>
              <option value="proposal">proposal</option>
              <option value="task">task</option>
            </select>

            <label>Priority</label>
            <select name="priority" id="priority"><option value="major">major</option>
              <option value="minor">minor</option>
              <option value="trivial">trivial</option>
              <option value="blocker">blocker</option>
              <option value="critical">critical</option>
            </select>


            <label>Assigned user</label>
            <select name="assigned_user" id="assigned_user"><option value="2">Sandra Flores</option>
              <option value="4">xavier Font</option>
              <option value="3">Raimon Mercé Gotsens</option>
              <option value="1">Maurici Abad Gutierrez</option>
            </select>

            <input id="status" value="open" type="hidden" name="status" />
          </div>
          <div className="buttonsDiv">
            <Button variant="contained" size="small" color="primary" 
                      onClick={() => {this.createIssue()}}>Save</Button>
          </div>
        </form>
      </Paper>
    );
  }
}

export default IssueNew;