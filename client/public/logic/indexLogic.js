
// var minimum = window.innerHeight -150;
// var maximum = window.innerHeight;

// var minimum = 0.1;
// var maximum = 2;

// var randomNumberGenerator = [...Array(10)].map(() => (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum));
// var randomNumberGenerator = (Math.random() * (maximum - minimum + 1)) + minimum;
// console.log(randomNumberGenerator)

TweenMax.to('#header-container', 2.5, { y: window.innerHeight - 100, delay: 1, ease: Bounce.easeOut }) ;

TweenMax.to('#foot-shadow', 0, {scaleY: 0, scaleX: 0})
TweenMax.to('#foot-shadow', 1.05, {scaleY: 0.5, scaleX: 1, delay: 1})
TweenMax.to('#foot-shadow', 0.5, {scaleY: 0.25, scaleX: 0.75, delay: 2.05})
TweenMax.to('#foot-shadow', 0.5, {scaleY: 0.5, scaleX: 1, delay: 2.55})
TweenMax.to('#foot-shadow', 0.25, {scaleY: 0.25, scaleX: 0.75, delay: 3.05})
TweenMax.to('#foot-shadow', 0.20, {scaleY: 0.5, scaleX: 1, delay: 3.30})

// TweenMax.to('#foot-shadow', 0.5, {scaleY: 0.75, delay: 1.5})
// TweenMax.to('#foot-shadow', 0.5, {scaleY: 0.5, delay: 2.25})