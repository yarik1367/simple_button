const press = document.querySelector(".btn")
const bg = document.querySelector(".bg")
const txt = document.querySelector(".txt")


const colors = "red"
press.onclick = function () {
    const question = prompt("enter your password")
    let doc = ["impotant document", "passwords", "ipAdress"]
    
    if (question == 123123) {
        const enter = prompt("enter color")
        bg.style.background =  `${enter}`
    } else if (question == 123) {
        bg.style.background = "red"
        txt.innerHTML = "don't touch my files"
        press.style.display = "none"
    } else {
        alert("incorect password")
    }
    
}

