document.getElementById('home-link').addEventListener('mouseover', function(){
    TweenMax.to('#home-link', 1, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) })
    console.log("MouseOver")
});

document.getElementById('home-link').addEventListener('mouseout', function(){
    TweenMax.to('#home-link', 1, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) })
});