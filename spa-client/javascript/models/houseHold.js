document.addEventListener('DOMContentLoaded', 
() => {
    console.log('houseHold.js is loaded...')
});

class HouseHold {
    static all = []

    constructor(name, members, id){
        this.name = name
        this.members = members
        this.id = id
        this.chores = []
        
        HouseHold.all.push(this)
    }

    addChore(chore){
        let c = new Chore(chore.name, chore.status, chore.id)
        this.chores.push(c)
    }
}
