
/* ==========================================
   LAKHAN MEHANDI ARTIST
   WEBSITE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       SMOOTH SCROLL
    =============================== */

    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ===============================
       GALLERY SCROLL ANIMATION
    =============================== */

    const galleryCards = document.querySelectorAll(".gallery-card");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("gallery-visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    galleryCards.forEach(function (card) {
        observer.observe(card);
    });


    /* ===============================
       BUTTON CLICK EFFECT
    =============================== */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.95)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);

        });

    });


    /* ===============================
       CURRENT YEAR
    =============================== */

    const footer = document.querySelector("footer");

    if (footer) {

        const year = new Date().getFullYear();

        footer.innerHTML =
            "<p>© " + year +
            " Lakhan Mehandi Artist</p>" +
            "<p>Beautiful Mehndi • Beautiful Memories ❤️</p>";

    }

});
