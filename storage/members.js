import { AsyncStorage } from "react-native"

import Member from "../data/Member"

export const MEMBERS_KEY = "smartweather:members"

 // this is deserializer to use in storage/members.js
 //static fromObject(ob) in data/Member.js
 // key is id
async function read(key, deserializer) {
    try {
        let val = await AsyncStorage.getItem(key)
        if (val !== null) {
            let readValue = JSON.parse(val).map(serialized => {
                return deserializer(serialized)
            })
            return readValue
        } else {
            console.info(`${key} not found on disk.`)
            return []
        }
    } catch (error) {
        console.warn("AyncStorage error:", error.message)
    }
}

async function write(key, item) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(item))
    } catch (error) {
        console.error("AsynchStorage error: ", error.message)
    }
}

export const readMemebers = (key ) => {
    // fromObject is deserializer function
    // we pass in key= id , 2nd arg = deserializer function
    return read(MEMBERS_KEY, Member.fromObject)
}

export const writeMembers = members => {
    return write(MEMBERS_KEY, members)
}

