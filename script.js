

window.addEventListener("mousemove", function(dets){
    gsap.to("#circle", {
        x: dets.clientX,
        y: dets.clientY
    })
})

let frames = document.querySelectorAll(".frame");

frames.forEach(function(frame){
    frame.addEventListener("mousemove", function(dets){
        let xstart = frame.getBoundingClientRect().x;
        let xend = frame.getBoundingClientRect().x + frame.getBoundingClientRect().width;
        let displacement = gsap.utils.mapRange(xstart, xend, -50, 50, dets.clientX);
    
        gsap.to('#circle', {
            scale: 11
        })
        gsap.to(frame.children, {
            transform: 'translateY(-3vw)',
            opacity: 1,
            ease: Expo,
            duration: 0.3
        })
        gsap.to(frame, {
            x: displacement,
            duration: 0.3
        })
    })
    
    frame.addEventListener("mouseleave", function(){
        gsap.to('#circle', {
            scale: 1
        })
        gsap.to(frame.children, {
            transform: 'translateY(0)',
            opacity: 0.7,
            ease: Expo,
            duration: 0.3
        })
        gsap.to(frame, {
            x: 0,
            duration: 0.3
        })
    })
})