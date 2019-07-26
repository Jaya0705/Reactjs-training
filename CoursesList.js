import { connect } from "react-redux";
import React from 'react';


function CoursesList(props) {
    return (
        <div>
            {props.courses.map((course, index) => <li key={index}> {course.title}</li>)}
        </div>
    )
}

function mapStateToProps(state) { //last step where in takes the essential state from the entire state and renders it to webpage
    return { courses: state.courses }
}



export default connect(mapStateToProps)(CoursesList);