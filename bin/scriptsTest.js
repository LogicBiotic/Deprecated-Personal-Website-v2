document.addEventListener("DOMContentLoaded", function () {
    // Select all dropdown buttons
    const dropdownButtons = document.querySelectorAll(".navbar-dropdown");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents event from bubbling up and closing immediately

            // Find the corresponding <ul> and <a> inside the <li>
            const dropdownMenu = this.nextElementSibling;
            const parentLink = this.previousElementSibling;

            // Toggle the "show" class for the dropdown
            dropdownMenu.classList.toggle("show");

            // Highlight the parent link
            parentLink.classList.toggle("active");

            // Close other dropdowns if they are open
            document.querySelectorAll(".navbar-dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("show");
                }
            });

            document.querySelectorAll(".navbar-contents li a").forEach(link => {
                if (link !== parentLink) {
                    link.classList.remove("active");
                }
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".navbar-dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });
        document.querySelectorAll(".navbar-contents li a").forEach(link => {
            link.classList.remove("active");
        });
    });
});
