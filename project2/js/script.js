const wash_car = document.querySelector(".btn-1")
const mow_lawn = document.querySelector(".btn-2")
const pull_weed = document.querySelector(".btn-3")
const insert_task = document.querySelector(".insert")
const total = document.querySelector(".amount")
const rest = document.querySelector(".submit-btn")
const rm = document.querySelector(".rm")


let track_Data = {"Wash Car": 10,
                    "Mow Lawn": 20, 
                    "Pull Weeds": 30}

let checkW = true
let checkM = true
let checkP = true

let count = 0

function task(name, price){
    let htmlPars = `
        <ul class="task-head">
            <li class="same">${name}</li>
            <li class="rm">remove</li>
            <li class="same"><span class="dollor">$</span>${price}</li>
        </ul>
    `
    return htmlPars
}

wash_car.addEventListener("click", ()=>{
    if(checkW){
        insert_task.innerHTML +=  task("Wash Car",track_Data["Wash Car"])
        count += track_Data["Wash Car"]
        total.innerHTML = `<h4 class="amount">$${count}</h4>`
        checkW = false
    } 
})
mow_lawn.addEventListener("click", ()=>{
    if(checkM){
        insert_task.innerHTML +=  task("Mow Lawn",track_Data["Mow Lawn"])
        count += track_Data["Mow Lawn"]
        total.innerHTML = `<h4 class="amount">$${count}</h4>`
        checkM = false
    } 
})

pull_weed.addEventListener("click", ()=>{
    if(checkP){
        insert_task.innerHTML +=  task("Pull Weeds",track_Data["Pull Weeds"])
        count += track_Data["Pull Weeds"]
        total.innerHTML = `<h4 class="amount">$${count}</h4>`
        checkP = false
    } 
})


rest.addEventListener("click", ()=>{
    insert_task.innerHTML = ""
    checkM = true
    checkP = true
    checkW = true
    count = 0
    total.innerHTML = `<h4 class="amount">$0</h4>`

})

rm.addEventListener("clieck", ()=>{
    console.log("click")
})