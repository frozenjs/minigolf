define([
  'dojo/has',
  'dojo/keys',
  'frozen/utils/distance',
  'frozen/utils/scalePoints',
  'frozen/utils/radiansFromCenter'
], function(has, keys, distance, scalePoints, radiansFromCenter){

  'use strict';

  var IMPULSE_PER_PIXEL = 0.066666667;
  var MAX_IMPULSE_PIXELS = 150;

  return function(im){
    var ball = this.entities.ball;

    if(has('debug')){
      if(im.keyActions[keys.RIGHT_ARROW].getAmount()){
        this.level++;
        this.loadLevel(this.level);
      }

      if(im.keyActions[keys.LEFT_ARROW].getAmount()){
        this.level--;
        this.loadLevel(this.level);
      }
    }

    if(ball && (this.ui.scoreTime <= 0)){
      var position = im.mouseAction.position;
      if(!im.mouseAction.isPressed() && position){
        var ballPx = scalePoints(ball, ball.scale);
        var dist = distance(im.mouseAction.startPosition, position);

        // Hit Ball
        this.ui.ballHit = true;
        var angle = radiansFromCenter(im.mouseAction.startPosition, position) + Math.PI;
        var impulse = Math.min(dist * IMPULSE_PER_PIXEL, MAX_IMPULSE_PIXELS * IMPULSE_PER_PIXEL);
        console.log('hit', angle, impulse);
        this.box.applyImpulse(ball.id, angle, impulse);
        // Reset mouse position
        im.mouseAction.position = null;
      }
    }
  };

});