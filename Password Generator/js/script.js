const btn_click = document.querySelector(".click")
const h1 = document.querySelector('.h1')
const h2 = document.querySelector('.h2')
const h3 = document.querySelector('.h3')
const h4 = document.querySelector('.h4')
const col = document.querySelectorAll(".h")

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lower_alph = alphabet.map(x => x.toLowerCase())
const symbols = ["!","@","#","$","%","^","&","*","~","`"]
const password = [1,2,3,4,5,6,7,8,9, ...alphabet, ...lower_alph, ...symbols]



function password_generator(){
    const pass1 = []

    for(let i = 0; i < 14; i++){
        idx = Math.floor(Math.random()*password.length)
        pass1.push(password[idx])
    }

    return pass1
}

function change_inner_text_style(){
    pass1 = password_generator().join("")
    pass2 = password_generator().join("")
    pass3 = password_generator().join("")
    pass4 = password_generator().join("")
    h1.innerHTML = pass1
    h1.classList.add("text-color")
    h2.innerHTML = pass2
    h2.classList.add("text-color")
    h3.innerHTML = pass3
    h3.classList.add("text-color")
    h4.innerHTML = pass4
    h4.classList.add("text-color")
}

btn_click.addEventListener("click", () => {
    change_inner_text_style()
})

