
class Member {
    constructor(categoryID, name, zip, id) {
        this.categoryID = categoryID
        this.name = name
        this.zip = zip
        this.id = id
    }

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
/*
    addMember(member) {
        this.members = this.members.concat(member)
    }
*/
}

export default Member