import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Sum from './Sum';
import User from './User';
import Avatar from './Avatar';
import Welcome from './Welcome';


class App extends React.Component{

render()
   {
  const u = { name: "Jaya", id: " And my id is 1", image: logo }; 
    const msg = "hi,";
    

    function greet(){
      return "there!!!";
    };

    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <i>{msg}{greet()}</i>
        
        <Body body="main context1" type =" genre: Horror"/>
        <Body body="main context2" type="genre: Comedy"/>
        <Sum n1={10} n2={20} />
        
        <User info={u} />
        <Avatar />
        
        <Footer />
        <Welcome name="binu" msg="Big guy with big dreams!!" age= "yu are gettin' old, old man!!" blog={{blogname :"behancenet", id:101}}/>

      </div>
    );
}
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
