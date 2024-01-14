let animation = gsap.timeline();

animation
    .from("#navbar",{
        opacity:0,
        y:20,
        
    })
    .from("#tagline",{
        opacity:0,
        scale:1.3,
        duration:1,
    })
    .from(["#welcome-message", "#message"],{
        x:40,
        opacity:0,
    })
    .from(".arrow",{
        opacity:0,
        
        
    })

    .to(".arrow",{
        // opacity:0,
        y:20,
        yoyo:true,
        repeat:-1,
        // duration:1.5,
        
    })
  