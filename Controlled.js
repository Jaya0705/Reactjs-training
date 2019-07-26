import React, { Component } from 'react';
import './App.css';

export default class Controlled extends Component {
    state = {fname : 'type here', lname : 'type here'};

    handleSubmit(event){
            event.preventDefault();
            alert(this.state.fname + " " + this.state.lname)
    }

    handleChange(event){
          this.setState({[event.target.name] : event.target.value });
    }

    
    render() {
        return (
            <form onSubmit ={(e)=> this.handleSubmit(e)} className ="App-header">
                <label>
                    First Name: <input type ="text" name ="fname" value ={this.state.fname} onChange={(e)=>this.handleChange(e)}/>
                    Last Name: <input type="text" name="lname" value={this.state.lname}  onChange={(e) => this.handleChange(e)} />
                </label>
                    <input type="submit" value ="submit" />  
            </form>
            
        );
    }
}
