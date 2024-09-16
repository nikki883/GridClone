let lightMode = document.querySelector(".lightMode")
let darkMode = document.querySelector(".darkMode")
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = 'Black'
    document.body.style.color = 'white'

    console.log("button clicked")
})
lightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    console.log("button clicked")

    //    lightMode.style.color = black
})