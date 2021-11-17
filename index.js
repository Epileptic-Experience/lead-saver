let myleads = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")




//asi solo se manipula el dom un a vez
function renderlist() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
        listitems +=   "<li> <a target ='_blank' href='" + myleads[i] + "'>" + myleads[i] + " </a>  </li>"
    }
    ulEl.innerHTML = listitems
    console.log(listitems)
}

saveEl.addEventListener("click", function () {

    myleads.push(inputEl.value)
    console.log(myleads)
    renderlist()
    inputEl.value = ""
    
})