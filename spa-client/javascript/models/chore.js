class Chore {
    static all = []

    constructor(name, status='Incomplete', id) {
        this.name = name
        this.status = status
        this.id = id
        Chore.all.push(this)
    }

    static postChore(choreData) {

        let formData = {
            "name": choreData.name.value,
            "status": choreData.status = "Incomplete",
            'house_hold_id': choreData.querySelector('select').value
        }
        
    
        let configObj = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        return fetch(Api.CHORES_URL, configObj)
            .then(response => response.json())
            .then((choreObj) => {
                let houseHold = HouseHold.all.find(chosenFamily => choreObj.house_hold_id == chosenFamily.id)
                let newObj = new Chore(choreObj.name, choreObj.status, choreObj.id)
                houseHold.chores.push(newObj)
                clearChoreDivs()
                houseHold.renderChores()
                clearForm() 
            })
        }

        render() {
            let h2 = document.createElement('h2')
            h2.innerHTML = `<strong>${this.name}</strong>`

            
            let h3 = document.createElement('h3')
            h3.innerHTML = '<em>Status: </em>'
            let p = document.createElement('p')
            p.setAttribute('class', 'chore-status')
            p.innerHTML = `${this.status}`


        }
    }