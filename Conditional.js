import React, { Component } from 'react';
import './App.css'

let LoggedIn = (props) => <button onClick = {props.changeStatus}> login</button>
let LoggedOff = (props) => <button onClick = {props.changeStatus}> logoff</button>

export default class Conditional extends Component {
    state = {s : false};

    handleClick(){
        this.setState(prevState=> ({s : !prevState.s}));
    }

    render() {
        let mail=["jj",'']
        return (
            <div className="App-header"> 
                <p> you are logged {this.state.s ? "out" :"in"}! 
                                   {this.state.s ? "please login" : "please logout"}</p>

                {mail.length > 0 && <p>You have {mail.length} unread msgs!!</p>}

                {this.state.s ? 
                <LoggedIn changeStatus={() => this.handleClick()} /> : 
                <LoggedOff changeStatus={() => this.handleClick()}/>
                }

            </div>
        );
    }
}
