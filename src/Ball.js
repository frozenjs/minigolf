define([
  'dcl',
  'frozen/box2d/entities/Circle',
  'frozen/plugins/loadImage!images/ball.png'
], function(dcl, Circle, ballTexture){

  'use strict';

  return dcl(Circle, {
    id: 'ball',
    img: ballTexture,
    staticBody: false,
    radius: 11.5,
    linearDamping : 0.5,
    angularDamping : 0.4,
    touching: {},
    draw: function(ctx){
      ctx.save();

      ctx.translate(this.x * this.scale, this.y * this.scale);
      ctx.rotate(this.angle);
      ctx.translate(-(this.x) * this.scale, -(this.y) * this.scale);
      ctx.drawImage(this.img, (this.x - this.radius) * this.scale, (this.y - this.radius) * this.scale, 23, 23);

      ctx.restore();
    }
  });

});
