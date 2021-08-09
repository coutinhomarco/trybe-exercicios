document.querySelector("body").style.backgroundColor = '#d3d3d3';
document.querySelector("#header-container").style.backgroundColor = "#90ee90";
document.querySelector("#header-container").style.marginBottom = "40px";
document.querySelector("#footer-container").style.backgroundColor = "#006400";
document.querySelector("#footer-container").style.marginTop = "305px";

document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow"



for (let index = 0; index<3;index++) {
    document.querySelectorAll(".emergency-tasks div")[index].style.backgroundColor = "#cc8899";
    document.querySelectorAll(".emergency-tasks div")[index].style.paddingTop = "1px";
    document.querySelectorAll(".no-emergency-tasks h3")[1].style.marginTop = "0px";
    document.querySelectorAll(".emergency-tasks h3")[1].style.marginTop = "0px";
    document.querySelectorAll(".emergency-tasks h3")[index].style.backgroundColor = "purple";
    document.querySelectorAll(".no-emergency-tasks h3")[index].style.backgroundColor = "black"
    document.querySelectorAll(".no-emergency-tasks div")[index].style.paddingTop = "1px"
    
}

