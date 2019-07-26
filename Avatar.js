import React from 'react';


export default class Avatar extends React.Component{
render(){
    const imgpath = "https://cdn11.bigcommerce.com/s-1ah1x75lfn/images/stencil/original/products/2171/12120/a_main__51305.1528402196.jpg?c=2"
    return (
        <div>
              <img src={imgpath} className="App-logo" alt="logo" />
        </div>
    );
}
}


