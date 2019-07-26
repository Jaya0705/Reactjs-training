import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';


export default class DressBerry extends Component {
    render() {
        return (
            <div className="App-header">
                <Counter initialval= {77}   val={1}/>
            </div>
        )
    }
}
