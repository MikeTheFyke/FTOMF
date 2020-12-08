

var earthMap = new TimelineMax();

earthMap.to("#earth-map", 5, { x: "500px", ease: "Linear.easeInOut" });

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
duration: 5, ease: "Linear.easeInOut", opacity: 0 });

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
duration: 5, ease: "Linear.easeInOut" });

var master = new TimelineMax();
master.add(earthMap, terraBeta, terraBeta2)
    // .add(terraBeta)
    // .add(terraBeta2);