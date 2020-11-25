
var minimum = window.innerHeight -150;
var maximum = window.innerHeight;
console.log(maximum)

var randomNumberGenerator = [...Array(10)].map(() => (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum)-50);

TweenMax.to('#header-container', 1, {opacity: 1, y: randomNumberGenerator, delay: 2}) ;