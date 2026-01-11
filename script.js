/* ===========================================
   DARK MODE TOGGLE
=========================================== */
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

/* ===========================================
   SCROLL TO FEATURES (третья кнопка HERO)
=========================================== */
const btnScroll = document.getElementById("scrollToFeatures");
const featuresSection = document.querySelector(".features");

if (btnScroll && featuresSection) {
  btnScroll.addEventListener("click", () => {
    featuresSection.scrollIntoView({ behavior: "smooth" });
  });
}

/* ===========================================
   REVEAL ON SCROLL (анимация появления)
=========================================== */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===========================================
   CARD CLICK EFFECT (все карточки кликабельны)
=========================================== */
document.querySelectorAll(".feature-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* ===========================================
   SMOOTH PAGE TRANSITION (между страницами)
=========================================== */
document.querySelectorAll("a").forEach(link => {
  if (link.href.includes(".html")) {
    link.addEventListener("click", (e) => {
      const url = link.href;

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 250);
    });
  }
});

window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});
/* ================================
   DARK MODE (GLOBAL FOR ALL PAGES)
================================ */

const darkBtn = document.getElementById("langBtn");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}
