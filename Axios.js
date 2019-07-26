import React, { Component } from 'react';
import axios from 'axios';

export default class Axios extends Component {
    state = {posts: []};
    ID=10;


    componentDidMount(){
        
     setTimeout(()=>
        axios
          .get(`https://jsonplaceholder.typicode.com/users/?id=${this.ID}`)
        // fetch("https://jsonplaceholder.typicode.com/users")
        //   .then(data => data.json())
          .then(res => this.setState({posts: [].concat(res.data)}))
          .catch(err => console.log(err))
          ,1000)
    }


    render() {
        //if (this.state.posts.length === 0) return <h3><i>loading...</i></h3>
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>USERNAME</th>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.length>0 && 
                          this.state.posts.map((i) => (
                            <tr key={i.id}>
                                <td style={{ background: "skyblue" }}>{i.username}</td>
                                <td>{i.name}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
