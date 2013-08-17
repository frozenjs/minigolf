define([
  'dojo/has',
  'dojo/keys'
], function(has, keys){

  'use strict';

  return function(im){
    // if(has('debug')){
      im.addKeyAction(keys.RIGHT_ARROW, true);
      im.addKeyAction(keys.LEFT_ARROW, true);
    // }
  };

});
