define([
  './state',
  './initInput',
  './handleInput',
  './update',
  './draw',
  './loadLevel',
  './UI',
  'dojo/has',
  'frozen/box2d/Box',
  'frozen/box2d/BoxGame'
], function(state, initInput, handleInput, update, draw, loadLevel, UI, has, Box, BoxGame){

  'use strict';

  has.add('debug', function(global){
    return !!global.localStorage.getItem('debug');
  });

  //setup a GameCore instance
  var game = new BoxGame({
    canvasId: 'canvas',
    gameAreaId: 'gameArea',
    canvasPercentage: 0.95,
    box: new Box({
      gravityY: 0,
      gravityX: 0,
      resolveCollisions: true
    }),
    initInput: initInput,
    handleInput: handleInput,
    update: update,
    draw: draw,
    loadLevel: loadLevel,
    ui: new UI()
  });

  //if you want to take a look at the game object in dev tools
  console.log(game);

  game.loadLevel(state.level);

  //launch the game!
  game.run();

});