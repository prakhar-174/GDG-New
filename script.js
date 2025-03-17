// const hamburgerInput = document.querySelector(".hamburger input");
// const navLinks = document.querySelector(".nav-links");

// console.log(hamburgerInput);


// hamburgerInput.addEventListener("change", () => {
//   if (hamburgerInput.checked) {    
//     navLinks.classList.add("active");
//   } else {    
//     navLinks.classList.remove("active");
//   }
// });


// document.querySelectorAll(".nav-links a").forEach(link => {
//   link.addEventListener("click", () => {
//     hamburgerInput.checked = false;
//     navLinks.classList.remove("active");
//   });
// });


let originalContent = null;


function handleResponsiveContent() {
  const browserContent = document.querySelector('.browser-content');
  
  
  if (!browserContent) return;
  
  
  if (originalContent === null) {
    originalContent = browserContent.innerHTML;
  }
  
  
  if (window.innerWidth <= 992) {
    
    const contentWidth = browserContent.offsetWidth;
    const contentHeight = browserContent.offsetHeight;
    
    
    const img = document.createElement('img');
    img.src = 'Assets/about3.png'; 
    img.alt = 'Responsive content';
    img.className = 'responsive-image';
    
    
    img.style.width = '300px';
    img.style.height = contentHeight + 'px';
    img.style.objectFit = 'cover'; 
    
    
    browserContent.innerHTML = '';
    browserContent.appendChild(img);
  } else {
    browserContent.innerHTML = originalContent;
  }
}


document.addEventListener('DOMContentLoaded', handleResponsiveContent);


window.addEventListener('resize', handleResponsiveContent);