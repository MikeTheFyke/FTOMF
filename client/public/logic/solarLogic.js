gsap.to("#terra-container", 0, { y: "-460px", scale: 0.20 })


function terraEnlarge(){
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
