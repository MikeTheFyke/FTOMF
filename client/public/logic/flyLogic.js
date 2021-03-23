var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var randomYValue;
var randomY;

var randomXValue;
var randomX;

var flys = [];

createElement = () => {
    for (var i = 1; i <= 5; i ++){
        randomYValue = Math.floor(Math.random() * (windowHeight - 10)) + 10;
        randomY = randomYValue + "px";
        randomXValue = Math.floor(Math.random() * (windowWidth - 10)) + 10;
        randomX = randomXValue + "px";
        var newFly = new Image (50,50);
        newFly.setAttribute("id", "fly"+ [i]);
        newFly.src = '/public/images/fly.png';
        newFly.style.position = 'absolute';
        newFly.style.left = randomX;
        newFly.style.top = randomY;
        document.getElementById("flyViewContainer").appendChild(newFly);
            flys.push({
                id: i,
                x: randomXValue,
                y: randomYValue
            })
        randomY = "";
    }
    console.log(flys)
    setElement()
}

setElement = () => {
    for (var i = 1; i <= 5; i ++){
        TweenMax.to('#fly'+ i, 0, { x: "-100vw" })    
    }
    for (var i = 1; i <= 5; i ++){
        TweenMax.to('#fly'+ i, 2, { x: 0, delay: 1 })    
    }
}

TweenMax.to('#flyImage', 0, { x: "-100vw" })

TweenMax.to('#flyImage', 4, { x: 0, delay: 1 })

createElement()