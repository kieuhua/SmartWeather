import { ADD_MEMBER, LOAD_DATA } from "./types";

import Member from "./../data/Member"

export const addMember = (categoryID, name, zip) => {
    // finally works from fixing reducer, from action.name to  action.data.name
    let newMember = new Member(categoryID, name, zip)
    return { type: ADD_MEMBER,  data: newMember}
}

export const loadData = data => {
    return { type: LOAD_DATA, data: data }
}