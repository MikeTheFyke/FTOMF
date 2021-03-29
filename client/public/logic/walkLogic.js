// Sprite Intro Logic
TweenMax.to("#sprite", 0, { y: "-100vh" })
TweenMax.to("#sprite", 3, { y: 0, delay: 1 })

document.addEventListener("keydown", spriteMove, false)

var Sprite = {
    x: 0,
    y: 0
}

function spriteMove (e) {
    var keyCode = e.keyCode
      if(keyCode==38) {         // Jump Up
        TweenMax.to("#sprite", 2, { y: "-20px" })
        TweenMax.to("#sprite", 1, { y: 0, delay: 1.5 })
      } else if (keyCode==39){  // move Right
        Sprite.x += 10 
        TweenMax.to("#sprite", 1, { x: Sprite.x })
      } else if (keyCode==37){  // Move Left
        Sprite.x -= 10 
        TweenMax.to("#sprite", 1, { x: Sprite.x })
      } else if (keyCode==40){  // Bend Down
        TweenMax.to("#sprite", 1, { scaleY: 0.5, transformOrigin: "center bottom" })
        TweenMax.to("#sprite", 1, { scaleY: 1, transformOrigin: "center bottom", delay: 1 })
      } else if (keyCode==39 && kefyCode==39){  // Jump Up and Right
        TweenMax.to("#sprite", 1, { y: "-20px", x: "10px" })
        TweenMax.to("#sprite", 0.5, { y: 0, x: "20px", delay: 0.75 })
      } else if (keyCode==39 && kefyCode==37){  // Jump Up and Left
        TweenMax.to("#sprite", 1, { y: "-20px", x: "-10px" })
        TweenMax.to("#sprite", 0.5, { y: 0, x: "-20px", delay: 0.75 })
      }
      
}