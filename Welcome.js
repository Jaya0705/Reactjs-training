import React from 'react';
import PropTypes from "prop-types";

export default class Welcome extends React.Component {

render(){

   function greet(){
        return <h1>Welcome!!</h1>
    }
    return (
        <div>
            <p>{greet()}</p>
            <h1> {this.props.name}</h1>
            <p>{this.props.msg}</p>
            <p>{this.props.age}</p>
            <p>Blog name :{this.props.blog.blogname}</p>
            <p>ID: {this.props.blog.id}</p>
            
        </div>
    );
}
}

Welcome.propTypes={
    name: PropTypes.string.isRequired,
    msg: PropTypes.string

}

