
if (typeof gsap !== "undefined") {

    gsap.from(".hero-eyebrow", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from(".hero-role", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
    });

    gsap.from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out"
    });

    gsap.from(".hero-buttons", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out"
    });

    gsap.from(".hero-socials", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1,
        ease: "power3.out"
    });

    gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.85,
        y: 25,
        duration: 1.2,
        delay: 0.3,
        clearProps: "transform"
    });

}

if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-intro", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from(".about-detail", {
        scrollTrigger: {
            trigger: ".about-details",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
    });

}

if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.from(".skills-header", {
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out"
    });

    gsap.from(".skill-card", {
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 80,
        scale: 0.96,
        duration: 1.1,
        stagger: 0.22,
        ease: "power3.out"
    });

}

if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.from(".projects-header", {
        scrollTrigger: {
            trigger: ".projects-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out"
    });

    gsap.utils.toArray(".project-item").forEach((project) => {

        const image = project.querySelector(".project-image");
        const content = project.querySelector(".project-content");

        gsap.from(image, {
            scrollTrigger: {
                trigger: project,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: project.classList.contains("project-reverse")
                ? 60
                : -60,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(content, {
            scrollTrigger: {
                trigger: project,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: project.classList.contains("project-reverse")
                ? -60
                : 60,
            duration: 1,
            delay: 0.15,
            ease: "power3.out"
        });

    });

}

// Projects modal
const showProjectsButton = document.getElementById("showAllProjects");
const projectsModal = document.getElementById("projectsModal");
const closeProjectsButton = document.getElementById("closeProjectsModal");

let previousFocusedElement = null;

function openProjectsModal() {
    if (!projectsModal) return;

    previousFocusedElement = document.activeElement;
    projectsModal.classList.add("is-open");
    projectsModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("projects-modal-open");
    closeProjectsButton?.focus();
}

function closeProjectsModal() {
    if (!projectsModal) return;

    projectsModal.classList.remove("is-open");
    projectsModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("projects-modal-open");

    if (previousFocusedElement instanceof HTMLElement) {
        previousFocusedElement.focus();
    }
}

showProjectsButton?.addEventListener("click", openProjectsModal);
closeProjectsButton?.addEventListener("click", closeProjectsModal);

projectsModal?.querySelectorAll("[data-close-projects]").forEach(element => {
    element.addEventListener("click", closeProjectsModal);
});

document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        projectsModal?.classList.contains("is-open")
    ) {
        closeProjectsModal();
    }
});

// Education cards animation
gsap.utils.toArray(".education-card").forEach((card, index) => {

    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        delay: index * 0.1,
        ease: "power3.out"
    });

});

gsap.from(".resume-intro", {
    scrollTrigger: {
        trigger: ".resume-layout",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out"
});

// Resume blocks
gsap.utils.toArray(".resume-block").forEach((block, index) => {

    gsap.from(block, {
        scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 60,
        duration: 0.9,
        delay: index * 0.1,
        ease: "power3.out"
    });

});

// Contact animations
if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".contact-header", {
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out"
    });

    gsap.from(".contact-info", {
        scrollTrigger: {
            trigger: ".contact-layout",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: ".contact-layout",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 60,
        duration: 1,
        delay: 0.15,
        ease: "power3.out"
    });

    gsap.from(".contact-detail", {
        scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
    });

}

// Back to top button
const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }

    });

}

// Footer animation
if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".footer-top", {
        scrollTrigger: {
            trigger: ".site-footer",
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out"
    });

}

// Navbar active scroll spy
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

if (sections.length && navLinks.length) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId = entry.target.getAttribute("id");

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                        if (link.getAttribute("href") === `#${currentId}`) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            threshold: 0.25
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

}

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.getElementById("navbarToggler");
    const navbarMenu = document.getElementById("portfolioNavbar");

    if (!navbarToggler || !navbarMenu) return;

    const toggleIcon = navbarToggler.querySelector("i");

    function updateNavbarToggle() {
        const isOpen = navbarMenu.classList.contains("show");

        toggleIcon.className = isOpen
            ? "bi bi-x-lg"
            : "bi bi-list";

        navbarToggler.setAttribute("aria-expanded", String(isOpen));
        navbarToggler.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    }

    navbarMenu.addEventListener("shown.bs.collapse", updateNavbarToggle);
    navbarMenu.addEventListener("hidden.bs.collapse", updateNavbarToggle);

    // Close menu after clicking a navigation link on mobile
    navbarMenu.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992 &&
                navbarMenu.classList.contains("show")) {
                bootstrap.Collapse
                    .getOrCreateInstance(navbarMenu)
                    .hide();
            }
        });
    });

    updateNavbarToggle();
});


// Day / night theme toggle
(() => {

    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    const themeIcon = themeToggle.querySelector("i");
    const themeLabel = themeToggle.querySelector(".theme-toggle-label");
    const root = document.documentElement;

    function updateThemeButton(isDark) {

        themeToggle.setAttribute("aria-pressed", String(isDark));

        const actionLabel = isDark
            ? "Switch to light mode"
            : "Switch to dark mode";

        themeToggle.setAttribute("aria-label", actionLabel);
        themeToggle.setAttribute("title", actionLabel);

        if (themeIcon) {
            themeIcon.className = isDark
                ? "bi bi-sun-fill"
                : "bi bi-moon-stars-fill";
        }

        if (themeLabel) {
            themeLabel.textContent = isDark
                ? "Light mode"
                : "Dark mode";
        }

    }

    function applyTheme(isDark) {

        if (isDark) {
            root.dataset.theme = "dark";
        } else {
            root.removeAttribute("data-theme");
        }

        updateThemeButton(isDark);

        try {
            localStorage.setItem(
                "portfolio-theme",
                isDark ? "dark" : "light"
            );
        } catch (error) {
            // Theme switching continues if storage is unavailable.
        }

    }

    updateThemeButton(root.dataset.theme === "dark");

    themeToggle.addEventListener("click", () => {

        const isDark = root.dataset.theme !== "dark";
        applyTheme(isDark);

    });

})();

// Initialize EmailJS
(function () {

    emailjs.init({
        publicKey: "dPP-vJCgsxqbGB8rv"
    });

})();
