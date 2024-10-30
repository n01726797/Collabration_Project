document.addEventListener("DOMContentLoaded", () => {
    // 1. Change logo size on hover
    function changeLogoSize() {
        const logo = document.getElementById("logo");
        logo.addEventListener("mouseover", () => {
            logo.style.width = "150px"; // Change to larger size
        });
        logo.addEventListener("mouseout", () => {
            logo.style.width = "120px"; // Revert to original size
        });
    }

    // 2. Highlight nav links on hover
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

    // 4. Change main image border radius on double-click
    function changeMainImageBorderRadius() {
        const mainImage = document.getElementById("main-dog-image");
        mainImage.addEventListener("dblclick", () => {
            mainImage.style.borderRadius = mainImage.style.borderRadius === "50%" ? "0" : "50%"; // Toggle border radius
        });
    }

    // 5. Toggle category images visibility on button click
    function toggleCategoryImagesVisibility() {
        const categoryImages = document.querySelectorAll(".category-images img");
        const toggleCategoriesButton = document.createElement("button");
        toggleCategoriesButton.textContent = "Show/Hide Categories";
        document.body.insertBefore(toggleCategoriesButton, document.getElementById("categories"));
        
        toggleCategoriesButton.addEventListener("click", () => {
            categoryImages.forEach((img) => {
                img.style.display = img.style.display === "none" ? "block" : "none"; // Toggle visibility
            });
        });
    }

    // 6. Hover effect on service boxes to change background color
    function hoverEffectOnServiceBoxes() {
        const serviceBoxes = document.querySelectorAll(".service-box");
        serviceBoxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "#ffe0b2";// Change background color
            });
            box.addEventListener("mouseout", () => {
                box.style.backgroundColor = "#fff8e1"; // Revert to original color
            });
        });
    }

    // 7. Update review navigation buttons' color on click
    function updateReviewButtonColor() {
        const reviewButtons = document.querySelectorAll(".review-navigation button");
        reviewButtons.forEach((button) => {
            button.addEventListener("click", () => {
                button.style.backgroundColor = "green"; // Change color on click
                setTimeout(() => {
                    button.style.backgroundColor = "#333"; // Revert after 300ms
                }, 300);
            });
        });
    }

    // 8. Change text in subscription section on focus
    function changeSubscriptionText() {
        const subscribeTitle = document.querySelector("#subscribe h3");
        const emailInput = document.querySelector("#subscribe input");
        emailInput.addEventListener("focus", () => {
            subscribeTitle.textContent = "Enter your email to receive updates!";
        });
        emailInput.addEventListener("blur", () => {
            subscribeTitle.textContent = "Subscribe & Get Updates";
        });
    }

    // 9. Toggle footer link colors on mouseover
    function toggleFooterLinkColors() {
        const footerLinks = document.querySelectorAll("footer nav a");
        footerLinks.forEach((link) => {
            link.addEventListener("mouseover", () => {
                link.style.color = "yellow"; // Change color on mouseover
            });
            link.addEventListener("mouseout", () => {
                link.style.color = "#ffa726"; // Revert to original color
            });
        });
    }

    // Call all functions to apply the event listeners
    changeLogoSize();
    highlightNavLinks();
    changeMainImageBorderRadius();
    toggleCategoryImagesVisibility();
    hoverEffectOnServiceBoxes();
    updateReviewButtonColor();
    changeSubscriptionText(); // Call the subscription text change function
    toggleFooterLinkColors(); // Call the footer link color toggle function
});
