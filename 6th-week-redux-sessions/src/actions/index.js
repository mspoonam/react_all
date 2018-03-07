const  {UPGRADE_PLAN,ADD_PLAN,TOGGLE_CHAT,UPDATE_LOCATION} = require("../common")


const UpgradeUserPlan = (currentPlan, upgraded) => {

    return {
        type: UPGRADE_PLAN,
        payload: currentPlan ,
        updateUpgrade: upgraded
    }  
}

const AddValentine = ({ id, name, cost }) => {
    return {
      type: ADD_PLAN,
      payload: {
        id,
        name,
        cost
      }
    };
};


const toggleChatStatus = (can_chat) => {
    return {
        type: TOGGLE_CHAT,
        update_can_chat: can_chat 
    }  
}

const UpdateLocation = ({ street, city, state, postcode }) => {
    return {
      type: UPDATE_LOCATION,
      payload: {
        street,
        city,
        state,
        postcode
      }
    };
};

module.exports = {
    UpgradeUserPlan , AddValentine , toggleChatStatus , UpdateLocation
}