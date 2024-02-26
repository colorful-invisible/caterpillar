gsap.registerPlugin(ScrollTrigger);

const panels = document.querySelectorAll(".panel");

// Create a new timeline with ScrollTrigger
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  },
});

// Dynamically add animation steps for each panel
panels.forEach((panel, i) => {
  // For the first panel, scale it down immediately
  if (i === 0) {
    tl.to(panel, { transform: "scaleY(0)", ease: "none" });
  } else if (i === panels.length - 1) {
    tl.to(panel, { transform: "scaleY(1)", ease: "none" }, "<");
  } else {
    tl.to(panel, { transform: "scaleY(1)", ease: "none" }, "<").to(panel, {
      transformOrigin: "top",
      transform: "scaleY(0)",
      ease: "none",
    });
  }
});
