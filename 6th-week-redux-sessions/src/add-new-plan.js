const redux = require("redux");
const { AddValentine } = require("./actions");
const  {ADD_PLAN} = require("./common")
const  {initialState,valentine_plan_details} = require("./userdata")

/* 
create an action to add a new plan called "valentine special".
You can set the id: "33453ttt" and the cost: 1500
*/

// created in actions/index.js

/* 
Write a reducer to handle the above action
Make sure to update the plans array immutably
*/

const addValentineReducer = function(state = initialState,action){
    switch (action.type){
      case ADD_PLAN:
      return {
        ...state,
        plans: [...state.plans,action.payload]
      }
      default :
        return state
    }
}

/* create a store with the initial data above and the action */
const store = redux.createStore(addValentineReducer)
const origingalPlans = store.getState()

/* 
  Fire the action
*/
const addValentineAction = store.dispatch(AddValentine(valentine_plan_details))

const nextState = store.getState()
/* 
expected output: modified nextState
the store via store.getState() 
*/
console.log("origingalPlans\n");
console.log(origingalPlans);
console.log("\nnextState\n");
console.log(nextState);
