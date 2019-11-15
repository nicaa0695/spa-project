document.addEventListener('DOMContentLoaded', 
() => {
    console.log('index.js is loaded...')
});

function clearFamilyDD(){
    document.querySelector("#family-select").innerHTML = ""
}
function clearForm() {
    document.querySelector(".input-text").value = ""
}

function clearNewHouseForm() {
    document.querySelector('.house-hold-input-text').value = ""
    document.querySelector('.house-members-input-text').value  = ""
}

function clearChoreDivs(){
    choreCollection.innerHTML = ""
}

function clearNewChore() {
    document.querySelector("#select").innerHTML = ""  
}

addHouseHoldBtn.addEventListener('click', () => {
    addHouseHold = !addHouseHold
    if (addHouseHold){
        addHouseHoldBtn.textContent = "Close"
        housePopUp.style.display = 'block'
        housePopUp.addEventListener('submit', e => {
            e.preventDefault()
            HouseHold.postHouseHold(e.target)
       })
    } else {
        addHouseHoldBtn.textContent = "Add a New House Hold"
        housePopUp.style.display = 'none'
    }
})
