const redux = require("redux")
const createStore = redux.createStore
// here the store holds our appication state

//defining our actions

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

// {
//     type: BUY_CAKE
// }

function buycake(){
    return{
        type: "BUY_CAKE"
    }
}

function buyIceCream(){
    return {
        type: "BUY_ICECREAM"
    }
}

//an action is an object with a type property
//action creator are function that return an action


//the state of app
const initialValues = {
    numOfCakes: 10,
    numberOfIceCreams: 20,
}

// the reducer function describing how actions are dispatched and how the state is updated

const reducer = (state= initialValues, action)=>{
    //the reducer takes two parameters the store or the initial values and the action
    switch(action.type){
    // using the switch statement we pass in the action type as argument
        case BUY_CAKE : return{
            ...state,
           numOfCakes: state.numOfCakes - 1 
        }
        // using the case we specify the type of action and return the new state of our store
        
            // if our store has many properties we make a copy of the store using the spread operator in our function
            // and then we specify the specific property we want to change
           
            case BUY_ICECREAM : return{
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1,
            }

        default: return state;
}
}

const store = createStore(reducer)
console.log("initial state", store.getState())
// we make use of the store here and it accepts a parameter which is a reducer function that we have above
// the reducer has the state of our application this is required to make the transitions we need
// the store.getState() gets the state of our aplication and logs it

const unSubscribe = store.subscribe(()=> console.log("updated state", store.getState()))
// the unsubscribe is a listener that listens to our state and logs our state to the console.


store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// the dispatch function takes the action as parameter, it checks the type and match it to the reducer and updates the state

unSubscribe()

// console.log(reducer(initialValues, buycake()))