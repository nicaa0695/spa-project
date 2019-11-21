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

completeChoreHandler() {
    let cardIns = event.target.parentNode
    cardIns.querySelector('.reset-chore-button').style.display = 'block'
    event.preventDefault()

    let toggleResetBtn = event.target.style.display = 'none'
    

    let statusUpdate = event.target.previousElementSibling
    statusUpdate.innerHTML = `Completed!`
    statusUpdate.style.color = 'green'

    fetch(`${Api.CHORES_URL}/${this.id}`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'status': statusUpdate.textContent
        })
    })
    .then(parseJSON)
    .then(newStatus => {
        statusUpdate
    })
}

resetHandler() {
    let resetStatus = event.target.previousElementSibling.previousElementSibling
    resetStatus.innerHTML = ' Incomplete'
    resetStatus.style.color = 'red'

    let toggleCompleteBtn = event.target.previousElementSibling
    toggleCompleteBtn.style.display = 'block'

    let toggleResetBtn = event.target.style.display = 'none'
    event.preventDefault()

    fetch(`${Api.CHORES_URL}/${this.id}`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'status': resetStatus.textContent
        })
    })
    .then(parseJSON)
    .then(newStatus => {
        resetStatus
    })
    
}

