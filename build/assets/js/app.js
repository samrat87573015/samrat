function smoothScroll() {
    const lenis = new Lenis({
        //lerp: 0.08,
        smooth: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
smoothScroll();



function heroAnimation() {
  gsap.set(".slides", {
    scale: 3,
  });


  let lt = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_area",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
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
    gsap.to(".slider_item", {
        scrollTrigger: {
            trigger: ".scrol_slider_area",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        xPercent: -200,
        ease: Power4,
    });
}
scollSliderAnimation();

function aboutAnimation() {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
        gsap.to(".abright_box", {
            scrollTrigger: {
                trigger: ".about",
                start: "top 30%",
                end: "bottom bottom",
                scrub: 3,
            },
            y: -0,
            ease: Power4,
            duration: 3,
            stagger: 0.03,
        });
    }else {
        gsap.to('.abright_box', {
            scrollTrigger: {
                trigger: '.about',
                start: "top 30%",
                end: "bottom 80%",
                scrub: 3,

            },
            yPercent: -100,
            ease: Power4,
            duration: 3,
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
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
    },
    y: 0,
    x: 0,
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











