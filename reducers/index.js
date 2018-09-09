import { ADD_MEMBER, LOAD_DATA} from "../actions/types";
import { addMember } from "../actions/creators";

import { writeMembers } from "../storage/members"

//import md5 from "md5"
//let nextId = 0

const initialState = () => { 
    return { members: []}
}

// this save all members into AsyncStorage with 
// key = MEMBERS_KEY = "smartweather:members"
function saveMembers(state) {
    writeMembers(state)
    return state
}

export const reducer = (state = initialState(), action) => {
    switch(action.type) {
        case LOAD_DATA:
            return action.data
        case ADD_MEMBER:
            //k finally I figure it out need to be action.data.name,..
           // let newState = {members: [ ...state.members.concat(addMember(0, action.data.name, action.data.zip))]}
            let newState = {members: [ ...state.members.concat(addMember(action.data.categoryID, action.data.name, action.data.zip))]}    
            saveMembers(newState)
            return newState
        default:
            return state
    }
}