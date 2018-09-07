import { ADD_MEMBER } from "./types";

import Member from "./../data/Member"

const addMember = (categoryID, name, zip) => {
    // finally works from fixing reducer, from action.name to  action.data.name

    let newMember = new Member(categoryID, name, zip)
    return { type: "ADD_MEMBER",  data: newMember}
}

export {addMember}