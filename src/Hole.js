define([
  'dcl',
  'dojo/has',
  'frozen/box2d/entities/Circle',
  'frozen/plugins/loadImage!images/hole.png'
], function(dcl, has, Circle, hole){

  'use strict';

  var mainDraw = function(ctx){
    ctx.save();

    ctx.translate(this.x * this.scale, this.y * this.scale);
    ctx.rotate(this.angle);
    ctx.translate(-(this.x) * this.scale, -(this.y) * this.scale);
    ctx.drawImage(this.img, (this.x * this.scale) - 16, (this.y * this.scale) - 16, 32, 32);

    ctx.restore();
  };

  var draw = mainDraw;

  if(has('debug')){
    draw = dcl.superCall(function(sup){
      return function(ctx){
        mainDraw.call(this, ctx);
        sup.call(this, ctx);
      };
    });
  }

  return dcl(Circle, {
    id: 'goal',
    img: hole,
    staticBody: true,
    sensor: true,
    radius: 6,
    draw: draw
  });

});
