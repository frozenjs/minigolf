define([
  'dcl',
  'frozen/box2d/entities/Rectangle',
  'frozen/plugins/loadImage!images/woodbar.png'
], function(dcl, Rectangle, woodbar){

  'use strict';

  return dcl(Rectangle, {
    img: woodbar,
    draw: function(ctx){
      ctx.save();

      ctx.translate(this.x * this.scale, this.y * this.scale);
      ctx.rotate(this.angle);
      ctx.translate(-(this.x) * this.scale, -(this.y) * this.scale);
      ctx.drawImage(
        this.img,
        (this.x - this.halfWidth) * this.scale, (this.y - this.halfHeight) * this.scale,
        (this.halfWidth * 2) * this.scale, (this.halfHeight * 2) * this.scale
      );

      ctx.restore();
    }
  });

});
