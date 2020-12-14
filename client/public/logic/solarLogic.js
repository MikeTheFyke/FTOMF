var sunStatus = false;
var mercuryStatus = false;
var venusStatus = false;
var terraStatus = false;
var marsStatus = false;
var saturnStatus = false;
var jupiterStatus = false;
var uranusStatus = false;
var neptuneStatus = false;
var plutoStatus = false;

gsap.to("#sun-container", 0, { y: "-90px", x:"45.5vw", scale: 0.20 })
gsap.to("#mercury-container", 0, { y: "-298px", x:"35.75vw", scale: 0.20 })
gsap.to("#venus-container", 0, { y: "-505px", x:"25.5vw", scale: 0.20 })
gsap.to("#terra-container", 0, { y: "-455px", x:"15vw",scale: 0.20 })
gsap.to("#mars-container", 0, { y: "-455px", x:"5vw", scale: 0.20 })
gsap.to("#saturn-container", 0, { y: "-710px", x:"-4vw", scale: 0.20 })
gsap.to("#jupiter-container", 0, { y: "-915px", x:"-14vw", scale: 0.20 })
gsap.to("#uranus-container", 0, { y: "-1125px", x:"-24vw", scale: 0.20 })
gsap.to("#neptune-container", 0, { y: "-1329px", x:"-34vw", scale: 0.20 })
gsap.to("#pluto-container", 0, { y: "-1535px", x:"-44vw", scale: 0.20 })

document.getElementById('sun-container').addEventListener('click', function () {

    if ( sunStatus === false ){
        sunStatus = true;

        gsap.to("#sun-container", 2, { y: 0, scale: 1 })

        var sunMap = new TimelineMax();
        sunMap.to("#sun-map", 5, { x: "358px", repeat: -1, ease: "Linear.easeInOut" });
        
        var master = new TimelineMax();
        master.add(sunMap)
            // .add(terraBeta)
            // .add(terraBeta2);
            console.log(sunStatus)
    }
    else if ( sunStatus === true ){
        sunStatus = false;
        gsap.to("#sun-container", 2, { y: "-90px", x:"45.5vw", scale: 0.20 })
        console.log(sunStatus)
    }
})

document.getElementById('mercury-container').addEventListener('click', function () {
    if ( mercuryStatus === false ){
        mercuryStatus = true;

        gsap.to("#mercury-container", 2, { y: 0, scale: 1 })

        var mercuryMap = new TimelineMax();
        mercuryMap.to("#mercury-map", 5, { x: "400px", repeat: -1, ease: "Linear.easeInOut" });
        
        var master = new TimelineMax();
        master.add(mercuryMap)
        console.log(mercuryStatus)
    }
    else if ( mercuryStatus === true ){
        mercuryStatus = false;
        gsap.to("#mercury-container", 2, { y: "-298px", x:"35.75vw", scale: 0.20 })
        console.log(mercuryStatus)
    }
})

document.getElementById('venus-container').addEventListener('click', function () {
    if ( venusStatus === false ){
        venusStatus = true;

        gsap.to("#venus-container", 2, { y: 0, scale: 1 })

        var venusMap = new TimelineMax();
        venusMap.to("#venus-map", 5, { x: "400px", repeat: -1, ease: "Linear.easeInOut" });
        
        var master = new TimelineMax();
        master.add(venusMap)
        console.log(venusStatus)
    }
    else if ( venusStatus === true ){
        venusStatus = false;
        gsap.to("#venus-container", 2, { y: "-505px", x:"25.5vw", scale: 0.20 })
        console.log(venusStatus)
    }
})

document.getElementById('terra-container').addEventListener('click', function () {
    if ( terraStatus === false ){
        terraStatus = true;

        gsap.to("#terra-container", 2, { y: 0, scale: 1 })

        var earthMap = new TimelineMax();
        earthMap.to("#earth-map", 5, { x: "500px", repeat: -1, ease: "Linear.easeInOut" });

        var terraBeta = new TimelineMax();
        terraBeta.to("#terra-beta", {
        motionPath: {
            path:[ { x: 95, y: 5 },
                { x: 200, y:0 },
                { x: 95, y:5 },
                { x: 0, y:0 },
                ],
        curviness: 1
        }, 
        duration: 5, ease: "Linear.easeInOut", repeat: -1, opacity: 0 });

        var terraBeta2 = new TimelineMax();
        terraBeta2.to("#terra-beta2", {
        motionPath: {
            path:[ { x: 95, y: 5 },
                { x: 200, y:0 },
                { x: 95, y:5 },
                { x: 0, y:0 },
                ],
        curviness: 1
        }, 
        duration: 5, repeat: -1, ease: "Linear.easeInOut" });
        
        var master = new TimelineMax();
        master.add(earthMap, terraBeta, terraBeta2)
            // .add(terraBeta)
            // .add(terraBeta2);
            console.log(terraStatus)
    }
    else if ( terraStatus === true ){
        terraStatus = false;
        gsap.to("#terra-container", 2, { y: "-455px", x:"15vw",scale: 0.20 })
        console.log(terraStatus)
    }
})

document.getElementById('mars-container').addEventListener('click', function () {

    if ( marsStatus === false ){
    marsStatus = true;
    gsap.to("#mars-container", 2, { y: 0, scale: 1 })

    var marsMap = new TimelineMax();
    marsMap.to("#mars-map", 5, { x: "400px", repeat: -1, ease: "Linear.easeInOut" });

    var phobosMap = new TimelineMax();
    phobosMap.to("#phobos-map", 5, { x: "40px", repeat: -1, ease: "Linear.easeInOut" });
    
    var phobosMove = new TimelineMax();
    phobosMove.to("#mars-phobos", {
        motionPath: {
            path:[ { x: 95, y: 5 },
                { x: 200, y:0 },
                { x: 95, y:5 },
                { x: 0, y:0 },
                ],
        curviness: 1
        }, 
        duration: 5, ease: "Linear.easeInOut", repeat: -1, opacity: 0 });

    var deimosMap = new TimelineMax();
    deimosMap.to("#deimos-map", 5, { x: "40px", repeat: -1, ease: "Linear.easeInOut" });
    
    var deimosMove = new TimelineMax();
    deimosMove.to("#mars-deimos", {
        motionPath: {
            path:[ { x: 150, y: 10 },
                { x: 300, y: 0 },
                { x: 150, y: 10 },
                { x: 0, y: 0 },
                ],
        curviness: 1
        }, 
        duration: 5, ease: "Linear.easeInOut", repeat: -1, opacity: 0 });
    }
    else if ( marsStatus === true ){
        marsStatus = false;
        gsap.to("#mars-container", 2, { y: "-455px", x:"5vw", scale: 0.20 })
        console.log(marsStatus)
    }
})

document.getElementById('saturn-container').addEventListener('click', function () {
    if ( saturnStatus === false ){
        saturnStatus = true;

        gsap.to("#saturn-container", 2, { y: 0, scale: 1 })

        var saturnMap = new TimelineMax();
        saturnMap.to("#saturn-map", 5, { x: "400px", repeat: -1, ease: "Linear.easeInOut" });
        
        var master = new TimelineMax();
        master.add(saturnMap)
        console.log(saturnStatus)
    }
    else if ( saturnStatus === true ){
        saturnStatus = false;
        gsap.to("#saturn-container", 2, { y: "-505px", x:"25.5vw", scale: 0.20 })
        console.log(saturnStatus)
    }
})