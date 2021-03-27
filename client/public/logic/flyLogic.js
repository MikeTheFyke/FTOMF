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

var clickedShadow;
var clickedFly;
var clickedX;
var clickedY;

var squashedFlyRadius = 100;
var squashedFlyX;
var squashedFlyY;

var fleeFlyX;
var fleeFlyY;

var numberOfFlys = Math.floor(Math.random() * (200 - 50 + 1) + 50);
// var numberOfFlys = 4;

var flys = [];
var shadows = [];

createElements = () => {
    console.log("NumberOfFlys : " + numberOfFlys)
    for (var i = 0; i <= numberOfFlys; i ++){
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
            newFly.onclick = selectAway = (e) => {
                e = e || window.event;

                clickedX = e.clientX;
                clickedY = e.clientY;

                e = e.target || e.srcElement;

                clickedFly = e.id;
                clickedShadow = "shadow" + clickedFly.slice(3)

                flyAway(clickedFly)

                // console.log("ClickedFly : " + clickedFly.slice(3))
                // TweenMax.to("#" + clickedFly, 2, { x: "-130vw", y: 0, scaleX : 4, scaleY: 4, zIndex: -3 })
                // TweenMax.to("#" + clickedFly, 1, { scaleX : 0.15, scaleY: 0.15, zIndex: -3 })
                // TweenMax.to("#" + clickedShadow, 1, {scaleX : 0.25, scaleY: 0.25, delay: 0.05, backgroundColor: "green" })

                // for (var k = flys.length - 1; k >= 0; --k) {
                //     if (flys[k].id == clickedFly.slice(3)) {
                //         flys[k].x = 0;
                //         flys[k].y = 0;
                //     }
                //     console.log(flys[k])
                // }
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
            // newShadow.style.backgroundImage = 'radial-gradient (black, white)';

            document.getElementById("flyViewContainer").appendChild(newShadow);
            document.getElementById("flyViewContainer").appendChild(newFly);

            flys.push({
                id: i,
                x: randomXValue,
                y: randomYValue,
                flee: false,
                squashed: false
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
    for (var i = 0; i <= numberOfFlys; i ++){
        randomScale = (Math.floor(Math.random() * (90 - 40 + 1) + 40)) / 10;
        randomShadowScale = randomScale / 10
        // console.log(randomShadowScale)
        if ( flys[i].x <= windowWidthHalf && flys[i].y <= windowHeightHalf ){
            TweenMax.to('#fly'+ i, 0, { x: "-100vw", y: "-100vw", scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "-70vw", y: "-100vw", scaleX: randomShadowScale, scaleY: randomShadowScale })  
        }
        else if ( flys[i].x <= windowWidthHalf && flys[i].y > windowHeightHalf ){
            TweenMax.to('#fly'+ i, 0, { x: "-100vw", y: "100vw", rotation: -90, scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "-70vw", y: "100vw", rotation: -90, scaleX: randomShadowScale, scaleY: randomShadowScale })    
        }
        else if ( flys[i].x > windowWidthHalf && flys[i].y <= windowHeightHalf){
            TweenMax.to('#fly'+ i, 0, { x: "100vw", y: "-100vw", rotation: 90, scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "70vw", y: "-100vw", rotation: 90, scaleX: randomShadowScale, scaleY: randomShadowScale })    
        }
        else if ( flys[i].x > windowWidthHalf && flys[i].y > windowHeightHalf){
            TweenMax.to('#fly'+ i, 0, { x: "100vw", y: "100vw", rotation: 180, scaleX: randomScale, scaleY: randomScale })    
            TweenMax.to('#shadow'+ i, 0, { x: "70vw", y: "100vw", rotation: 180, scaleX: (randomShadowScale), scaleY: randomShadowScale })    
        }
    }
    moveElements()
}

moveElements = () => {
    for (var i = 0; i <= numberOfFlys; i ++){
        randomSpeed = (Math.floor(Math.random() * (5 - 1 + 1) + 1))
        randomDelay = Math.floor(Math.random() * 4) + 1;
        TweenMax.to('#fly'+ i, randomSpeed, { x: 0, y: 0, delay: randomDelay, scaleX : 1, scaleY: 1 })    
        TweenMax.to('#shadow'+ i, randomSpeed, { x: 0, y: 0, delay: randomDelay, scaleX : 0.5, scaleY: 0.5, opacity: 0.75, backgroundColor: "black" })    
    }  
}

flyAway = () => {
    randomScale = (Math.floor(Math.random() * (50 - 20 + 1) + 20)) / 10;
    randomSpeed = (Math.floor(Math.random() * (5 - 1 + 1) + 1))
    // console.log("New Clicked Fly : " + flys[clickedFly.slice(3)].x)
    // squashedFlyX = flys[(clickedFly.slice(3)-1)].x;
    // squashedFlyY = flys[(clickedFly.slice(3)-1)].y;

    TweenMax.to("#" + clickedFly, 1, { scaleX : 0.15, scaleY: 0.15, zIndex: -3 })
    TweenMax.to("#" + clickedShadow, 1, {scaleX : 0.25, scaleY: 0.25, delay: 0.05, backgroundColor: "green" })


    console.log("ClickedFly : " + clickedFly.slice(3))

    for (var k = flys.length - 1; k >= 0; --k) {
        if (flys[k].id == clickedFly.slice(3)) {
            squashedFlyX = flys[(clickedFly.slice(3)-1)].x;
            squashedFlyY = flys[(clickedFly.slice(3)-1)].y;
            console.log("Squashed Fly X : " + squashedFlyX)
            console.log("Squashed Fly Y : " + squashedFlyY)
            flys[k].x = 0;
            flys[k].y = 0;
            flys[k].squashed = true;
            console.log("Clicked Fly : " + flys[k].id)
        }
        
        if ( squashedFlyX >= flys[k].x ){
            fleeFlyX = squashedFlyX - (flys[k].x);
            if ( fleeFlyX <= squashedFlyRadius && flys[k].flee === false){
                flys[k].flee = true;
                TweenMax.to("#fly" + [k], randomSpeed, { x: "-150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 180 })
                TweenMax.to("#shadow" + [k], randomSpeed, { x: "-150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 180 })
                console.log("Flee Fly ID : " + flys[k].id + " X : " + flys[k].x + " FleeFlyX : " + fleeFlyX )
            }
            // console.log("FleeFlyX : " + fleeFlyX)
        } else if ( squashedFlyX < flys[k].x ){
            fleeFlyX = (flys[k].x) - squashedFlyX;
            if ( fleeFlyX <= squashedFlyRadius && flys[k].flee === false){
                flys[k].flee = true;
                TweenMax.to("#fly" + [k], randomSpeed, { x: "-150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 180 })
                TweenMax.to("#shadow" + [k], randomSpeed, { x: "-150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 180 })
                console.log("Flee Fly ID : " + flys[k].id + " X : " + flys[k].x + " FleeFlyX : " + fleeFlyX )
            }
            // console.log("FleeFlyX : " + fleeFlyX)
        }
    }

    // for (var j = 0; j <= numberOfFlys; j ++ ){
    //     if ( squashedFlyX >= flys[j].x ){
    //         fleeFlyX = squashedFlyX - (flys[j].x);
    //         // console.log("FleeFlyX : " + fleeFlyX)
    //     } else if ( squashedFlyX < flys[j].x ){
    //         fleeFlyX = (flys[j].x) - squashedFlyX;
    //         // console.log("FleeFlyX : " + fleeFlyX)
    //     }

    //     if ( squashedFlyY >= flys[j].y ){
    //         fleeFlyY = squashedFlyY - (flys[j].y);
    //         // console.log("FleeFlyY : " + fleeFlyY)
    //     } else if ( squashedFlyY < flys[j].y ){
    //         fleeFlyY = (flys[j].y) - squashedFlyY;
    //         // console.log("FleeFlyY : " + fleeFlyY)
    //     }

    //     fleeFlyX = squashedFlyX - (flys[j].x);
    //     fleeFlyY = squashedFlyY - (flys[j].y);

    //     if ( fleeFlyX <= squashedFlyRadius || fleeFlyY <= squashedFlyRadius ){
    //         console.log("Flee Fly X : " + fleeFlyX)
    //         console.log("Squashed Fly Radius : " + squashedFlyRadius)
    //         // TweenMax.to("#" + clickedFly, 2, { x: "-100vw", y: 0, scaleX : 1, scaleY: 1 })
    //         if (flys[j].x <= windowHeightHalf ){
    //             TweenMax.to("#fly" + [j], randomSpeed, { x: "-150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 180 })
    //             TweenMax.to("#shadow" + [j], randomSpeed, { x: "-150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 180 })
    //         }
    //         else if (flys[j].x > windowHeightHalf ){
    //             TweenMax.to("#fly" + [j], randomSpeed, { x: "150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 0 })
    //             TweenMax.to("#shadow" + [j], randomSpeed, { x: "150vw", y: 0, scaleX : randomScale, scaleY: randomScale, rotation: 0 })
    //         }
    //     }
    // }
}

createElements()