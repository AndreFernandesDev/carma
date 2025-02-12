const navLinks = document.querySelectorAll("a");
for (let navLink of navLinks) {
  if (navLink.pathname === window.location.pathname) {
    navLink.setAttribute("data-active", "");
  }
}

const navbarBtns = document.querySelectorAll("[data-navbar='toggle-button']");
const navbarWrapper = document.querySelector("[data-navbar='wrapper']");
const navbarContent = navbarWrapper?.querySelector("[data-navbar='expander']");

document.body.addEventListener("click", (e) => {
  for (let btn of navbarBtns) {
    if (btn.contains(e.target)) {
      navbarContent.toggleAttribute("data-open");
      return;
    }
  }

  if (navbarContent.hasAttribute("data-open")) {
    if (!navbarContent.contains(e.target)) {
      navbarContent.removeAttribute("data-open");
    }
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbarWrapper.setAttribute("data-overlay", "");
  } else {
    navbarWrapper.removeAttribute("data-overlay");
  }
});
