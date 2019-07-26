import React, { Component } from 'react';
import './App.css';

export default class Uncontrolled extends Component {
    constructor(){
        super();
        this.fname = React.createRef();
        this.lname = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.fname.current.value + " " + this.lname.current.value)
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className="App-header">
                <label>
                    First Name: <input type="text" name="fname" defaultValue = "type here" ref={this.fname}/>
                    Last Name: <input type="text" name="lname" defaultValue = "type here" ref={this.lname}/>
                </label>
                <input type="submit" value="submit" />
            </form>

        );
    }
}
