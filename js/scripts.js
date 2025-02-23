document.addEventListener("DOMContentLoaded", function() {
    const projectArrow = document.getElementById("projectsArrow");
    const downloadArrow = document.getElementById("downloadsArrow");

    // Toggle dropdown visibility for Projects and Downloads dropdowns
    projectArrow.addEventListener("click", function(event) {
        event.stopPropagation();
        const projectsDropdown = this.nextElementSibling;
        projectsDropdown.classList.toggle("show");

        // Toggle arrow direction
        this.textContent = this.textContent === '▲' ? '▼' : '▲';

        // Add or remove highlight class
        this.classList.toggle("active");
    });

    downloadArrow.addEventListener("click", function(event) {
        event.stopPropagation();
        const downloadsDropdown = this.nextElementSibling;
        downloadsDropdown.classList.toggle("show");

        // Toggle arrow direction
        this.textContent = this.textContent === '▲' ? '▼' : '▲';

        // Add or remove highlight class
        this.classList.toggle("active");
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function() {
        // Hide dropdown menus
        document.querySelectorAll(".dropdown-menu").forEach(function(dropdown) {
            dropdown.classList.remove("show");
        });

        // Reset arrows to ▼ when dropdowns are closed
        projectArrow.textContent = '▼';
        downloadArrow.textContent = '▼';

        // Remove highlight class
        projectArrow.classList.remove("active");
        downloadArrow.classList.remove("active");
    });
});
