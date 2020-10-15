//below is how to create multiple reducers in our application

//as our application grows there will be need for state to grow as well
//therefore we need to manage our store via multiple reducers.

const redux = require("redux")
const createStore = redux.createStore
//we bring in redux library and create a store out of it.

const combineReducers = redux.combineReducers
//we bring in combine reducers to combine multiple reducers to single reducer
//and 

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

const store = createStore(rootReducer)
// we pass our createStore which takes in a combine reducer as parameter

const unsubscribe = store.subscribe(()=> console.log("update State", store.getState()))
//this listens to store and prints the changes out 
//the getStore() gets the value of the current state 

store.dispatch(buyCake())
store.dispatch(buyCake())
//th
// unsubscribe()