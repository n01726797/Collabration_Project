// Function to change logo size on hover
function changeLogoSize() {
    const logo = document.getElementById("logo");

    // Mouse over event
    logo.addEventListener("mouseover", () => {
        logo.style.width = "150px"; // Change logo size on hover
    });

    // Mouse out event
    logo.addEventListener("mouseout", () => {
        logo.style.width = "120px"; // Revert logo size
    });
}

// Call the function to activate the hover effect
changeLogoSize(); 

// 2. Highlight nav links on hover
// Function to highlight nav links on hover
function highlightNavLinks() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6f00"; // Highlight color
        });
        
        link.addEventListener("mouseout", () => {
            link.style.color = "#333"; // Original color
        });
    });
}

// Call the function to apply the event listeners
highlightNavLinks();

