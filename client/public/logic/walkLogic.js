// Sprite Intro Logic
TweenMax.to("#sprite", 0, { y: "-100vh" })
TweenMax.to("#sprite", 3, { y: 0, delay: 1 } );

document.addEventListener("keydown", spriteMove, false);

function spriteMove (e) {
    var keyCode = e.keyCode;
      if(keyCode==13) {
      alert("You hit the enter key.");
      } else {
      alert("Oh no you didn't.");
      }
}