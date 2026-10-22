// ========================================
// HERO GSAP ANIMATION
// ========================================

// Make sure GSAP is loaded
if (typeof gsap !== "undefined") {

    // Animate Hero Text
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


    // Animate Profile Image
   gsap.from(".hero-image", {
    opacity: 0,
    scale: 0.85,
    y: 25,
    duration: 1.2,
    delay: 0.3,
    clearProps: "transform"
});

}
// ========================================
// ABOUT SECTION ANIMATION
// ========================================

if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
) {

    gsap.registerPlugin(ScrollTrigger);


    // About intro
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


    // About content
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


    // About details
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
// ========================================
// SKILLS SECTION ANIMATION
// ========================================

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
// ========================================
// PROJECTS SECTION ANIMATION
// ========================================

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

    // Left introduction
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


/* ================================
   CONTACT ANIMATION
================================ */

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);


    // Header
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


    // Contact information
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


    // Form
    gsap.from(".contact-form-wrapper", {
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


    // Contact details
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
/* ================================
   BACK TO TOP BUTTON
================================ */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
              backToTop.classList.add("active");
}       
        else {
              backToTop.classList.remove("active");
}
    });

}
/* ================================
   FOOTER ANIMATION
================================ */

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

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
/* ================================
   NAVBAR ACTIVE SCROLL SPY
================================ */

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