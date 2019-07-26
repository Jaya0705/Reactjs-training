import React from 'react';
import {connect} from "react-redux";
import {courseAction} from "./courseAction";
import {fetchUsers} from "./courseAction";
import CoursesList from "./CoursesList";
import UsersList from "./UsersList";

class CoursesPage extends React.Component{
   
    handleChange(e){ 
      this.title = e.target.value;
    }

    handleClick() { // calls dispatchtoprops with the current action 
       this.props.addcourse({title: this.title});
    }

    componentDidMount(){
        this.props.fetchusers();
    }

    render(){
        return (
        <div>
            <label>Enter a course name:
                <input type="text" name="course" onChange ={(e) =>this.handleChange(e)}></input>
            </label>
            <button onClick ={()=> this.handleClick()}> ADD </button>
            <CoursesList />
            <UsersList />
       </div>
    )
}};


 function mapDispatchToProps(dispatch){//dispatch actions to action creator
    return{
        addcourse: (course) => dispatch(courseAction(course)), 
        fetchusers: () => dispatch(fetchUsers())
    }

}

export default connect(null, mapDispatchToProps)(CoursesPage);
