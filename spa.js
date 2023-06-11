
function addNew(element) {
    document.getElementById("add-new").style.display = "flex";
    document.getElementById("library").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.querySelectorAll(".menu-item").forEach((n)=>{n.style.color="black"})
    element.style.color = "#5c7c99";
}

function list(element) {
    document.getElementById("library").style.display = "flex";
    document.getElementById("add-new").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.querySelectorAll(".menu-item").forEach((n)=>{n.style.color="black"})
    element.style.color = "#5c7c99";
}

function contact(element) {
    document.getElementById("contact").style.display = "flex";
    document.getElementById("library").style.display = "none";
    document.getElementById("add-new").style.display = "none";
    document.querySelectorAll(".menu-item").forEach((n)=>{n.style.color="black"})
    element.style.color = "#5c7c99";
}