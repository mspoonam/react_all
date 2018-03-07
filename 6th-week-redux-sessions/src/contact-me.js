
const redux = require("redux");
const  {initialStateContactMe} = require("./userdata")
const { toggleChatStatus } = require("./actions");
const { TOGGLE_CHAT,CAN_CHAT_TOGGLE } = require("./common");
/* 
create an toggle action to toggle the can_chat  flag
You should be able to turn the flag from true to false to true again etc.
*/
// Created inside actions/index.js

/* 
Write a reducer to handle the above action
Make sure to update immutably
*/
const toggleChatReducer = function(state = initialStateContactMe ,action){
    switch(action.type){
      case TOGGLE_CHAT: 
      return {
        ...state ,
          profile: {
              ...state.profile,
              relationship_actions: {
                  ...state.profile.relationship_actions,
                  can_chat: action.update_can_chat
              }
          }
      }
      default:
        return state
    }
}
/* 
  create a store with the initial data above and the action
*/
const store = redux.createStore(toggleChatReducer)
const firtState = store.getState()

/* 
  Fire the action
*/

const getChatData = (data) => data.profile.relationship_actions.can_chat

const toggleFirst = toggleChatStatus(CAN_CHAT_TOGGLE(getChatData(firtState)))
const actionToggleFirst = store.dispatch(toggleFirst)
const afterFirstToggle = store.getState()

const toggleSecond = toggleChatStatus(CAN_CHAT_TOGGLE(getChatData(afterFirstToggle)))
const actionToggleSecond = store.dispatch(toggleSecond)
const afterSecondToggle = store.getState()


/* 
expected output: modified nextState
the store via store.getState() 
*/


console.log(`\n------------------------------------------------firtState------------------------------------------------\n`);
console.log(firtState);

console.log(`\n------------------------------------------------afterFirstToggle------------------------------------------------\n`);
console.log(afterFirstToggle);

console.log(`\n------------------------------------------------afterSecongToggle------------------------------------------------\n`);
console.log(afterSecondToggle);




