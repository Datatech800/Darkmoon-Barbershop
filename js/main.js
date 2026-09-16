const navbar = document.getElementById("navbar");
const btn = document.getElementById("menu-btn");
const fullMenu = document.getElementById("full-menu");

const openMenu = () => {
  fullMenu.classList.add("open");
  btn.classList.add("bar-open");
  btn.setAttribute("aria-label", "Cerrar menú");
};
const closeMenu = () => {
  fullMenu.classList.remove("open");
  btn.classList.remove("bar-open");
  btn.setAttribute("aria-label", "Abrir menú");
};

btn.addEventListener("click", () => {
  fullMenu.classList.contains("open") ? closeMenu() : openMenu();
});
document.querySelectorAll(".menu-link").forEach((el) => el.addEventListener("click", closeMenu));

const setScrolled = () => {
  if (window.innerWidth >= 768) return;
  const scrollY = window.scrollY || window.pageYOffset;
  const p = Math.min(scrollY / 250, 1);
  navbar.classList.toggle("scrolled", p >= 1);
};
window.addEventListener("scroll", setScrolled);
setScrolled();

const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => revealObserver.observe(el));

/* ── Gift Card ── */
const giftForm = document.getElementById("gift-form");
if (giftForm) {
  document.querySelectorAll(".gift-trigger").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      giftForm.classList.remove("hidden");
      giftForm.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}
