// tabs.js

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".tab-link");
    const sections = document.querySelectorAll("main section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("data-target");
            
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add("active-section");
                    section.classList.remove("tab-content");
                } else {
                    section.classList.add("tab-content");
                    section.classList.remove("active-section");
                }
            });
        });
    });
});
