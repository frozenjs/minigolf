define([
  './levelData',
  './rotateVector',
  'lodash',
  'dojo/has',
  'frozen/utils/distance',
  'frozen/utils/scalePoints',
  'frozen/utils/translatePoints',
  'frozen/utils/radiansFromCenter'
], function(levelData, rotateVector, _, has, distance, scalePoints, translatePoints, radiansFromCenter){

  'use strict';

  // TODO: DRY up
  var MAX_IMPULSE_PIXELS = 100;

  var MIN_TRANSPARENCY = 0.5;
  var MIN_STROKE_LINE = 2;

  return function(context){
    var ball = this.entities.ball;
    var im = this.inputManager;

    context.lineWidth = 1;
    context.drawImage(levelData[this.level].backImg, 0, 0, this.width, this.height);


    _.forEach(this.entities, function(entity){
      if(!entity.staticBody || has('debug')){
        entity.draw(context);
      }
    });

    ball.draw(context);

    if(im.mouseAction.position){
      var ballPt = scalePoints(ball, ball.scale);
      var impPerc = (Math.min(distance(ballPt, im.mouseAction.position), MAX_IMPULSE_PIXELS)) / MAX_IMPULSE_PIXELS;
      var angle = radiansFromCenter(ballPt, im.mouseAction.position) + Math.PI;
      var rotated = rotateVector({x: 0, y: impPerc * MAX_IMPULSE_PIXELS }, angle);
      var p2 = translatePoints(rotated, ballPt);
      var ogLineWidth = context.lineWidth;
      console.log(impPerc);

      var lineWidth = impPerc * 10 / 2;
      context.lineWidth = lineWidth > MIN_STROKE_LINE ? lineWidth : MIN_STROKE_LINE;

      context.beginPath();
      context.moveTo(ballPt.x, ballPt.y);
      context.lineTo(p2.x, p2.y);
      context.strokeStyle = 'rgba(255,0,0,' + (impPerc > MIN_TRANSPARENCY ? impPerc : MIN_TRANSPARENCY) + ')';
      context.closePath();
      context.stroke();
      context.lineWidth = ogLineWidth;
    }

    this.ui.draw(context, this.level);
  };

});