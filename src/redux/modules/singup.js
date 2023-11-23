
const ADD_MEMBER = 'singup/ADD_MEMBER';


export const addMember =(payload) => {
    return{type :ADD_MEMBER, payload};
};


 const initialState = null

const singup = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MEMBER:
          console.log('멤버',action);
        const activeMember = action.payload;
        return activeMember;


      default:
        return state;
    }
  };

export default singup