function htRem() {
  var ww = document.documentElement.clientWidth;
  if (ww > 750) {
    ww = 750;
  }
  document.documentElement.style.fontSize = ww / 7.5 + "px";
}
htRem();
window.onresize = function() {
  htRem();
};
window.onload = window.onresize = function(){
  var desW = 750,
    winW = document.documentElement.clientWidth,
    ratio = winW/desW;
  document.documentElement.style.fontSize = ratio*100+'px';
}
