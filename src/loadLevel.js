define([
  './Ball',
  './Hole',
  './Woodbar',
  './levelData',
  'lodash',
  'frozen/box2d/entities',
  'frozen/box2d/joints',
  'frozen/utils/scalePoints'
], function(Ball, Hole, Woodbar, levelData, _, entities, joints, scalePoints){

  'use strict';

  return function loadLevel(levelNum){
    if(levelNum >= levelData.length){
      this.level = levelNum = 0;
    }

    if(levelNum < 0){
      this.level = levelNum = levelData.length - 1;
    }

    var level = levelData[levelNum];
    var self = this;

    this.ui.reset(levelNum);

    this.removeBodies(_.toArray(this.entities));
    this.removeJoints(_.toArray(this.joints));

    _.forEach(level.entities, function(obj){
      console.log(obj);
      if(obj.id === 'ball'){
        self.addBody(new Ball(obj));
      } else if(obj.id === 'goal'){
        self.addBody(new Hole(obj));
      } else if(obj.id === 'woodbar'){
        self.addBody(new Woodbar(obj));
      } else {
        var Entity = entities[obj.type];
        if(Entity){
          var ent = new Entity(obj);
          self.addBody(ent);
        }
      }
    });

    _.forEach(level.joints, function(obj){
      var Joint = joints[obj.type];
      if(Joint){
        var ent = new Joint(obj);
        self.addJoint(ent);
      }
    });
  };

});