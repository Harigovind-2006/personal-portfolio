// ===============================
// Smooth Scroll for Navbar Links
// ===============================
// Smooth scroll for navbar
document.querySelectorAll(".Navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});



// ==================================
// Active Navbar Link on Scroll
// ==================================
const sections = document.querySelectorAll("main > div, footer");
const navLinks = document.querySelectorAll(".Navbar a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("class");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (currentSection && link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

// ==================================
// Reveal Animation on Scroll
// ==================================
const revealElements = document.querySelectorAll(
  ".skill, .language, .tool, .design-item, .project"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load

// ==================================
// Contact Click Actions
// ==================================
document.querySelectorAll(".contact-item").forEach(item => {
  item.addEventListener("click", () => {
    const text = item.innerText.toLowerCase();

    if (text.includes("email")) {
      window.location.href = "mailto:harigovindmankulam@gmail.com";
    } 
    else if (text.includes("linkedin")) {
      window.open("https://www.linkedin.com/in/harigovind-m-64b628290/", "_blank");
    } 
    else if (text.includes("github")) {
      window.open("https://github.com/Harigovind-2006", "_blank");
    }
  });
});
