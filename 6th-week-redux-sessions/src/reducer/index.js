const planUpgradeReducer = function(state ,action){
    switch(action.type){
      case UPGRADE_PLAN: 
      return {
        ...state ,
        currentPlan: action.payload
      }
      default:
        return state
    }
}

module.exports = {
    planUpgradeReducer 
}
