var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var randomYValue;
var randomY;

createElement = () => {
    for (var i = 1; i <= 5; i ++){
        randomYValue = Math.floor(Math.random() * (windowHeight - 10)) + 10;
        randomY = randomYValue + "px";
        var newFly = new Image (50,50);
        newFly.setAttribute("img", "fly"[i]);
        newFly.src = '/public/images/fly.png';
        newFly.style.position = 'absolute';
        newFly.style.left = '10px';
        newFly.style.top = randomY;
        document.getElementById("flyViewContainer").appendChild(newFly);
        randomY = "";
    }
}

TweenMax.to('#flyImage', 0, { x: "-100vw" })

TweenMax.to('#flyImage', 4, { x: 0, delay: 1 })

createElement()