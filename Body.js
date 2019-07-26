import React from 'react';

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.body}</h1>
                <i>{this.props.type}</i>
            </div>
        
            );
    }

}