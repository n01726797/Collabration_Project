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

    // Function to change main image border radius on double-click
    function changeMainImageBorderRadius() {
        const mainImage = document.getElementById("main-dog-image");
        if (mainImage) { // Check if main image element exists
            mainImage.addEventListener("dblclick", () => {
                mainImage.style.borderRadius = mainImage.style.borderRadius === "50%" ? "0" : "50%";
            });
        }
    }

    // Function to toggle category images visibility on button click
    function toggleCategoryImages() {
        const categoryImages = document.querySelectorAll(".category-images img");
        const toggleCategoriesButton = document.createElement("button");
        toggleCategoriesButton.textContent = "Show/Hide Categories";
        document.body.insertBefore(toggleCategoriesButton, document.getElementById("categories"));

        toggleCategoriesButton.addEventListener("click", () => {
            categoryImages.forEach((img) => {
                img.style.display = img.style.display === "none" ? "block" : "none";
            });
        });
    }

    // Function for hover effect on service boxes
    function hoverEffectOnServiceBoxes() {
        const serviceBoxes = document.querySelectorAll(".service-box");
        serviceBoxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "#ffe0b2"; // Change background color on hover
            });
            box.addEventListener("mouseout", () => {
                box.style.backgroundColor = "#fff8e1"; // Revert background color
            });
        });
    }

    // Call the functions to apply the event listeners
    changeLogoSize();
    highlightNavLinks();
    changeBannerTextColor();
    changeMainImageBorderRadius();
    toggleCategoryImages();
    hoverEffectOnServiceBoxes();
});
