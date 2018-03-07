const redux = require("redux");
const  {initialState, location_details_user} = require("./userdata")
const { UpdateLocation } = require("./actions");
const { UPDATE_LOCATION } = require("./common");


/* 
create an action to change the user's location
You can set the new location to:
   {
      street: "garage gully juhu ",
      city: "mumbai",
      state: "maharashtra",
      postcode: 34345
    },
*/
// NOTE :- created a new location for user inside /userdata/index.js
// NOTE :- created a new action inside /actions/index.js

/* 
Write a reducer to handle the above action
Make sure to update the location object immutably
*/
const locationReducer = function(state = initialState, action) {
    switch (action.type){
      case UPDATE_LOCATION:
      return {
        ...state,
        profile: {
          ...state.profile,
          location : {
              street: action.payload.street , 
              city:  action.payload.city , 
              state:  action.payload.state , 
              postcode:  action.payload.postcode , 
          }
        }
      }
      default :
        return state
    }
}

/* 
  create a store with the initial data above and the action
*/
const store = redux.createStore(locationReducer)
const firstStore = store.getState()

/* 
  Fire the action
*/
const actionChangeLocation = store.dispatch(UpdateLocation(location_details_user))
const storeDataAfterAction = store.getState()
/* 
expected output: modified nextState
the store via store.getState() 
*/
console.log("\n---------------------InitialSToreSTate--------------------------")
console.log(firstStore)
console.log("\n---------------------StoreDataAfterAction--------------------------")
console.log(storeDataAfterAction)