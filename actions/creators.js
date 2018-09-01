import { ADD_MEMBER } from "./types";

import Member from "./../Member"

let nextID = 0
const addMember = (categoryID, name, zip) => {
    // finally works from fixing reducer, from action.name to  action.data.name

   // alert("in actions creator" + categoryID + name + zip)
    let newMember = new Member(categoryID, name, zip, nextID++)
    return { type: "ADD_MEMBER",  data: newMember}
}

export {addMember}