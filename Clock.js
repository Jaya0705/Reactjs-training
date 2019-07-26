import React from 'react';
import './App.css';

export default class Clock extends React.Component{
    constructor(){
        super();
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.id = setInterval(()=> this.tick(),1000);
    }

    tick(){
        this.setState({date: new Date()});
    }

    componentWillUnmount(){
        clearInterval(this.id);
    }

    render(){
        return (
               <div className="App-header">
                   {this.state.date.toLocaleString()}
               </div>
        );
    }
}