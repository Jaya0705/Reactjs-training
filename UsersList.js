import { connect } from "react-redux";
import React from 'react';


class UsersList extends React.Component {
render(){
    return (
        <div>
            {JSON.stringify(this.props.users)}
            {/* {this.props.users.map((user) => <li> {user.name}</li>)}; */}
        </div>
    )
}
}

function mapStateToProps(state) { //last step where in takes the essential state from the entire state and renders it to webpage
    return { users: state.users }
}



export default connect(mapStateToProps)(UsersList);