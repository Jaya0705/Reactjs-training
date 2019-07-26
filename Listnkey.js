import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export function Listnkey() {
    let array =[{name: 'Jaya', fav: 'icecream',id: 0},{name:'Binu', fav: 'jjj',id: 1}];
    return (
        <div className="App-header">
            <ul>
                {array.map((i) => <div key={i.id}>
                                          <li> Name : {i.name} </li> 
                                          <li> Fav :{i.fav}</li>
                                  </div>)}
            </ul>

            
            <table className="table table-hover">
                <tbody>
                     {array.map((i)=>(
                                     <tr key={i.id}>
                                       <td style={{background: "skyblue"}}>{i.name}</td>
                                       <td>{i.fav}</td>
                                     </tr>))}
                </tbody>
            </table>
           
            
        </div>
    );
}
