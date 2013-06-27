define([
  'dcl',
  'frozen/box2d/entities/Circle',
  'frozen/plugins/loadImage!images/golf_texture.png'
], function(dcl, Circle, ballTexture){

  'use strict';

  return dcl(Circle, {
    id: 'ball',
    img: ballTexture,
    staticBody: false,
    radius: 8,
    linearDamping : 0.5,
    angularDamping : 0.4,
    touching: {},
    draw: function(ctx){
      ctx.lineWidth = 1;
      ctx.fillStyle = '#FFF';
      ctx.strokeStyle = '#000';
      ctx.beginPath();
      ctx.arc(this.x * this.scale, this.y * this.scale, this.radius * this.scale, 0, Math.PI * 2, true);
      ctx.closePath();

      ctx.save();

      ctx.beginPath();
      ctx.arc(this.x * this.scale, this.y * this.scale, this.radius * this.scale, 0, Math.PI * 2, true);
      ctx.closePath();

      ctx.clip();

      ctx.translate(this.x * this.scale, this.y * this.scale);
      ctx.rotate(this.angle);
      ctx.translate(-(this.x) * this.scale, -(this.y) * this.scale);
      ctx.drawImage(this.img, (this.x * this.scale) - 8, (this.y * this.scale) - 8, 16,16);

      ctx.restore();

      ctx.beginPath();
      ctx.arc(this.x * this.scale, this.y * this.scale, this.radius * this.scale, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.stroke();
    }
  });

});
