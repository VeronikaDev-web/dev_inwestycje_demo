/* ===================================================
   PREMIUM ULTRA LUX SCRIPT
   Developer Demo — 2026
   =================================================== */

/* ---------- DARK MODE ---------- */

const langBtn = document.getElementById("langBtn");

if (langBtn) {
  langBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // смена иконки
    if (document.body.classList.contains("dark")) {
      langBtn.textContent = "☀️";
    } else {
      langBtn.textContent = "🌙";
    }
  });
}


/* ---------- LANGUAGE SWITCH (PL / EN) ---------- */

const langElements = document.querySelectorAll("[data-pl][data-en]");

function setLanguage(lang) {
  langElements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

let currentLanguage = "pl";

/* нажимаем на кнопку — меняем язык */
if (langBtn) {
  langBtn.addEventListener("dblclick", () => {
    currentLanguage = currentLanguage === "pl" ? "en" : "pl";
    setLanguage(currentLanguage);
  });
}


/* ---------- REVEAL ANIMATION ---------- */

const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);


/* ---------- SMOOTH SCROLL TO FEATURES (3 BOXES) ---------- */

const scrollBtn = document.getElementById("scrollToFeatures");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    const target = document.querySelector(".features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}
