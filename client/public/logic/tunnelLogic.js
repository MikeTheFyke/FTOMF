var sunStatus = false;
var mercuryStatus = false;

// Preset Map Logic
gsap.to("#sun-map", 5, { x: "430px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#mercury-map", 5, { x: "80px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#venus-map", 5, { x: "192px", repeat: -1, ease: "Linear.easeInOut" });

// Sun Enlarge Logic
document.getElementById('sun-container').addEventListener('click', function () {
    if ( sunStatus === false ){
        sunStatus = true;
        gsap.to("#sun-container", 2, { x:"-40vw" ,y: "300px", scale: 2 })
    } else if ( sunStatus === true ){
        sunStatus = false;
        gsap.to("#sun-container", 2, { x: 0 ,y: 0, scale: 1 })
    }
})

// Mercury Enlarge Logic
document.getElementById('mercury-container').addEventListener('click', function () {
    if ( mercuryStatus === false ){
        mercuryStatus = true;
        gsap.to("#mercury-container", 2, { x:"-30vw" ,y: "300px", scale: 10 })
    } else if ( mercuryStatus === true ){
        mercuryStatus = false;
        gsap.to("#mercury-container", 2, { x: 0 ,y: 0, scale: 1 })
    }
})
