var sunStatus = false;
var mercuryStatus = false;

gsap.to("#sun-map", 5, { x: "430px", repeat: -1, ease: "Linear.easeInOut" });

document.getElementById('sun-container').addEventListener('click', function () {
    if ( sunStatus === false ){
        sunStatus = true;
        gsap.to("#sun-container", 2, { x:"-40vw" ,y: "200px", scale: 2 })
    } else if ( sunStatus === true ){
        sunStatus = false;
        gsap.to("#sun-container", 2, { x: 0 ,y: 0, scale: 1 })
    }
})

