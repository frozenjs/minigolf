define([
  './initInput',
  './handleInput',
  './update',
  './draw',
  './loadLevel',
  './UI',
  './Arrow',
  'frozen/box2d/Box',
  'frozen/box2d/BoxGame',
  'frozen/box2d/listeners/Contact'
], function(initInput, handleInput, update, draw, loadLevel, UI, Arrow, Box, BoxGame, Contact){

  'use strict';

  var box = new Box({
    gravityX: 0,
    gravityY: 0,
    contactListener: new Contact({
      beginContact: function(idA, idB, contact){
        if(idA !== 'ball' && idB !== 'ball'){
          return;
        }
        var id = idA !== 'ball' ? idA : idB;
        if(game.entities[id].sensor){
          game.entities.ball.touching[id] = true;
        }
      },
      endContact: function(idA, idB, contact){
        if(idA !== 'ball' && idB !== 'ball'){
          return;
        }
        var id = idA !== 'ball' ? idA : idB;
        if(game.entities[id].sensor){
          game.entities.ball.touching[id] = false;
        }
      }
    })
  });

  //setup a GameCore instance
  var game = new BoxGame({
    canvasId: 'canvas',
    gameAreaId: 'gameArea',
    canvasPercentage: 0.95,
    box: box,
    initInput: initInput,
    handleInput: handleInput,
    update: update,
    draw: draw,
    loadLevel: loadLevel,
    ui: new UI(),
    arrow: new Arrow(),
    level: 0
  });

  //if you want to take a look at the game object in dev tools
  console.log(game);

  game.loadLevel(game.level);

  //launch the game!
  game.run();

});
