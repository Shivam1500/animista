let circle = document.querySelector("#circle");
let frames = document.querySelectorAll(".frame");


const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach(frame => {
    frame.addEventListener("mousemove", function (dets) {

        var dims = frame.getBoundingClientRect();
        // console.log(dims);

        var xstart = dims.x;
        var xend = dims.x + dims.width;

        var zerone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

        lerp(-50, 50, zerone);

        gsap.to(circle, {
            scale: 6.5
        })

        gsap.to(frame.children, {
            color: "#fff",
            duration: .4,
            y: "-5vw"
        })

        gsap.to(frame.children, {
            x: lerp(-50, 50, zerone),
            duration: .3

        })
    })

    frame.addEventListener("mouseleave", function (dets) {
        gsap.to(circle, {
            scale: 1
        })
        gsap.to(frame.children, {
            color: "#000",
            duration: .4,
            y: 0
        })

        gsap.to(frame.children, {
            x: 0,
            duration: .3

        })
    })
})

window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX,dets.clientY);
    // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .3,
        ease: Expo
    })
});



