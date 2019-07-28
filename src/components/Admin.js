import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Admin extends Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token == null){
            loggedIn = false;
        }
        this.state={
            loggedIn
        }
    }
    render() {

        return (
            <div>
               <h1>This is an Admin Page</h1>
               <Link to= "/">Logout</Link>
            </div>
        )
    }
}
