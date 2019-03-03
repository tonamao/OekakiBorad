(function(){
  'use strict'
  var pen = document.getElementById('pen');
  var eraser = document.getElementById('eraser');
  var clear = document.getElementById('clear');
  
  var cnv = document.getElementById('canvas');
  var ctx = cnv.getContext('2d');
  
  var clickFlg = 0;
  var penMode = 0;//0->pen, 1->eraser
  
  cnv.addEventListener('mousedown', onClick, false);
  cnv.addEventListener('mousemove', draw, false);
  cnv.addEventListener('mouseup', mouseUp, false);
  cnv.addEventListener('mouseout', mouseUp, false);
  
  cnv.addEventListener('touchstart', onTouch, false);
  cnv.addEventListener('touchmove', drawByTouch, false);
  cnv.addEventListener('touchend', touchUp, false);
  
  pen.addEventListener('click', penClick, false);
  eraser.addEventListener('mousedown', erase, false);
  clear.addEventListener('mousedown', clearCanvas, false);
  
  
  function onClick(e){
    clickFlg = 1;
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    
  }
  
  function draw(e){
    
    if(clickFlg == 1){
      
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      ctx.lineTo(x, y);
      ctx.lineWidth = 5;
      if(penMode == 0){
        ctx.strokeStyle = '#2d3436';
      }else if(penMode == 1){
        ctx.strokeStyle = 'white';
      }
      ctx.stroke();
    };
  }
  
  function mouseUp(){
    clickFlg = 0;
  }
  
  //
  function onTouch(e){
    clickFlg = 1;
    ctx.beginPath();
    ctx.moveTo(e.changedTouches[0].pageX - rect.left, e.changedTouches[0].pageY - rect.top);
    
  }
  
  function drawByTouch(e){
    
    event.preventDefault();
    
    if(clickFlg == 1){
      
      var rect = e.target.getBoundingClientRect();
      var x = e.changedTouches[0].pageX - rect.left;
      var y = e.changedTouches[0].pageY - rect.top;

      ctx.lineTo(x, y);
      ctx.lineWidth = 5;
      if(penMode == 0){
        ctx.strokeStyle = '#2d3436';
      }else if(penMode == 1){
        ctx.strokeStyle = 'white';
      }
      ctx.stroke();
    };
  }
  
  function touchUp(){
    clickFlg = 0;
  }
  
  
  function penClick(){
    penMode = 0;
  }
  
  function erase(){
    penMode = 1;
  }
  
  function clearCanvas(){
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 0, 500, 500);
    
    penMode = 0;
  }
  
  
})();
