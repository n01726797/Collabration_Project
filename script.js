document.addEventListener("DOMContentLoaded", () => {
    // Function to change logo size on hover
    function changeLogoSize() {
        const logo = document.getElementById("logo");
        if (logo) { // Check if logo element exists
            logo.addEventListener("mouseover", () => {
                logo.style.width = "150px"; // Change to larger size
            });
            logo.addEventListener("mouseout", () => {
                logo.style.width = "120px"; // Revert to original size
            });
        }
    }

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

    // Function to change banner text color on click
    function changeBannerTextColor() {
        const bannerTitle = document.querySelector("#banner h1");
        if (bannerTitle) { // Check if bannerTitle element exists
            bannerTitle.addEventListener("click", () => {
                // Toggle the color between blue and default color
                bannerTitle.style.color = bannerTitle.style.color === "blue" ? "#333" : "blue";
            });
        }
    }

    // Call the functions to apply the event listeners
    changeLogoSize();
    highlightNavLinks();
    changeBannerTextColor();
});


