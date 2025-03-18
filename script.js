document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animate skill bars when visible
    const skillBars = document.querySelectorAll(".skill-fill");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute("style").split("width:")[1];
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));

    // Form submission alert
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        form.reset();
    });
});
