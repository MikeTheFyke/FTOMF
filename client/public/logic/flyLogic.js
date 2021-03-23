createElement = () => {
    for (var i = 1; i <= 5; i ++){
        var newFly = new Image (50,50);
        newFly.setAttribute("img", "fly"[i]);
        newFly.src = '/public/images/fly.png';
        document.getElementById("flyViewContainer").appendChild(newFly);
    }
}

TweenMax.to('#flyImage', 0, { x: "-100vw" })

TweenMax.to('#flyImage', 4, { x: 0, delay: 1 })

createElement()