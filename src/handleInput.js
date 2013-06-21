define([
  './state',
  'dojo/has',
  'dojo/keys',
  'frozen/utils/distance',
  'frozen/utils/scalePoints',
  'frozen/utils/radiansFromCenter'
], function(state, has, keys, distance, scalePoints, radiansFromCenter){

  'use strict';

  var IMPULSE_PER_PIXEL = 0.1;

  // TODO: DRY up
  var MAX_IMPULSE_PIXELS = 100;

  return function(im){
    var ball = this.entities.ball;

    if(has('debug')){
      if(im.keyActions[keys.RIGHT_ARROW].getAmount()){
        state.level++;
        this.loadLevel(state.level);
      }

      if(im.keyActions[keys.LEFT_ARROW].getAmount()){
        state.level--;
        this.loadLevel(state.level);
      }
    }

    if(ball && (this.ui.scoreTime <= 0)){
      var position = im.mouseAction.position;
      var ballPx;
      var dist;
      if(position){
        ballPx = scalePoints(ball, ball.scale);
        dist = distance(ballPx, position);
      }

      if(im.mouseAction.isPressed()){
        state.swingPt = position;
      } else {
        if(state.swingPt){
          // Hit Ball
          this.ui.ballHit = true;
          var angle = radiansFromCenter(ballPx, position) + Math.PI;
          var impulse = Math.min(dist * IMPULSE_PER_PIXEL, MAX_IMPULSE_PIXELS * IMPULSE_PER_PIXEL);
          console.log('hit', angle, impulse);
          this.box.applyImpulse(ball.id, angle, impulse);
          state.swingPt = null;
        }
      }
    }
  };

});