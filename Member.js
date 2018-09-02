
class Member {
    constructor(categoryID, name, zip, id) {
        this.categoryID = categoryID
        this.name = name
        this.zip = zip
        this.id = id
    }

    // I think I may need to use these for Asynch storage to disk
    setFromObject(ob) {
        this.categoryID = ob.categoryID
        this.name = ob.name
        this.zip = ob.zip
        this.id = ob.id
    }

    static fromObject(ob) {
        let m = new Member(ob.categoryID, ob.name, ob.zip, id)
        m.setFromObject(ob)
        return m
    }
}

export default Member