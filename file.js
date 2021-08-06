//button - Ereigniss click
document.getElementById("button").onclick = function () {
    if(document.getElementById("email-gap").value.includes("@" && ".") === true) {
        alert("Thanks for subscribing ");
    }

}