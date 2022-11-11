function myFunction(){
  document.getElementById("demo").innerHTML = "Hi JavaScript!";
}
var infoText = "";
function myFunction2(){
  infoText = document.getElementById("mainText").value;
  console.log(infoText);
  return infoText;
// document.getElementById("textExample").innerHTML = "Hello " + username;
}

//step2
function myFunction3(){
  document.getElementById("path").style.opacity="0";
  document.getElementById("path").style.transition=" all 0.7s";
  document.getElementById("path").style.transitionTimingFunction = "ease-in-out";
}
//step 4
function myFunction4(){
  document.getElementById("myProgress").style.transform="translateY(286px)";
  document.getElementById("myProgress").style.transition=" all 2s";
  document.getElementById("myProgress").style.transitionTimingFunction = "ease-in-out";
  setInterval(myFunction5, 2000);
}
//step 5
function myFunction5(){
  document.getElementById("myProgress").style.opacity="0";
  document.getElementById("myProgress").style.transition=" all 1s";
  document.getElementById("myProgress").style.transitionTimingFunction = "ease-in-out";
  setInterval(writerDelete, 100);
}













function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }


//step 6 v2
function writerDelete() {
  document.getElementById("mainText").style.color="#498e97";
  document.getElementById("mainText").style.transition=" all 1s";
  document.getElementById("mainText").style.transitionTimingFunction = "ease-in-out";
  typeWriter();
}



//step 7
var e = 0;
var txt0 = "........TRANSFER COMPLETE........   ";
var speed = 10;
function typeWriter() {
  if (e < txt0.length) {
    document.getElementById("tranText").innerHTML += txt0.charAt(e);
    e++;
    setTimeout(typeWriter, speed);
  }
  setInterval(typeWriter2, 1000);
}

//step 8
var f = 0;
var speed = 100;
function typeWriter2() {
  var txt = document.getElementById("mainText").value;
  if (f < txt.length) {
    document.getElementById("tranText").innerHTML += txt.charAt(f);
    f++;
    setTimeout(typeWriter2, speed);
  }
  setInterval(typeWriter3, 1000);
}

//step 9
var d = 0;
var txt1 = "        ........END........        ";
var speed = 10;
function typeWriter3() {
  if (d < txt0.length) {
    document.getElementById("tranText").innerHTML += txt1.charAt(d);
    d++;
    setTimeout(typeWriter3, speed);
  }
}
  
  




  
  
  
  
  //step1
  brick.onclick = function() {
    //myFunction2();
    myFunction3();
    animate({
      duration: 500,
      timing: function back(x, timeFraction) {
        return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
      }.bind(null, 1.5),
      draw: function(progress) {
        brick.style.left = progress * 541 + 'px';
      }
      
    });
    setInterval(moveProgress,530);
  };
  
  
  
  //step3
  var i = 0;
  function moveProgress() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 0;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 1;
        } 
        else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
          console.log(width);
        }
      }
    }
    setInterval(myFunction4,2000);
  }









function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}



