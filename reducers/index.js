import { ADD_MEMBER } from "../actions/types";
import { addMember } from "../actions/creators";

//import md5 from "md5"
//let nextId = 0

const initialState = () => { 
    // I think this is how you create members in storage => this.state.members
    // this.state.members.data.name, zip, categoryID, id
    return { members: []}
}
export const reducer = (state = initialState(), action) => {
    switch(action.type) {
        case "ADD_MEMBER":
            //k finally I figure it out need to be action.data.name,..
            return {members: [ ...state.members.concat(addMember(0, action.data.name, action.data.zip))]}
        default:
            return state
    }
}