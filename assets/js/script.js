
    // Init ScrollMagic
var controller = new ScrollMagic.Controller();

// GSAP Timline vars
var horzTl = new TimelineMax();
var processTl = new TimelineMax();
var talkTl = new TimelineMax();
var talkEl = document.getElementById("talk");
var distance = talkEl.getBoundingClientRect().top;

// Detect if the screen is mobile
var isMobile = window.innerWidth <= 600;

// ScrollMagic scenes
// horizontal scrolling scene
var horzScene = new ScrollMagic.Scene({
  triggerElement: "#process",
  triggerHook: 0,
  duration: isMobile ? "200%" : "400%", // Adjusted duration based on screen size
})
  .setTween(horzTl)
  .setPin("#process")
  .addTo(controller);

// process scene
var processScene = new ScrollMagic.Scene({
  triggerElement: "#process",
  triggerHook: 0,
  duration: isMobile ? "200%" : "300%", // Adjusted duration based on screen size
})
  .setTween(processTl)
  .addTo(controller);

var talkScene = new ScrollMagic.Scene({
  triggerElement: "#talk",
  triggerHook: 0,
  reverse: false,
})
  .setTween(talkTl)
  .addTo(controller);

// Set timeline objects
horzTl
  //side scrolling
  .to(".horizontal-container", isMobile ? 1 : 2, { // Adjusted duration based on screen size
    x: "-90.6666%",
    ease: Linear.easeNone,
  });

processTl
  // steps
  .from(".step-01", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }) // Adjusted duration based on screen size
  .add("line")
  .to(".time", 3, { strokeDashoffset: 0, ease: Linear.easeNone }, "line")
  .from(".step-02", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }, "line+=.15") // Adjusted duration based on screen size
  .from(".step-03", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }, "line+=.6") // Adjusted duration based on screen size
  .from(".step-04", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }, "line+=1.07") // Adjusted duration based on screen size
  .from(".step-05", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }, "line+=1.5") // Adjusted duration based on screen size
  .from(".step-06", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }, "line+=1.75") // Adjusted duration based on screen size
  .from(".step-07", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }, "line+=2.33") // Adjusted duration based on screen size
  .from(".step-08", isMobile ? 0.01 : 0.02, { autoAlpha: 0 }, "line+=2.75"); // Adjusted duration based on screen size

talkTl.set("#process-wrap", {
  className: "+=seen",
  onComplete: function () {
    // destroy timelines
    // horzScene.destroy();
    // processScene.destroy();
    // remove added styles
    TweenMax.set(".scrollmagic-pin-spacer", { clearProps: "all" });
    //keep window in place
    scroll(500, distance);
  },
});


//  <!-- for navbar fixed -->
 
      const navbar = document.querySelector('.navbar');
      const originalOffsetTop = navbar.offsetTop;
    
      window.addEventListener('scroll', () => {
        if (window.scrollY > originalOffsetTop) {
          navbar.classList.add('fixed-top');
          navbar.classList.add('shadowNav')
        } else {
          navbar.classList.remove('fixed-top');
          navbar.classList.remove('shadowNav')
        }
      });

    //   <!-- for removing the zoon-in-left and right on mobile devices -->

  document.addEventListener('DOMContentLoaded', (event) => {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.specification[data-aos="zoom-in-left"]').forEach(el => {
       
        el.setAttribute('data-aos', 'fade-up');
      });
      document.querySelectorAll('.specification[data-aos="zoom-in-right"]').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
      });
    }
  });
