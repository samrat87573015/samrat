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
