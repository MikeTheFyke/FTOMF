TweenMax.to('#home-link', 0, { x: "-100vw" })
TweenMax.to('#home-link', 1, { x: 0, delay: 1 })

document.getElementById('home-link').addEventListener('mouseover', function(){
    TweenMax.to('#home-link', 1, { scale: 1.25, x: "10%", ease: Elastic.easeOut.config(1, 0.3) })
    console.log("MouseOver")
});

document.getElementById('home-link').addEventListener('mouseout', function(){
    TweenMax.to('#home-link', 1, { scale: 1, x: 0, ease: Elastic.easeOut.config(1, 0.3) })
});