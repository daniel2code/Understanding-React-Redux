//here we will be building an asychronous project, getting a list of user data from an API
//our application will exist in three states, loading , data and error

//in our async action creators we need two packages axios and redux-thunk
//axios makes request to an API end point
//redux-thunk Defines async actions creators, it is a middleware


const redux = require("redux")
const createStore = redux.createStore

const applyMiddleWare = redux.applyMiddleware
const thunkMiddleWare =  require("redux-thunk").default
const axios = require("axios")


const initialState = {
    loading: false,
    users: [],
    error: ""
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"
//we create our action creators, ie fuctions that return an action

const fetchUsersRequest = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = ()=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = ()=>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST: 
        return{
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS: 
        return{
            loading: false,
            users: action.payload,
            error: ""

        }

        case FETCH_USERS_FAILURE: 
        return{
            loading: false,
            users: [],
            error: action.payload
        }

        default: state
    }

}

const fetchUsers=()=>{
    return function(dispatch){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((data)=>{
            console.log(reponse.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}
//fetchUser is an action creator

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare ))