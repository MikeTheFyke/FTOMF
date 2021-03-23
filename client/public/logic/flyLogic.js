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
var randomScale;
var randomShadowScale;

var clickedFly;

var numberOfFlys = Math.floor(Math.random() * (200 - 50 + 1) + 50);

var flys = [];
var shadows = [];

createElements = () => {
    console.log("NumberOfFlys : " + numberOfFlys)
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
            newFly.onclick = flyAway = (e) => {
                e = e || window.event;
                e = e.target || e.srcElement;
                console.log(e.id)
                clickedFly = e.id;
                TweenMax.to("#" + clickedFly, 2, { x: "-100vw", y: 0, scaleX : 1, scaleY: 1 })

            }

            var newShadow = document.createElement('div');
            newShadow.setAttribute("id", "shadow"+ [i]);
            newShadow.style.background = '#ffffff';
            newShadow.style.position = 'absolute';
            newShadow.style.width = '30px';
            newShadow.style.height = '30px';
            newShadow.style.borderRadius = '20px';
            newShadow.style.opacity = "0.5"
            newShadow.style.left = randomXValue + 10 + 'px';
            newShadow.style.top = randomYValue + 10 + 'px';

            document.getElementById("flyViewContainer").appendChild(newShadow);
            document.getElementById("flyViewContainer").appendChild(newFly);

            flys.push({
                id: i,
                x: randomXValue,
                y: randomYValue
            })
            shadows.push({
                id: i,
                x: randomXValue,
                y: randomYValue
            })
        randomY = "";
    }
    setElements()
}

setElements = () => {
    for (var i = 1; i <= numberOfFlys; i ++){
        randomScale = (Math.floor(Math.random() * (90 - 40 + 1) + 40)) / 10;
        randomShadowScale = randomScale / 10
        console.log(randomShadowScale)
        if ( flys[i - 1].x <= windowWidthHalf && flys[i - 1].y <= windowHeightHalf ){
            TweenMax.to('#fly'+ i, 0, { x: "-100vw", y: "-100vw", scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "-70vw", y: "-100vw", scaleX: randomShadowScale, scaleY: randomShadowScale })  
        }
        else if ( flys[i - 1].x <= windowWidthHalf && flys[i - 1].y > windowHeightHalf ){
            TweenMax.to('#fly'+ i, 0, { x: "-100vw", y: "100vw", rotation: -90, scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "-70vw", y: "100vw", rotation: -90, scaleX: randomShadowScale, scaleY: randomShadowScale })    
        }
        else if ( flys[i - 1].x > windowWidthHalf && flys[i - 1].y <= windowHeightHalf){
            TweenMax.to('#fly'+ i, 0, { x: "100vw", y: "-100vw", rotation: 90, scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "70vw", y: "-100vw", rotation: 90, scaleX: randomShadowScale, scaleY: randomShadowScale })    
        }
        else if ( flys[i - 1].x > windowWidthHalf && flys[i - 1].y > windowHeightHalf){
            TweenMax.to('#fly'+ i, 0, { x: "100vw", y: "100vw", rotation: 180, scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "70vw", y: "100vw", rotation: 180, scaleX: (randomShadowScale), scaleY: randomShadowScale })    
        }
    }
    moveElements()
}

moveElements = () => {
    for (var i = 1; i <= numberOfFlys; i ++){
        randomSpeed = (Math.floor(Math.random() * (5 - 1 + 1) + 1))
        randomDelay = Math.floor(Math.random() * 4) + 1;
        TweenMax.to('#fly'+ i, randomSpeed, { x: 0, y: 0, delay: randomDelay, scaleX : 1, scaleY: 1 })    
        TweenMax.to('#shadow'+ i, randomSpeed, { x: 0, y: 0, delay: randomDelay, scaleX : 0.5, scaleY: 0.5, opacity: 0.75, backgroundColor: "black" })    
    }  
}

createElements()