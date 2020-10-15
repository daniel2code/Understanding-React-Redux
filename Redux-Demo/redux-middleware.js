//Middleware is a suggested way to extend redux with custom functionality
 //Middleware is used for logging, crash reporting, performing asynchronous tasks etc

const redux = require("redux")
const createStore = redux.createStore
//we bring in redux library and create a store out of it.

const combineReducers = redux.combineReducers
//we bring in combine reducers to combine multiple reducers to single reducer
//and 


//setting up and using the middleware
const applyMiddleWare = redux.applyMiddleware
//to use the apply middleware in our logger we call in the function from redux

const reduxLogger = require("redux-logger")
//to use redux-logger we bring it in our application

const logger = reduxLogger.createLogger()
//we call the createLogger function

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
//we define our actions

function buyCake(){
    return{
        type: "BUY_CAKE"
    }
}//one of the action creator that returns the type property

function buyIceCream(){
    return{
        type: "BUY_CAKE"
    }
}//another action creator that return a type property

const initialCake = {
    numOfCake: 10
}//the state of our application, an object that holds a value

const initialIceCream = {
    numOfIceCream: 20
}//another state of our application

//Note we created different state because we are creating multiple reducers it will be more specific while passing in the state parameter in our reducer function

const cakeReducer=(state = initialCake, action)=>{
    switch(action.type){
        case "BUY_CAKE":return{
            ...state,
            numOfCake: state.numOfCake - 1
        }
        default: return state
    }
}//our first reducer function

const iceCreamReducer=(state=initialIceCream, action)=>{
    switch(action.type){
        case "BUY_ICECREAM" : return{
            ...state,
            numOfIcream: state.numOfIceCream - 1
        }
        default: return state
    }
}// second reducer function

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream: iceCreamReducer
})
//the combineReducers takes an object as parameter whereby we pass all our reducers as values in the object

const store = createStore(rootReducer, applyMiddleWare(logger))
// we pass our createStore which takes in a combine reducer as parameter

const unsubscribe = store.subscribe(()=>  {})
//this listens to store and prints the changes out 
//the getStore() gets the value of the current state 

store.dispatch(buyCake())
store.dispatch(buyCake())
//th
unsubscribe()