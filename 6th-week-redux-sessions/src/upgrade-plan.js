const redux = require("redux");
const { UpgradeUserPlan } = require("./actions");
const  {UPGRADE_PLAN} = require("./common")
const  {initialState} = require("./userdata")

/* 
create an action to upgrade the user's current plan.
*/
// created in actions/index.js

/* 
Write a reducer to handle the above action
Make sure to update both the plan and set the upgraded flag to true
*/
const planUpgradeReducer = function(state = initialState.profile ,action){
    switch(action.type){
      case UPGRADE_PLAN: 
      return {
        ...state ,
        currentPlan: action.payload, 
        upgraded: action.updateUpgrade
      }
      default:
        return state
    }
}


/* create a store with the initial data above and the action */
const store = redux.createStore(planUpgradeReducer)
const firstState = store.getState()

/* 
  Fire the action
*/
const actionUpgradeToGold = store.dispatch(UpgradeUserPlan("gold",true))
const afterGoldState =  store.getState()

const actionUpgradeToSilver = store.dispatch(UpgradeUserPlan("silver",true))
const afterSilverState =  store.getState()
/* 
expected output: modified nextState
the store via store.getState() 
*/
console.log("\n firstState \n")
console.log(firstState)
console.log("\n afterGoldState \n")
console.log(afterGoldState)
console.log("\n afterSilverState \n")
console.log(afterSilverState)


