deleteChoreHandler() {
    event.preventDefault()
    fetch(`${Api.CHORES_URL}/${this.id}`,{
        method: 'DELETE'
    })
    .then(() => { 
        document.getElementById(`${this.id}`).remove()
        Chore.all = Chore.all.filter(chore => chore.id !== this.id)
    })
}

