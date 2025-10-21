document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-section");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
