// Optional JavaScript for potential interactivity
document.querySelector('.customization-button').addEventListener('click', function() {
    alert('Customize header navigation clicked');
});

// Set initial state for about-card
gsap.set(".about-card", { y: 0 });

// Floating in air effect for about-card
gsap.to(".about-card", {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "power1.inOut",
});