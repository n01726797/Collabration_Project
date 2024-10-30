// 1. Change logo size on hover
function changeLogoSize () { 


    const logo = document.getElementById("logo");
    logo.addEventListener("mouseover", () => {
        logo.style.width = "150px";
    });
    logo.addEventListener("mouseout", () => {
        logo.style.width = "120px";
    }); 
    } 