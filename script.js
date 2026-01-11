// PAGE LOAD TRANSITION
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 50);
});

// LANGUAGE SWITCH
const langBtn = document.getElementById("langBtn");

if (langBtn) {
  langBtn.addEventListener("click", () => {
    const newLang = langBtn.textContent === "EN" ? "PL" : "EN";
    langBtn.textContent = newLang === "EN" ? "EN" : "PL";

    document.querySelectorAll("[data-pl]").forEach(el => {
      el.textContent = newLang === "EN" ? el.dataset.en : el.dataset.pl;
    });
  });
}
/* =========================================
   ULTRA LUX – SCRIPT.JS
   ========================================= */

/* ---------- DARK MODE ---------- */

const langBtn = document.getElementById("langBtn");

if (langBtn) {
    // Apply saved theme if exists
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        langBtn.textContent = "☀️";
    }

    langBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            langBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            langBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
}

/* ---------- REVEAL ON SCROLL ---------- */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((section) => {
        const position = section.getBoundingClientRect().top;
        if (position < windowHeight - 80) {
            section.classList.add("active-reveal");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ---------- SMOOTH SCROLL TO FEATURES (3rd HERO button) ---------- */

const scrollBtn = document.getElementById("scrollToFeatures");

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        const featuresSection = document.querySelector(".features");
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        }
    });
                               }
