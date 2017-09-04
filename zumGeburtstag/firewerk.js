
var a = document.querySelectorAll('p');
a = Array.prototype.slice.call(a);

var b = document.querySelectorAll('div');
b = Array.prototype.slice.call(b);

a.forEach(function(el, i, ra) {
  var to = {
    x: Math.random() * (i % 2 === 0 ?-11 : 11),
    y: Math.random() * 12
  }

  el.animate([
    { transform: 'translate(0,0) scale(1)', opacity: 1 },
    { transform: 'translate('+to.x+'rem,'+to.y+'rem) scale('+Math.random()+')', opacity: Math.random() }
  ], {
    duration: (Math.random() + 1) * 2000,
    direction: 'alternate',
    fill: 'forwards',
    iterations: Infinity,
    easing: 'ease-in-out',
    delay: 0
  });
});

var width = (window.innerWidth || 300)/2;
var height = window.innerHeight || 300;
b.forEach(function(el, i, ra) {
  var translate = (Math.random()*width*(i%2 == 0 ? -1 : 1)) +'px,' + (Math.random()*height);
  el.animate([
    { transform: 'scale(0) translate(0)' },
    {transform: 'scale(1)  translate(' + translate + 'px)'}
  ], {
    duration: 25000,
    fill: 'both',
    easing: 'ease-out'
  });
});