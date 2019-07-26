import React from 'react';
//import logo from './logo.svg';
import './App.css';


export default class User extends React.Component{
render(){
    return (
        <div>
            <h2 style={{color : 'grey'}}> hi Im {this.props.info.name} </h2>
            <p style={{ background: 'skyblue' }}> {this.props.info.id}</p>
        </div>
    );
}
}