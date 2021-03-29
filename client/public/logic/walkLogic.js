// Sprite Intro Logic
TweenMax.to("#sprite", 0, { y: "-100vh" })
TweenMax.to("#sprite", 3, { y: 0, delay: 1 })

document.addEventListener("keydown", spriteMove, false)

function spriteMove (e) {
    var keyCode = e.keyCode
      if(keyCode==38) {
        TweenMax.to("#sprite", 2, { y: "-20px" })
        TweenMax.to("#sprite", 1, { y: 0, delay: 1.5 })
      } else if (keycode==39){
        TweenMax.to("#sprite", 1, { y: "10px" })
      }
}