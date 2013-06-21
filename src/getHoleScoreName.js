define(function(){

  'use strict';

  return function getHoleScoreName(par, strokes){
    if(strokes === 1){
      return 'Hole in one!';
    } else {
      var diff = strokes - par;
      if(diff === -2){
        return 'Eagle';
      }
      else if(diff === -1){
        return 'Birdy';
      }
      else if(diff === 0){
        return 'Par';
      }
      else if(diff === 1){
        return 'Bogey';
      }
      else if(diff === 2){
        return 'Double Bogey';
      }
      else{
        return '+' + diff;
      }
    }
  };

});