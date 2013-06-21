define([
  './state',
  './levelData',
  './getHoleScoreName',
  'dcl',
  'dojo/domReady!'
], function(state, levelData, getHoleScoreName, dcl){

  'use strict';

  var MAX_MESSAGE_TIME = 2500;
  var PAR = 3;

  return dcl(null, {
    scoreEl: null,
    messageEl: null,
    totalScore: 0,
    messageTime: 0,
    scoreTime: 0,
    strokes: 0,
    tooHard: false,
    changeLevel: false,
    constructor: function(){
      this.scoreEl = document.getElementById('score');
      this.messageEl = document.getElementById('message');
      this.holeEl = document.getElementById('hole');
      this.strokeEl = document.getElementById('stroke');
    },
    reset: function(level){
      this.strokes = 0;
      this.changeLevel = false;
      this.tooHard = false;
      this.messageTime = 0;
      this.scoreTime = 0;
      this.holeEl.innerHTML = 'Hole: ' + (level + 1);
      this.strokeEl.innerHTML = 'Stroke: ' + this.strokes;
    },
    update: function(millis){
      if(this.messageTime > 0){
        this.messageTime -= millis;
        this.tooHard = true;
      } else {
        this.tooHard = false;
      }

      if(this.scoreTime > 0){
        this.scoreTime -= millis;
        if(this.scoreTime <= 0){
          this.changeLevel = true;
        }
      }
    },
    draw: function(ctx){
      if(state.level === levelData.length){
        this.totalScore = 0;
        this.scoreEl.innerHTML = '';
      } else {
        this.scoreEl.innerHTML = ' Score: ' + this.totalScore;
      }

      if(this.ballHit){
        this.strokes++;
        this.strokeEl.innerHTML = 'Stroke: ' + this.strokes;
        this.ballHit = false;
      }

      if(this.scoreTime > 0){
        var scoreName = getHoleScoreName(PAR, this.strokes);
        this.message(ctx, scoreName, '#FF0');
      } else {
        if(this.tooHard){
          this.message(ctx, 'Too Hard!', '#F00');
        }
      }
    },
    message: function(ctx, msg, color){
      ctx.fillStyle = color;
      ctx.strokeStyle = '#000';
      ctx.font = 'bold 40px arial';
      ctx.fillText(msg, 180, 180);
      ctx.strokeText(msg, 180, 180);
    },
    setTime: function(time){
      this[time] = MAX_MESSAGE_TIME;
    }
  });

});