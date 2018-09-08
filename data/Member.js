
import md5 from "md5"

class Member {
    // use in actions/creators.js
    constructor(categoryID, name, zip) {
        this.categoryID = categoryID
        this.name = name
        this.zip = zip
        this.id = md5(categoryID + name)
    }

    // use Asynch storage ?? or where
    setFromObject(ob) {
        this.categoryID = ob.categoryID
        this.name = ob.name
        this.zip = ob.zip
        this.id = ob.id
    }

    // this is deserializer to use in storage/members.js
    static fromObject(ob) {
        let m = new Member(ob.categoryID, ob.name, ob.zip, id)
        m.setFromObject(ob)
        return m
    }
}

export default Member