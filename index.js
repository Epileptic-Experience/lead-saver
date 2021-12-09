let myleads = []
let historial = []

const tabEl = document.getElementById("tab-btn")
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-btn")
const deleteEl = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const historialEl = document.getElementById("historial-btn")

saveEl.addEventListener("click", function () {

    myleads.push(inputEl.value)
    historial.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    localStorage.setItem("history", JSON.stringify(historial))
    render(myleads)

})

historialEl.addEventListener("click", function () {

    render(historial)

})

deleteEl.addEventListener("dblclick", function () {

    localStorage.removeItem("myleads")
    myleads = []
    render(myleads)

})

const tabs = [
    {
        url: "https://www.youtube.com"
    }
]

tabEl.addEventListener("click", function () {

    chrome.tabs.query({
        currentWindow: true,
        active: true
    }); 

    myleads.push(tabs[0].url)
    historial.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)



})




const savedLeads = JSON.parse(localStorage.getItem("myleads"))

const savedHistorial = JSON.parse(localStorage.getItem("history"))



if (savedHistorial) {
    historial = savedHistorial
}

console.log(savedLeads)
console.log(savedHistorial)

if (savedLeads) {
    myleads = savedLeads
    render(myleads)
}


function render(leads) {
    let listitems = ""
    for (let i = 0; i < leads.length; i++) {

        listitems += `
<li>

<a target='_blank' href='${leads[i]}'> 
${leads[i]}
</a>

</li>
`

    }
    ulEl.innerHTML = listitems

}


