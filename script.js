document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-navbar");
    const navbar = document.getElementById("navbar");
    const whiteBackground = document.querySelector(".white-background");
   const rightBackground = document.querySelector(".right-background");

    toggleButton.addEventListener("click", function () {
        if (navbar.style.top === "0px") {
            // Close the navbar
            navbar.style.top = "-100%";
            whiteBackground.style.left = "-50%"; 
            rightBackground.style.right = "-50%"; 
        } else {
            // Open the navbar
            navbar.style.top = "0px";
            whiteBackground.style.left = "0"; 
            rightBackground.style.right = "0"; 
        }
    });
});
