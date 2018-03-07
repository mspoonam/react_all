const  {UPGRADE_PLAN,ADD_PLAN,TOGGLE_CHAT} = require("../common")


const UpgradeUserPlan = (currentPlan, upgraded) => {

    return {
        type: UPGRADE_PLAN,
        payload: currentPlan ,
        updateUpgrade: upgraded
    }  
}

const addValentine = ({ id, name, cost }) => {
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
        payload: can_chat 
    }  
}

module.exports = {
    UpgradeUserPlan , addValentine , toggleChatStatus
}