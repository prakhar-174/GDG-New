const hamburgerInput = document.querySelector(".hamburger input");
const navLinks = document.querySelector(".nav-links");

console.log(hamburgerInput);


hamburgerInput.addEventListener("change", () => {
  if (hamburgerInput.checked) {    
    navLinks.classList.add("active");
  } else {    
    navLinks.classList.remove("active");
  }
});

// Close menu when clicking nav links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburgerInput.checked = false;
    navLinks.classList.remove("active");
  });
});