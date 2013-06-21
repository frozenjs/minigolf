define(function(){

  'use strict';

  return function rotateVector(vector, radians){
    return {
      x: vector.x * Math.cos(radians) - vector.y * Math.sin(radians),
      y: vector.x * Math.sin(radians) + vector.y * Math.cos(radians)
    };
  };

});