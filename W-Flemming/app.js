function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
  let allColors = [
    '#AE70AF', // purple
    '#F37E43', // orange
    '#E66565', // red
    '#FFD603', // yellow
    '#9FCEB4', // green
    '#ACCAE8', // blue
    '#9295CA', // lavender
  ];
  let num = getRandomInt(allColors.length);
  return allColors[num];    
}

let c = document.getElementById('c');
let o = document.getElementById('o');
let l = document.getElementById('l');
let o2 = document.getElementById('o2');
let u = document.getElementById('u');
let r = document.getElementById('r');
let f = document.getElementById('f');
let u2 = document.getElementById('u2');
let l2 = document.getElementById('l2');

const colourful = [c, o, l, o2, u, r, f, u2, l2];

document.addEventListener('click', function (event) {
  for(let i = 0; i < colourful.length; i++) {
    colourful[i].style.fill = getRandomColor()
  }
})

let tl = new TimelineMax();

tl.from("#red-circle", 3, {
  rotation: -720,
  transformOrigin: "50% 50%",
  scale: 0
}, 0).from("#thin-line", 5, {
  x: -500,
  y: -500
}, 0).from("#thick-line", 5, {
  x: -500,
  y: -500
}, 0)

TweenMax.to("#red-curve", 8, {
  rotation: 360,
  transformOrigin: "50% 50%",
}).repeat(-1)

TweenMax.to("#blue-curve", 5, {
  rotation: 360,
  transformOrigin: "50% 50%",
}).repeat(-1).delay(1)

TweenMax.to("#grey-curve", 10, {
  rotation: 360,
  transformOrigin: "50% 50%",
}).repeat(-1).delay(3)

TweenMax.to("#blue-square", 50, {
  rotation: 360,
  transformOrigin: "50% 50%",
}).repeat(-1)

TweenMax.to("#yellow-triangle", 50, {
  rotation: -360,
  transformOrigin: "50% 50%",
}).repeat(-1)

TweenMax.to("#sun", 10, {
  scale: .5,
  transformOrigin: "50% 50%",
}).repeat(-1).yoyo(true)

