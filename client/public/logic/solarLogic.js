
TweenMax.to("#earth-map", 5, { x: "500px", delay: 1, repeat: -1, ease: "Linear.easeInOut" })

// TweenMax.to("#terra-beta", 5, { x: "190px", delay: 1, repeat: -1, ease: "Linear.easeInOut" })


TweenMax.to("#terra-beta", {
    motionPath: {
        path:[ { x: 95, y: 5 },
               { x: 190, y:0 },
               { x: 95, y:5 },
               { x: 0, y:0 },
             ],
curviness: 1
}, 
duration: 5, delay: 1, repeat: -1, ease: "Linear.easeInOut", opacity: 0 })

TweenMax.to("#terra-beta2", {
    motionPath: {
        path:[ { x: 95, y: 5 },
               { x: 190, y:0 },
               { x: 95, y:5 },
               { x: 0, y:0 },
             ],
curviness: 1
}, 
duration: 5, delay: 1, repeat: -1, ease: "Linear.easeInOut" })