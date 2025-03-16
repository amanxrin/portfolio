document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.05)";
        });
        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
        });
    });

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff758c";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#00c6ff";
        });
    });
});
