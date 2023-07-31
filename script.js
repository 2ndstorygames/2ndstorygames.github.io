document.addEventListener("mousemove", m => 
{
    document.body.style.setProperty("--mouse", m.y / window.innerHeight)
})

let rightBtn = document.getElementById("right")
let rightPanel = document.getElementById("rightPanel")

let leftBtn = document.getElementById("left")
let leftPanel = document.getElementById("leftPanel")

let open = 0;

right.addEventListener("click", () => 
{
    rightPanel.classList.toggle("active")
    rightPanel.classList.remove("highground")

    leftPanel.classList.add("highground")
})

left.addEventListener("click", () => 
{
    leftPanel.classList.toggle("active")
    leftPanel.classList.remove("highground")

    rightPanel.classList.add("highground")
})