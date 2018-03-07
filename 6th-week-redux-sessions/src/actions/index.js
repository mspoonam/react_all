const  {UPGRADE_PLAN,ADD_PLAN} = require("../common")


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

module.exports = {
    UpgradeUserPlan , addValentine
}