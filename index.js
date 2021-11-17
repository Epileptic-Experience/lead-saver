let myleads = []
const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")




//asi solo se manipula el dom un a vez

//la función tiene un let con valor vacio y una cuenta FOR, esta cuenta usa myleads como limite y es usada para modificar listitmes cada vez que es llamada
//a su vez,listitems tien un html envuelto para darle formato de lista de links,luego, el ulEl cambia su innerhtml para ser el de listitems y asi renderizar la lista deseaa

function renderlist() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
        listitems +=   "<li> <a target ='_blank' href='" + myleads[i] + "'>" + myleads[i] + " </a>  </li>"
    }
    ulEl.innerHTML = listitems
    console.log(listitems)
}


//este eventlistener le da un valor vacio al input,esto permite al usuario editarlo como le parezca tras lo cual el mismo pushea ese valor editado a myleads cada vez que se hace click en SAVE
//el valor es agregado a myleads y la funcion listitems es llamada, al tener un += en el for loop esta renderiza myleads con el ultimo valor agregado por el eventlistener sin borrar el anterior
saveEl.addEventListener("click", function () {

    inputEl.value = ""
    myleads.push(inputEl.value)
    console.log(myleads)
    renderlist()
    
})