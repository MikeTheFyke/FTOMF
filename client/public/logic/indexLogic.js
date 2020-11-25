
// var minimum = window.innerHeight -150;
// var maximum = window.innerHeight;

var minimum = 0.1;
var maximum = 2;

// var randomNumberGenerator = [...Array(10)].map(() => (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum));
var randomNumberGenerator = (Math.random() * (maximum - minimum + 1)) + minimum;
console.log(randomNumberGenerator)

TweenMax.to('#header-container', 2.5, {opacity: 1, y: window.innerHeight - 100, delay: 1, ease: Bounce.easeOut }) ;
