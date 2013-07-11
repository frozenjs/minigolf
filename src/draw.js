define([
  './levelData',
  './rotateVector',
  'lodash',
  'dojo/has',
  'frozen/utils/distance',
  'frozen/utils/scalePoints',
  'frozen/utils/translatePoints',
  'frozen/utils/radiansFromCenter',
  'frozen/plugins/loadImage!images/putter.png'
], function(levelData, rotateVector, _, has, distance, scalePoints, translatePoints, radiansFromCenter, putter){

  'use strict';

  // TODO: DRY up
  var MAX_IMPULSE_PIXELS = 150;

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
      var length = Math.min(distance(ballPt, im.mouseAction.position), MAX_IMPULSE_PIXELS);
      //var length = Math.min(distance(im.mouseAction.startPosition, im.mouseAction.position), MAX_IMPULSE_PIXELS);
      var impPerc = length / MAX_IMPULSE_PIXELS;
      var angle = radiansFromCenter(ballPt, im.mouseAction.position) + Math.PI;
      //var angle = radiansFromCenter(im.mouseAction.startPosition, im.mouseAction.position) + Math.PI;

      //end of the arrow head
      var p2 = translatePoints(rotateVector({x: 0, y: impPerc * MAX_IMPULSE_PIXELS / 3 }, angle), ballPt);

      //corners of the triangle
      var p3 = translatePoints(rotateVector({x: 0, y: length/10 }, angle + Math.PI/2),p2);
      var p4 = translatePoints(rotateVector({x: 0, y: length/10 }, angle + Math.PI * 1.5), p2);

      //end of arrow
      var p5 = translatePoints(rotateVector({x: 0, y: impPerc * MAX_IMPULSE_PIXELS }, angle), ballPt);

      var ogLineWidth = context.lineWidth;

      var style = 'rgba(255,0,0,' + (impPerc > MIN_TRANSPARENCY ? impPerc : MIN_TRANSPARENCY) + ')';
      context.fillStyle = style;
      context.strokeStyle = style;

      //arrow head
      context.beginPath();
      context.moveTo(ballPt.x, ballPt.y);
      context.lineTo(p3.x, p3.y);
      context.lineTo(p4.x, p4.y);
      context.lineTo(ballPt.x, ballPt.y);
      context.closePath();
      context.fill();

      //arrow shaft
      var lineWidth = impPerc * 9 + 1;
      context.lineWidth = lineWidth > MIN_STROKE_LINE ? lineWidth : MIN_STROKE_LINE;
      context.beginPath();
      context.moveTo(p2.x, p2.y);
      context.lineTo(p5.x, p5.y);
      context.closePath();
      context.stroke();

      context.lineWidth = ogLineWidth;
    }

    this.ui.draw(context, this.level);
  };

});