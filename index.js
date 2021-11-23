let myleads = []
let historial = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-btn")
const deleteEl = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const historialEl = document.getElementById("historial-btn")



saveEl.addEventListener("click", function () {

    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    localStorage.setItem("history", JSON.stringify(historial))
    renderlist()

})

deleteEl.addEventListener("dblclick", function () {

    localStorage.removeItem("myleads")
    myleads = []
    renderlist()

})




const savedLeads = JSON.parse(localStorage.getItem("myleads"))
if (savedLeads){
    myleads = savedLeads
}

console.log(savedLeads)

if (savedLeads) {
    myleads = savedLeads
    renderlist()
}


function renderlist() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {

        listitems += `
<li>

<a target='_blank' href='${myleads[i]}'> 
${myleads[i]}
</a>

</li>
`

    }
    ulEl.innerHTML = listitems

}

