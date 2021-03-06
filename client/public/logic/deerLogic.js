TweenMax.to('#home-link', 0, { x: "-100vw" })
TweenMax.to('#home-link', 2, { x: 0, delay: 1 })
TweenMax.to('#deer-image', 0, { scaleY: 0})

TweenMax.to('#deer-sensor-outer', 2, { scale: 1, yoyo: 1, repeat: -1, transformOrigin: "center" })
TweenMax.to('#deer-sensor', 2, { scale: 1, yoyo: 1, repeat: -1, transformOrigin: "center" })

TweenMax.to('#mountain-image', 4, { opacity: 1, delay: 1 })

document.getElementById('home-link').addEventListener('mouseover', function(){
    TweenMax.to('#home-link', 1, { scale: 1.25, x: "10%", ease: Elastic.easeOut.config(1, 0.3) })
    console.log("MouseOver")
});

document.getElementById('home-link').addEventListener('mouseout', function(){
    TweenMax.to('#home-link', 1, { scale: 1, x: 0, ease: Elastic.easeOut.config(1, 0.3) })
});

document.getElementById('deer-sensor').addEventListener('mouseover', function(){
    TweenMax.to('#deer-image', 1, { scaleY: 1, transformOrigin: "bottom center" })
    TweenMax.to('#deer-sensor-outer', 0.5, { opacity: 0, zIndex: 0 })
    TweenMax.to('#deer-sensor', 0.5, { opacity: 0, zIndex: 0 })
});