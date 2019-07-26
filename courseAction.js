// import axios from 'axios';

export function courseAction(course) {
    return {
        type : "ADD_COURSE",
        course

    }
        
}

export function fetchUsers(){
    return function(dispatch, getState){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => dispatch({type : "FETCH_ALL_USERS", data}))
    }
}