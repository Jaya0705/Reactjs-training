import React from 'react'

export default class Sum extends React.Component {
render(){
    return (
        <div>
            <p>{this.props.n1 + this.props.n2}</p>
        </div>
    );
}
}