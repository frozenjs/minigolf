define([
  'dcl',
  './Ball',
  'rave-frozen-loadImage!images/woodball.png'
], function(dcl, Ball, woodball){

  'use strict';

  return dcl(Ball, {
    id: 'woodball',
    img: woodball,
    radius: 12.5,
    touching: {}
  });

});
