// ==============================
// Mobile Sidebar
// ==============================

const hamburger = document.querySelector(".hamburgar");
const sidebar = document.querySelector(".left-sidebar");
const overlay = document.querySelector(".mobile-overlay");

function toggleMobileMenu() {
    sidebar.classList.toggle("mobile-open");
    overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMobileMenu);
overlay.addEventListener("click", toggleMobileMenu);



