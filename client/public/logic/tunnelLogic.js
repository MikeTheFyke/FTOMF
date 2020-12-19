var sunStatus = false;
var mercuryStatus = false;
var venusStatus = false;
var terraStatus = false;
var marsStatus = false;
var saturnStatus = false;

// Preset Map Logic
gsap.to("#sun-map", 5, { x: "395px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#mercury-map", 5, { x: "73.25px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#venus-map", 5, { x: "176px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#earth-map", 8, { x: "239px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#mars-map", 8, { x: "103px", repeat: -1, ease: "Linear.easeInOut" });


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

// Venus Enlarge Logic
document.getElementById('venus-container').addEventListener('click', function () {
    if ( venusStatus === false ){
        venusStatus = true;
        gsap.to("#venus-container", 2, { x:"-25vw" ,y: "300px", scale: 4 })
    } else if ( venusStatus === true ){
        venusStatus = false;
        gsap.to("#venus-container", 2, { x: 0 ,y: 0, scale: 1 })
    }
})

// Earth Enlarge Logic
document.getElementById('terra-container').addEventListener('click', function () {
    if ( terraStatus === false ){
        terraStatus = true;
        gsap.to("#terra-container", 2, { x:"-15vw" ,y: "300px", scale: 4 })
    } else if ( terraStatus === true ){
        terraStatus = false;
        gsap.to("#terra-container", 2, { x: 0 ,y: 0, scale: 1 })
    }
})

// Mars Enlarge Logic
document.getElementById('mars-container').addEventListener('click', function () {
    if ( marsStatus === false ){
        marsStatus = true;
        gsap.to("#mars-container", 2, { x:"-5vw" ,y: "400px", scale: 8 })
    } else if ( marsStatus === true ){
        marsStatus = false;
        gsap.to("#mars-container", 2, { x: 0 ,y: 0, scale: 1 })
    }
})

// Saturn Enlarge Logic
document.getElementById('saturn-container').addEventListener('click', function () {
    if ( saturnStatus === false ){
        saturnStatus = true;
        gsap.to("#saturn-container", 2, { x: "2vw", y: "400px", scale: 3 })
    } else if ( saturnStatus === true ){
        saturnStatus = false;
        gsap.to("#saturn-container", 2, { x: 0 ,y: 0, scale: 1 })
    }
})

var terraBeta = gsap.timeline( { repeat: -1 });
terraBeta.to("#terra-beta", { motionPath: { path:[ { x: 50, y: 5 }, { x: 100, y:0 }, ], curviness: 1 }, duration: 2.5, ease: "Linear.easeInOut" })
    .to("#terra-beta", 0, { zIndex: -1})
    .to("#terra-beta", { motionPath: { path:[{ x: 50, y:5 },{ x: 0, y:0 },],curviness: 1 }, duration: 2.5, ease: "Linear.easeInOut" })
    .to("#terra-beta", 0, { zIndex: 2 });

var phobos = gsap.timeline( { repeat: -1 });
phobos.to("#mars-phobos", { motionPath: { path:[ { x: 30, y: 5 }, { x: 60, y:0 }, ], curviness: 1 }, duration: 2.5, ease: "Linear.easeInOut" })
    .to("#mars-phobos", 0, { zIndex: -1})
    .to("#mars-phobos", { motionPath: { path:[{ x: 30, y:5 },{ x: 0, y:0 },],curviness: 1 }, duration: 2.5, ease: "Linear.easeInOut" })
    .to("#mars-phobos", 0, { zIndex: 2 });

var deimos = gsap.timeline( { repeat: -1 });
deimos.to("#mars-deimos", { motionPath: { path:[ { x: 30, y: 5 }, { x: 60, y:0 }, ], curviness: 1 }, duration: 3, ease: "Linear.easeInOut" })
    .to("#mars-deimos", 0, { zIndex: -1})
    .to("#mars-deimos", { motionPath: { path:[{ x: 30, y:5 },{ x: 0, y:0 },],curviness: 1 }, duration: 3, ease: "Linear.easeInOut" })
    .to("#mars-deimos", 0, { zIndex: 2 });