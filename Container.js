import React, { Component } from 'react'


let Button =(props)=> <div>This is a {props.color} button</div>

let hoc = WrappedComp => 
  class extends Component {
      state ={color: "skyblue"}
      render(){
        return(
            <div>
                This is a draggable Component <WrappedComp color= {this.state.color}/>
            </div>
        );
    }
};


export default class Container extends Component {
    render() {
        let DraggableButton = hoc(Button);
        return (
            <div>
                <DraggableButton />
            </div>
        )
    }
}
