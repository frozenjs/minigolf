define([
  './state',
  './levelData',
  'lodash',
  'frozen/utils/distance',
  'frozen/plugins/loadSound!sounds/clack',
  'frozen/plugins/loadSound!sounds/hole',
  'frozen/plugins/loadSound!sounds/laugh'
], function(state, levelData, _, distance, clack, holeSound, laughSound){

  'use strict';

  var SOUND_IMPULSE_THRESHOLD = 1;
  var SOUND_IMPULSE_MAX = 50;
  var MAX_DISTANCE_FOR_GOAL = 0.4;

  return function(millis){
    var ball = this.entities.ball;
    var ui = this.ui;
    var goal = state.goal;
    var box = this.box;

    if(ball && (this.ui.scoreTime <= 0)){
      if(ball.collisions && ball.collisions.length > 0){
        _.forEach(ball.collisions, function(collision){
          if(collision.impulse > SOUND_IMPULSE_THRESHOLD){
            var gain = Math.min(collision.impulse, SOUND_IMPULSE_MAX) / SOUND_IMPULSE_MAX;
            clack.play(gain, 0);
          }
        });
      }

      var dist = distance(ball, goal);
      if(dist < MAX_DISTANCE_FOR_GOAL){
        var velocity = Math.sqrt(ball.linearVelocity.x * ball.linearVelocity.x + ball.linearVelocity.y * ball.linearVelocity.y);
        console.log('goal', dist, velocity);
        if(velocity < levelData[state.level].maxGoalVelocity){

          ui.setTime('scoreTime');
          ui.totalScore += this.ui.strokes - 3;
          holeSound.play();
          if(ui.strokes > 7){
            laughSound.play();
          }
          box.setPosition(ball.id, goal.x, goal.y);
          box.setLinearVelocity(ball.id, 0, 0);
          box.setAngularVelocity(ball.id, 0);
        } else {
          console.log('too hard', dist, velocity);
          ui.setTime('messageTime');
        }
      } else {
        _.forEach(levelData[state.level].zones, function(zone){
          if(ball && zone.pointInShape(ball)){
            zone.applyImpulse(ball, box);
          }
        });
      }
    }

    ui.update(millis);

    if(ui.changeLevel){
      state.level++;
      this.loadLevel(state.level);
    }
  };

});