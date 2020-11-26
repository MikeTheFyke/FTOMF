
// var minimum = window.innerHeight -150;
// var maximum = window.innerHeight;

var minimum = 1;
var maximum = 2.5;

var randomNumberGenerator = [...Array(2)].map(() => (Math.random() * (maximum - minimum + 1)) + minimum);
// var randomNumberGenerator = (Math.random() * (maximum - minimum + 1)) + minimum;

for (var i = 0; i < randomNumberGenerator.length; i++){
    randomNumberGenerator[i] = randomNumberGenerator[i].toFixed(2);    
}
// randomNumberGenerator[0] = randomNumberGenerator[0].toFixed(2);
// randomNumberGenerator[1] = randomNumberGenerator[1].toFixed(2);

console.log(randomNumberGenerator[0])
console.log(randomNumberGenerator[1])

/// header element 1
TweenMax.to('#header-container', 2.5, { y: window.innerHeight - 100, delay: 1, ease: Bounce.easeOut }) ;

TweenMax.to('#foot-shadow', 0, {scaleY: 0, scaleX: 0})
TweenMax.to('#foot-shadow', 1.05, {scaleY: 0.5, scaleX: 1, delay: 1})
TweenMax.to('#foot-shadow', 0.5, {scaleY: 0.25, scaleX: 0.75, delay: 2.05})
TweenMax.to('#foot-shadow', 0.5, {scaleY: 0.5, scaleX: 1, delay: 2.55})
TweenMax.to('#foot-shadow', 0.25, {scaleY: 0.25, scaleX: 0.75, delay: 3.05})
TweenMax.to('#foot-shadow', 0.20, {scaleY: 0.5, scaleX: 1, delay: 3.30})

document.getElementById('header-element').addEventListener('mouseover', function(){
    TweenMax.to('#header-element', 1.5, { y: -25, scale: 1.5, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#foot-shadow', 1.5, { scaleY: .75, scaleX: 1.25, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('header-element').addEventListener('mouseout', function(){
    TweenMax.to('#header-element', 1.5, { y:0, scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#foot-shadow', 1.5, { scaleY: .5, scaleX: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});

/// header element 2
TweenMax.to('#header-container', 2.5, { y: window.innerHeight - 100, delay: 1, ease: Bounce.easeOut }) ;

TweenMax.to('#foot-shadow2', 0, {scaleY: 0, scaleX: 0})
TweenMax.to('#foot-shadow2', 1.05, {scaleY: 0.5, scaleX: 1, delay: 1})
TweenMax.to('#foot-shadow2', 0.5, {scaleY: 0.25, scaleX: 0.75, delay: 2.05})
TweenMax.to('#foot-shadow2', 0.5, {scaleY: 0.5, scaleX: 1, delay: 2.55})
TweenMax.to('#foot-shadow2', 0.25, {scaleY: 0.25, scaleX: 0.75, delay: 3.05})
TweenMax.to('#foot-shadow2', 0.20, {scaleY: 0.5, scaleX: 1, delay: 3.30})

document.getElementById('header-element2').addEventListener('mouseover', function(){
    TweenMax.to('#header-element2', 1.5, { y: -25, scale: 1.5, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#foot-shadow2', 1.5, { scaleY: .75, scaleX: 1.25, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('header-element2').addEventListener('mouseout', function(){
    TweenMax.to('#header-element2', 1.5, { y:0, scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#foot-shadow2', 1.5, { scaleY: .5, scaleX: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});