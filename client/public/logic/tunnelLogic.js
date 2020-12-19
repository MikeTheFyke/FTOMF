var sunStatus = false;
var mercuryStatus = false;
var venusStatus = false;
var terraStatus = false;

// Preset Map Logic
gsap.to("#sun-map", 5, { x: "430px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#mercury-map", 5, { x: "80px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#venus-map", 5, { x: "192px", repeat: -1, ease: "Linear.easeInOut" });
gsap.to("#earth-map", 8, { x: "260px", repeat: -1, ease: "Linear.easeInOut" });



gsap.to("#terra-beta", {
    motionPath: {
        path:[ { x: 50, y: 5 },
            { x: 100, y:0 },
            { x: 50, y:5 },
            { x: 0, y:0 },
            ],
    curviness: 1
    }, 
    duration: 5, ease: "Linear.easeInOut", repeat: -1, opacity: 0 });

gsap.to("#terra-beta2", {
    motionPath: {
        path:[ { x: 50, y: 5 },
            { x: 100, y:0 },
            { x: 50, y:5 },
            { x: 0, y:0 },
            ],
    curviness: 1
    }, 
    duration: 5, ease: "Linear.easeInOut", repeat: -1 });

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

// var tl = gsap.timeline( { defaults: { ease: "Linear.easeInOut" } });
var tl = gsap.timeline( { repeat: -1 });

tl.to("#test-div-beta", { motionPath: {
    path:[ { x: 50, y: 5 },
        { x: 100, y:0 },
        ],
curviness: 1
}, 
duration: 2.5 })

.to("#test-div-beta", 0, { opacity: 0})

.to("#test-div-beta", { motionPath: {
    path:[ 
        { x: 50, y:5 },
        { x: 0, y:0 },
        ],
curviness: 1
}, 
duration: 2.5 })

.to("#test-div-beta", 0, { opacity: 1 });