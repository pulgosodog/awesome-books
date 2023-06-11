function addNew() {
    document.getElementById("add-new").style.display = "flex";
    document.getElementById("library").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function list() {
    document.getElementById("library").style.display = "flex";
    document.getElementById("add-new").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function contact() {
    document.getElementById("contact").style.display = "flex";
    document.getElementById("library").style.display = "none";
    document.getElementById("add-new").style.display = "none";
}