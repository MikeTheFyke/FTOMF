
// var minimum = window.innerHeight -150;
// var maximum = window.innerHeight;

var minimum = 1;
var maximum = 3;

// var randomNumberGenerator = [...Array(10)].map(() => (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum));
var randomNumberGenerator = (Math.random() * (maximum - minimum + 1)) + minimum;
console.log(randomNumberGenerator)

TweenMax.to('#header-container', randomNumberGenerator, {opacity: 1, y: window.innerHeight - 100, delay: 1}) ;