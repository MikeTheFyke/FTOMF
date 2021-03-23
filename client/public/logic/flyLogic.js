var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var windowWidthHalf = window.innerWidth / 2;
var windowHeightHalf = window.innerHeight / 2;

var randomYValue;
var randomY;

var randomXValue;
var randomX;

var randomSpeed;
var randomDelay;

var numberOfFlys = Math.floor(Math.random() * 100) + 5;

var flys = [];

createElements = () => {
    for (var i = 1; i <= numberOfFlys; i ++){
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
    setElements()
}

setElements = () => {
    for (var i = 1; i <= numberOfFlys; i ++){
        console.log(flys[i - 1].x)
        if ( flys[i - 1].x <= windowWidthHalf && flys[i - 1].y <= windowHeightHalf ){
            TweenMax.to('#fly'+ i, 0, { x: "-100vw", y: "-100vw" })    
        }
        else if ( flys[i - 1].x <= windowWidthHalf && flys[i - 1].y > windowHeightHalf ){
            TweenMax.to('#fly'+ i, 0, { x: "-100vw", y: "100vw", rotation: -90 })    
        }
        else if ( flys[i - 1].x > windowWidthHalf && flys[i - 1].y <= windowHeightHalf){
            TweenMax.to('#fly'+ i, 0, { x: "100vw", y: "-100vw", rotation: 90 })    
        }
        else if ( flys[i - 1].x > windowWidthHalf && flys[i - 1].y > windowHeightHalf){
            TweenMax.to('#fly'+ i, 0, { x: "100vw", y: "100vw", rotation: 180 })    
        }
    }
    moveElements()
}

moveElements = () => {
    for (var i = 1; i <= numberOfFlys; i ++){
        randomSpeed = Math.floor(Math.random() * 4) + 1;
        randomDelay = Math.floor(Math.random() * 4) + 1;
        TweenMax.to('#fly'+ i, randomSpeed, { x: 0, y: 0, delay: randomDelay })    
    }
}

createElements()