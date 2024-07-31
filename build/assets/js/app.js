
//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/


const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scrollContainer"),
    smooth: true
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)



locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) :    locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/




function heroAnimation() {
  gsap.set(".slides", {
    scale: 3,
  });


  let lt = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_area",
      start: "top top",
      end: "+=600",
      scrub: 2,
        pin: true,
        scroller:".scrollContainer",
    },
  });

  lt.to(
    ".video_div",
    {
      "--clip": "0%",
      ease: Power2,
      duration: 2,
    },
    "a"
  )


    .to(
      ".slides",
      {
        scale: 1,
        ease: Power2,
        duration: 2,
        
      },
      "a"
    )

    .to(
      ".marqleft",
      {
        xPercent: -15,
        ease: Power4,
        duration: 3,
        stagger: 0.03,
      },
      "b"
    )
    .to(
      ".marqright",
      {
        xPercent: 15,
        ease: Power4,
        duration: 3,
        stagger: 0.03,

      },
      "b"
    );
}
heroAnimation();



function bodyColorChangeAnimation(){

    const section = document.querySelectorAll(".section");

    section.forEach(function(e){
      const header = document.querySelector("header");
        ScrollTrigger.create({
            trigger: e,
            start: "top 20%",
            end: "bottom 80%",
            scroller:".scrollContainer",
            onEnter: function(){
                document.body.setAttribute("theme", e.dataset.color);
                header.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme", e.dataset.color);
                header.setAttribute("theme", e.dataset.color);
            }
        })
    });

}
bodyColorChangeAnimation();

function scollSliderAnimation() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if(isMobile){
        gsap.to(".slider_item", {
            scrollTrigger: {
                trigger: ".scrol_slider_area",
                start: "top 50%",
                end: "+=300",
                scrub: 2,
                pin: true,
                scroller:".scrollContainer",
            },
            xPercent: -200,
            ease: Power4,
            duration: 3,
        });
    }else {
        gsap.to(".slider_item", {
            scrollTrigger: {
                trigger: ".scrol_slider_area",
                start: "top -90%",
                end: "+=1200",
                scrub: 2,
                pin: true,
                scroller:".scrollContainer",
            },
            xPercent: -200,
            ease: Power4,
            duration: 3,
        });
    }

}
scollSliderAnimation();
window.addEventListener("resize", scollSliderAnimation);

function aboutAnimation(){
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if(isMobile){
        gsap.to('.abright_box', {
            scrollTrigger: {
                trigger: '.about',
                start: "top 30%",
                end: "bottom bottom",
                scrub: 3,
                scroller:".scrollContainer",

            },
            y: -300,
            ease: Power4,
            duration: 3,
            stagger: 0.03,
        });
    }else {
        gsap.to('.abright_box', {
            scrollTrigger: {
                trigger: '.about',
                start: "top 15%",
                end: "+=600",
                pin: true,
                scrub: 3,
                scroller:".scrollContainer",

            },
            y: -1345,
            ease: Power4,
            duration: 300,
            stagger: 0.03,
        })
    }
}
aboutAnimation();
window.addEventListener("resize", aboutAnimation);



Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .3,
});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .3,
});

Shery.textAnimate(".textAnimate" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: .3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});


gsap.to('.project_item', {
    scrollTrigger: {
        trigger: '.project_area',
        start: "top 5%",
        end: "+=1000",
        scrub: 3,
        pin: true,
        scroller:".scrollContainer",
    },
    y: 0,
    ease: Power4,
    duration: 3,
    stagger: 3,
});

Shery.imageMasker(".mask-target" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Shery",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

const menubar = document.querySelector(".menubar");
const nav = document.querySelector(".menu_area");
const header = document.querySelector("header");

const menubarIcons = document.querySelectorAll('.menubar span');
menubar.addEventListener("click", function () {
  nav.classList.toggle("active");
  header.classList.toggle("active");
  menubarIcons.forEach(function (e) {
    e.classList.toggle("active");
  });
});


function teamAnimation() {
    let teamItem = document.querySelectorAll(".team_item");

    teamItem.forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            let teamImg = this.querySelector(".team_img");
            gsap.to(teamImg, {
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                scale: 1,
                ease: Power4,
                duration: 0.5,
            });
        });

        el.addEventListener("mouseleave", function (dets) {
            let teamImg = this.querySelector(".team_img");
            gsap.to(teamImg, {
                scale: 0,
                ease: Power4,
                duration: 0.5,
            });
        });
    });
}
teamAnimation();










