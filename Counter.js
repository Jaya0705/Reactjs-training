import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state ={count : this.props.initialval, maxval: 1000};
        //this.handleClick = this.handleClick.bind(this);
    }

    getCount(){
        return this.state.count;
    }
    
    handleReset(){
        this.setState({count :0});
    }

    handleInit(){
        this.setState({count: this.props.initialval})
    }
    
    handleIncrease(props){
        if (this.state.count + this.props.val <= this.state.maxval)
            this.setState((prevState,props)=>(

                { count: prevState.count + this.props.val }
            ));
        else
            alert("max limit reached!!");
      }

    handleDecrease(props){
        if (this.state.count < 0)
            this.setState((prevState,props)=> ({ count: prevState.count - this.props.val}));
        
        else
            alert("negative value oops!");
    }

    render() {
        return (
            <div>
                <p>Hello from counter ! count is {this.getCount()}. Max limit is {this.state.maxval}!</p><br />
                <button onClick= {()=>this.handleIncrease()} >Increment!</button>
                <button onClick={() => this.handleDecrease()} >Decrement!</button>
                <button onClick={()=>this.handleReset()}> Reset</button>
                <button onClick={() => this.handleInit()}> Init</button>
            </div>
        )
    }
}
