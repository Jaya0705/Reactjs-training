
export default function userReducer(state =[], action) {
    switch (action.type) {
        case "FETCH_ALL_USERS":
            return ([].concat(action.data));

        default: return state
    }

}
