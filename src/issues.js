import React, { Component } from 'react';
import './App.css';
/*global fetch*/
/*global data*/
/*global response*/


class issues extends Component {
    constructor() {
    	super()
    };
    
    componentDidMount() {
        fetch('https://asw-issue.herokuapp.com/issues.json')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch(error => this.setState({ error, isLoading: false }))
    };   

    render() {
        return{
            //<div className="listIssues" key="key1">Holaaa!</div>
        }
    };
    
    
};

export default issues;
 


