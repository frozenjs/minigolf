define([
  'dcl',
  'frozen/utils/distance',
  'frozen/utils/radiansFromCenter',
  'frozen/plugins/loadImage!images/arrowhead.png',
  'frozen/plugins/loadImage!images/arrowmid.png',
  'frozen/plugins/loadImage!images/arrowback.png'
], function(dcl, distance, radiansFromCenter, arrowhead, arrowmid, arrowback){

  'use strict';

  // TODO: DRY up
  var MAX_IMPULSE_PIXELS = 150 * 2;

  // var MIN_TRANSPARENCY = 0.5;
  // var style = 'rgba(255,0,0,' + (impPerc > MIN_TRANSPARENCY ? impPerc : MIN_TRANSPARENCY) + ')';

  return dcl(null, {
    x: 0,
    y: 0,
    impulseLength: 0,
    shouldDraw: false,
    handleInput: function(im){
      if(im.mouseAction.position){
        this.angle = radiansFromCenter(im.mouseAction.startPosition, im.mouseAction.position) + Math.PI;
        this.impulseLength = Math.min(distance(im.mouseAction.startPosition, im.mouseAction.position), MAX_IMPULSE_PIXELS);
        this.shouldDraw = true;
      } else {
        this.shouldDraw = false;
      }
    },
    update: function(ball){
      this.x = ball.x;
      this.y = ball.y;
    },
    draw: function(ctx){
      if(this.shouldDraw){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.translate(-(this.x), -(this.y));
        ctx.drawImage(arrowmid, this.x - (arrowmid.width / 2), this.y + arrowhead.height, arrowmid.width, Math.abs(this.impulseLength));
        ctx.drawImage(arrowback, this.x - (arrowback.width / 2),  this.y + arrowhead.height + this.impulseLength, arrowback.width, arrowback.height);
        ctx.drawImage(arrowhead, this.x - (arrowhead.width / 2), this.y + (arrowhead.height / 2), arrowhead.width, arrowhead.height);
        ctx.restore();
      }
    }
  });

});
