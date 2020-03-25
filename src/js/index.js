/* Here goes your JS code */
function isEmpty() {
    let x = document.forms["theForm"]["pswd"].value;
    let y = document.forms["theForm"]["mail"].value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let check = document.getElementById("checkbox");
    if ((x == "") || (!(y.match(mailformat))) || (check.checked == false)) {
        alert("Invalid info or unchecked checkbox!")
        return false;
    }
    else {
        document.getElementsByClassName("popup")[0].style.display = "none";
        document.getElementById("hide-popup-form").style.display = "block";
        document.getElementById("show-popup-form").style.display = "none";
        event.preventDefault()
    }
}

function openThis() {
    document.getElementsByClassName("popup")[0].style.display = "flex";
    document.getElementById("show-popup-form").style.display = "none";
}

function closeThis() {
    document.getElementsByClassName("popup")[0].style.display = "none";
    document.getElementById("show-popup-form").style.display = "block";
}