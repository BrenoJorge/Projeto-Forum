function mascaico() {
    var c=document.querySelector(".container")
    c.style.display="flex"
    document.querySelector("header").querySelector("img").setAttribute("onclick","mascaico2()")
}

function mascaico2() {
    var c=document.querySelector(".container")
    c.style.display="none"
    document.querySelector("header").querySelector("img").setAttribute("onclick","mascaico()")
}

function modal() {
    var c=document.querySelector(".modal")
    var item=document.querySelector(".topico")
    c.style.display="flex"
    item.style.display="none"

}
function modalx() {
    var c=document.querySelector(".modal")
    var item=document.querySelector(".topico")
    c.style.display="none"
    item.style.display="flex"
}