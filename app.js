"use strict";

alert("Webflow Custom Development By Little Big Things!");
console.log("wtf is this");

const text = new SplitType(".split-lines", { types: "lines, words" });

// let typeSplit;

// function runSplit() {
//   let currentElement = document.querySelector(".split-lines");
//   typeSplit = new SplitType(currentElement, { types: "lines, words" });
//   $(".line").append("<div class='line-mask'></div>");
//   runAnimation();
// }

// runSplit();

// window.addEventListener("resize", function () {
//   if (typeSplit) {
//     typeSplit.revert();
//     runSplit();
//   }
// });

// function runAnimation() {
//   $(".line").each(function (index) {
//     let triggerElement = $(this);
//     let targetElement = $(this).find(".line-mask");

//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerElement,
//         // trigger element - viewport
//         start: "top center",
//         end: "bottom top",
//         scrub: 1,
//       },
//     });

//     tl.to(targetElement, {
//       width: "0%",
//       duration: 1,
//     });
//   });
// }

// window.addEventListener("DOMContentLoaded", (event) => {
//   typeSplit = new SplitType("[text-split]", {
//     types: "lines, words, chars",
//     tagName: "span",
//   });

// Dynamic scroll trigger function
function createScrollTrigger(triggerElement, timeline) {
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top bottom",
    onLeaveBack: () => {
      timeline.progress(0);
      timeline.pause();
    },
  });

  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 60%",
    onEnter: () => timeline.play(),
  });
}

$("[words-slide-up]").each(function (index) {
  let tl = gsap.timeline({ paused: true });
  tl.from($(this).find(".word"), {
    yPercent: 100,
    duration: 0.4,
    ease: "power1.out",
    opacity: 0,
    stagger: { amount: 0.4 },
  });

  createScrollTrigger($(this), tl);
});

gsap.set("[text-split]", { opacity: 1 });

// Avoid flash of unstyled content

// Home scroll content switch section
$(".home-scroll-section").each(function (index) {
  let childTriggers = $(this).find(".home-scroll_text-item");
  let childTargets = $(this).find(".home-scroll_img-item");
  // switch active class
  function makeItemActive(index) {
    childTriggers.removeClass("is-active");
    childTargets.removeClass("is-active");
    childTriggers.eq(index).addClass("is-active");
    childTargets.eq(index).addClass("is-active");
  }

  makeItemActive(0);
  // create triggers
  childTriggers.each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      markers: false,
      onToggle: (isActive) => {
        if (isActive) {
          makeItemActive(index);
        }
      },
    });
  });
});
