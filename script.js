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
        const toggleCategoriesButton = document.getElementById("toggleCategoriesButton");
    
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
                box.style.backgroundColor = "#ffe0b2"; // Change background color
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

    // 10. Add border on banner button click
    function addBorderOnBannerButtonClick() {
        const learnMoreButton = document.querySelector(".learn-more-btn");
        learnMoreButton.addEventListener("click", () => {
            learnMoreButton.style.border = "2px solid #333";
        });
    }

    // 11. Change explore button color in services section
    const exploreButtons = document.querySelectorAll(".explore-btn");
    exploreButtons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#ff5722";
            button.style.color = "white";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "transparent";
            button.style.color = "#333";
        });
        // 15. Show alert message on explore button click in the services section
        button.addEventListener("click", () => {
            alert("Explore our pet services!");
        });
    });

    // 12. Toggle visibility of customer review image on click
    const reviewImage = document.querySelector(".review img");
    if (reviewImage) {
        reviewImage.addEventListener("click", () => {
            reviewImage.style.display = reviewImage.style.display === "none" ? "block" : "none";
        });
    } 

    // 13. Make the sign-up button bold on hover
    const signUpButton = document.querySelector(".sign-up-btn");
    if (signUpButton) {
        signUpButton.addEventListener("mouseover", () => {
            signUpButton.style.fontWeight = "bold";
        });
        signUpButton.addEventListener("mouseout", () => {
            signUpButton.style.fontWeight = "normal";
        });
    }

    // 14. Change footer background color on double-click
    const footer = document.querySelector("footer");
    if (footer) {
        footer.addEventListener("dblclick", () => {
            footer.style.backgroundColor = footer.style.backgroundColor === "#333" ? "#444" : "#333";
        }); 
    }

    // 15. Change background color of the subscribe section on click
    const subscribeSection = document.querySelector("#subscribe"); // Updated to subscribe section
    if (subscribeSection) {
        subscribeSection.addEventListener("click", () => {
            subscribeSection.style.backgroundColor = subscribeSection.style.backgroundColor === "#e0e0e0" ? "#f0f0f0" : "#e0e0e0";
        });
    }

    // Call all functions to apply the event listeners
    changeLogoSize();
    highlightNavLinks();
    changeMainImageBorderRadius();
    toggleCategoryImagesVisibility();
    hoverEffectOnServiceBoxes();
    updateReviewButtonColor();
    changeSubscriptionText();
    toggleFooterLinkColors();
    addBorderOnBannerButtonClick(); // Call the border function
});
