import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import Dressberry from './DressBerry';
// import Clock from './Clock';
// import { Listnkey } from './Listnkey';
// import Axios from './Axios';
// import Conditional from './Conditional';
// import Controlled from './Controlled';
// import Uncontrolled from './Uncontrolled'
//import Routing from './Routing';
import CoursesPage from './CoursesPage';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"; //connects store to our react redux app
import rootreducer from './rootreducer';
import thunk from 'redux-thunk'


const initialState ={};

const store = createStore(rootreducer,initialState,
    applyMiddleware(thunk));


ReactDOM.render (<Provider store={store}> <CoursesPage /></Provider>, document.getElementById('root'));


//ReactDOM.render(<div> <Routing /></div>,document.getElementById('root'));

//ReactDOM.render(<div><Clock /> <Dressberry /><Listnkey /><Axios /> <Conditional /> <Controlled /><Uncontrolled /></div>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
