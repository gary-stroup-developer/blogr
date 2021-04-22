function myFunction() {
    var x = document.getElementById("menu-links");
    if(x.className === "menu-links") {
        x.className += " responsive";
    }
    else {
        x.className = "menu-links"
    }
}