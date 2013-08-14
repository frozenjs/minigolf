define([
  './levelData',
  'lodash',
  'frozen/utils/scalePoints',
  'frozen/utils/radiansFromCenter',
  'frozen/plugins/loadSound!sounds/clack',
  'frozen/plugins/loadSound!sounds/hole',
  'frozen/plugins/loadSound!sounds/laugh'
], function(levelData, _, scalePoints, radiansFromCenter, clack, holeSound, laughSound){

  'use strict';

  var SOUND_IMPULSE_THRESHOLD = 1;
  var SOUND_IMPULSE_MAX = 50;
  var MAX_DISTANCE_FOR_GOAL = 0.4;
  var ZONE_IMPULSE = 0.2 * 2;
  var SLOWDOWN_PERCENTAGE = 0.8;

  return function(millis){
    var entities = this.entities;
    var ball = entities.ball;
    var ui = this.ui;
    var arrow = this.arrow;
    var goal = entities.goal;
    var box = this.box;
    var level = levelData[this.level];

    var safe = false;

    if(ball && (this.ui.scoreTime <= 0)){

      _.forEach(ball.touching, function(touched, id){
          if(touched && entities[id].safe){
            safe = true;
          }
      });

      if(ball.collisions && ball.collisions.length > 0){
        _.forEach(ball.collisions, function(collision){
          if(collision.impulse > SOUND_IMPULSE_THRESHOLD){
            var gain = Math.min(collision.impulse, SOUND_IMPULSE_MAX) / SOUND_IMPULSE_MAX;
            clack.play(gain, 0);
          }
        });
      }

      if(ball.touching.goal){
        var velocity = Math.sqrt(ball.linearVelocity.x * ball.linearVelocity.x + ball.linearVelocity.y * ball.linearVelocity.y);
        console.log('goal', velocity);
        if(velocity < level.maxGoalVelocity){

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
          console.log('too hard', velocity);
          ui.setTime('messageTime');
        }
      } else if(!safe){
        _.forEach(ball.touching, function(touched, id){
          if(!touched){
            return;
          }
          var entity = entities[id];
          if(entity.water){
            var start = _.find(level.entities, { id: 'ball' });
            box.setPosition(ball.id, start.x / box.scale, start.y / box.scale);
            box.setLinearVelocity(ball.id, 0, 0);
            box.setAngularVelocity(ball.id, 0);
            ui.setTime('waterTime');
          }else if(entity.sand){
            box.setLinearVelocity(ball.id, ball.linearVelocity.x * SLOWDOWN_PERCENTAGE, ball.linearVelocity.y * SLOWDOWN_PERCENTAGE);
            box.setAngularVelocity(ball.id,  ball.angularVelocity * SLOWDOWN_PERCENTAGE);
          } else if(entity.type === 'Rectangle' || entity.type === 'Polygon'){
            box.applyImpulseDegrees(ball.id, entity.impulseAngle, ZONE_IMPULSE * entity.impulsePercentage);
          } else {
            if(entity.impulseInward){
              box.applyImpulse(ball.id, radiansFromCenter(entity, ball) + Math.PI, ZONE_IMPULSE * entity.impulsePercentage);
            } else {
              box.applyImpulse(ball.id, radiansFromCenter(entity, ball), ZONE_IMPULSE * entity.impulsePercentage);
            }
          }
        });
      }
    }

    arrow.update(scalePoints(ball, ball.scale));

    ui.update(millis);

    if(ui.changeLevel){
      this.level++;
      this.loadLevel(this.level);
    }
  };

});
