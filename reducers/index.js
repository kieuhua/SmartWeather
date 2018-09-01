import { ADD_MEMBER } from "../actions/types";
import { addMember } from "../actions/creators";

//import { _mkMembersView } from "./FamilyScreen"

//import md5 from "md5"
//
//let nextId = 0
//export const reducer = (state=[], action) => {

const initialState = () => { 
    return { members: []}
}
export const reducer = (state = initialState(), action) => {
    switch(action.type) {
        case "ADD_MEMBER":
            //alert("kieu in reducers" + action.data.name + action.data.zip)
            // you are already did this in action creator
            //k finally I figure it out need to be action.data.name,..
            return {members: [ ...state.members.concat(addMember(0, action.data.name, action.data.zip))]}
        default:
            return state
    }
}