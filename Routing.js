import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import './App.css';

let Home = () => <h2>Home page</h2>
let About = () => <h2>About us</h2>
let Contact =(props) => <div>
                        <h2> Contact us</h2>
                        <nav>
                            <ul style={{background: 'yellow'}}>
                                <li><Link to={ `${props.match.url}/coimbatore`}>Coimbatore</Link></li>
                                <li><Link to='/contactus/chennai'>Chennai</Link></li>
                                <li><Link to='/contactus/pune'>Pune</Link></li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path='/contactus/:city' strict component={Location}></Route>
                            <Route path={props.match.url} render={()=> <h2>Please select a location.</h2>}></Route>                   
                        </Switch>
                   </div>

let Location =(props) => <h1>You have selected {props.match.params.city}.</h1>
let Pagenotfound = () => <h2> Page not found 404 error</h2>


export default class Routing extends Component {
    render() {
        return (
            <div style={{color : 'skyblue'}}>
                <Router>
                <h1>Routing app</h1>
                    <nav style={{background :"skyblue", color : "black"}}>
                        <NavLink activeStyle= {{color :"red"}} to = "/home">
                            Home
                        </NavLink>|

                        <NavLink activeClassName = "App-link" to = "/about">
                            About us
                        </NavLink>|

                        <Link to ="/contactus"> Contact us</Link>  
                    </nav>
                        <Switch>
                            <Route path='/' exact component={Home}></Route>   
                            <Route path='/home'  exact component = {Home}></Route>
                            <Route path='/about' exact strict component = {About}></Route>
                            <Route path='/contactus' component ={Contact}></Route>
                            <Route component = {Pagenotfound}></Route>
                        </Switch>
                </Router>
            </div>
           
        )
    }
}
