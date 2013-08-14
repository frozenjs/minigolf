define([
  './levelData',
  'lodash',
  'dojo/has'
], function(levelData, _, has){

  'use strict';

  has.add('debug', function(global){
    return !!global.localStorage.getItem('debug');
  });

  return function(context){
    var ball = this.entities.ball;
    var goal = this.entities.goal;
    var woodbar = this.entities.woodbar;

    context.drawImage(levelData[this.level].backImg, 0, 0, this.width, this.height);

    _.forEach(this.entities, function(entity){
      if(!entity.staticBody || has('debug')){
        entity.draw(context);
      }
    });

    goal.draw(context);
    if(woodbar){
      woodbar.draw(context);
    }
    ball.draw(context);

    this.arrow.draw(context);

    this.ui.draw(context, this.level);
  };

});
