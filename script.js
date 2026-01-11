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
