gsap.to(".circle", {
  height: "42em",
  duration: 3,
  opacity: 0.8,
});

gsap.to(".image", {
  opacity: 0.9,
  duration: 5,
});

gsap.to("#right-box1", {
  opacity: 0.9,
  y: 90,
  duration: 3,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".cv", {
  scrollTrigger: {
    trigger: ".cv",
    start: "top top",
    end: " bottom 100px",
    toggleActions: "restart pause resume pause",
    scrub: 2,
  },
  x: 400,
  opacity: 0.9,
  duration: 4,
});

gsap.to("a", {
  opacity: 0.9,
  y: 5,
  duration: 2,
});

gsap.to(".aboutme", {
  scrollTrigger: {
    trigger: ".aboutme",
    start: "top top",
    end: " bottom 100px",
    toggleActions: "restart pause resume pause",
    scrub: 2,
  },
  y: 10,
  opacity: 0.9,
  duration: 7,
});

gsap.to(".box3 p", {
  scrollTrigger: {
    trigger: ".box3 p",
    start: "top top",
    end: " bottom 100px",
    toggleActions: "restart pause resume pause",
    scrub: 2,
  },
  y: 15,
  opacity: 0.9,
  duration: 8,
});

gsap.to("#box4 h2", {
  scrollTrigger: {
    trigger: "#box4 h2",
    start: "top center",
    end: " bottom 100px",
    toggleActions: "restart pause resume pause",
    scrub: 2,
  },
  opacity: 0.9,
  y: 25,
  duration: 2,
});
