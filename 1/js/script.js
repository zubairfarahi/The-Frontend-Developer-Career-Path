const overlay = document.querySelector("#overlay")
const close1 = document.querySelector("#close-modal")
const open1 = document.querySelector("#open-modal")

close1.addEventListener("click",() =>{
    overlay.style.display = "none"
})

open1.addEventListener("click",() =>{
    overlay.style.display = "block"
})