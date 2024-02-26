gsap.registerPlugin(ScrollTrigger);

const panels = document.querySelectorAll(".panel");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  },
});

panels.forEach((panel, i) => {
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
