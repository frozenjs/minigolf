define([
  './Ball',
  './state',
  './levelData',
  './zones',
  'lodash',
  'frozen/box2d/entities',
  'frozen/utils/scalePoints',
  'frozen/plugins/loadImage!{0:images/hole1.png,1:images/hole2.png,2:images/hole3.png,3:images/hole4.png,4:images/hole5.png,5:images/hole6.png,6:images/hole7.png,7:images/hole8.png,8:images/hole9.png}'
], function(Ball, state, levelData, zones, _, entities, scalePoints, backImgs){

  'use strict';

  var MAX_VELOCITY_FOR_GOAL = 8;

  _.forEach(levelData, function(level, idx){
    level.zones = [];
    level.backImg = backImgs[idx];
    _.forEach(level.entities, function(obj){
      if(obj.start){
        level.start = {x: obj.x, y: obj.y};
      }
      if(obj.goal){
        level.goal = {x: obj.x, y: obj.y};
      }
    });
  });

  return function loadLevel(levelNum){
    if(levelNum >= levelData.length){
      state.level = levelNum = 0;
    }

    if(levelNum < 0){
      state.level = levelNum = levelData.length - 1;
    }

    var level = levelData[levelNum];
    var self = this;

    this.ui.reset(levelNum);

    level.zones.length = 0;
    level.maxGoalVelocity = level.maxGoalVelocity || MAX_VELOCITY_FOR_GOAL;

    this.removeBodies(_.toArray(this.entities));
    // create our box2d instance
    state.ball = new Ball({
      x: level.start.x,
      y: level.start.y
    });
    this.addBody(state.ball);
    state.goal = scalePoints(level.goal, 1/30);

    _.forEach(level.entities, function(obj){
      console.log(obj);
      if(!obj.zone){
        var Entity = entities[obj.type];
        if(Entity){
          var ent = new Entity(obj);
          ent.id = _.uniqueId();
          self.addBody(ent);
        }
      } else {
        if(!obj.goal && !obj.start){
          var Zone = zones[obj.type];
          if(Zone){
            var zone = new Zone(obj);
            zone.scaleShape(1 / self.box.scale);
            level.zones.push(zone);
          }
        }
      }
    });
  };

});