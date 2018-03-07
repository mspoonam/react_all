const valentine_plan_details = {
    id:"33453ttt", name:"valentine special", cost:"1500" 
}

const initialState = {
    profile: {
      gender: "female",
      name: {
        title: "mrs",
        first: "dânia",
        last: "da mota"
      },
      phone: "015394 16261",
      cell: "0757-275-048",
      location: {
        street: "2591 rua pará ",
        city: "teixeira de freitas",
        state: "mato grosso",
        postcode: 31682
      },
      currentPlan: "free",
      upgraded: false
    },
    plans: [
      {
        id: "33453ttt",
        name: "gold",
        cost: 3500
      },
      {
        id: "334545tt",
        name: "silver",
        cost: 2500
      }
    ]
  };
  

const initialStateContactMe = {
  profile: {
    gender: "female",
    name: {
      title: "mrs",
      first: "dânia",
      last: "da mota"
    },
    phone: "015394 16261",
    cell: "0757-275-048",
    location: {
      street: "2591 rua pará ",
      city: "teixeira de freitas",
      state: "mato grosso",
      postcode: 31682
    },
    currentPlan: "free",
    upgraded: false,
    relationship_actions: {
      se: "6e344ff4f1940c62fc2f7dd2f116696a",
      contacts_status: "not_contacted",
      contactstatus_title: "Show All",
      call_sms: "CALL / SMS",
      can_cancel: false,
      can_send_reminder: true,
      no_action: true,
      maybe_action: true,
      can_chat: false
    }
  },
  plans: [
    {
      id: "33453ttt",
      name: "gold",
      cost: 3500
    },
    {
      id: "334545tt",
      name: "silver",
      cost: 2500
    }
  ]
};

module.exports = {
    valentine_plan_details , initialState , initialStateContactMe
}
