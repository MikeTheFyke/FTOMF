var terraStatus = false;

gsap.to("#sun-container", 0, { y: "-90px", x:"45.5vw", scale: 0.20 })
gsap.to("#mercury-container", 0, { y: "-298px", x:"35.75vw", scale: 0.20 })
gsap.to("#venus-container", 0, { y: "-505px", x:"25.5vw", scale: 0.20 })

gsap.to("#terra-container", 0, { y: "-455px", x:"15vw",scale: 0.20 })

gsap.to("#mars-container", 0, { y: "-455px", x:"5vw", scale: 0.20 })
gsap.to("#saturn-container", 0, { y: "-710px", x:"-4vw", scale: 0.20 })
gsap.to("#jupiter-container", 0, { y: "-915px", x:"-14vw", scale: 0.20 })
gsap.to("#uranus-container", 0, { y: "-1125px", x:"-24vw", scale: 0.20 })
gsap.to("#neptune-container", 0, { y: "-915px", x:"-33vw", scale: 0.20 })
gsap.to("#pluto-container", 0, { y: "-915px", x:"-42vw", scale: 0.20 })

function terraEnlarge(){
    if ( terraStatus = false ){
        terraStatus = true;
        console.log(terraStatus)
    }
    else if ( terraStatus = true ){
        terraStatus = false;
        console.log(terraStatus)
    }

    gsap.to("#terra-container", 2, { y: 0, scale: 1 })

    var earthMap = new TimelineMax();
    earthMap.to("#earth-map", 5, { x: "500px", repeat: -1, ease: "Linear.easeInOut" });

    var terraBeta = new TimelineMax();
    terraBeta.to("#terra-beta", {
    motionPath: {
        path:[ { x: 95, y: 5 },
               { x: 190, y:0 },
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
               { x: 190, y:0 },
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
}
