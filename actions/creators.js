import { ADD_MEMBER } from "./types";

export const addMember = (categoryID, name, zip) => {
    return { type: ADD_MEMBER, data: createMember(categoryID, name, zip)}
}