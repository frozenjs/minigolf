define([
  'dcl',
  'frozen/box2d/entities/Polygon',
  'frozen/box2d/entities/Rectangle',
  'frozen/box2d/entities/Circle',
  'frozen/utils/radiansFromCenter'
], function(dcl, Polygon, Rectangle, Circle, radiansFromCenter){

  'use strict';

  var ZONE_IMPULSE = 0.2;

  return {
    Rectangle: dcl(Rectangle, {
      impulseAngle: 0,
      impulsePercentage: 1,
      applyImpulse: function(entity, box){
        box.applyImpulseDegrees(entity.id, this.impulseAngle, ZONE_IMPULSE * this.impulsePercentage);
      }
    }),
    Polygon: dcl(Polygon, {
      impulseAngle: 0,
      impulsePercentage: 1,
      applyImpulse: function(entity, box){
        box.applyImpulseDegrees(entity.id, this.impulseAngle, ZONE_IMPULSE * this.impulsePercentage);
      }
    }),
    Circle: dcl(Circle, {
      impulseInward: false,
      impulsePercentage: 1,
      applyImpulse: function(entity, box){
        if(this.impulseInward){
          box.applyImpulse(entity.id, radiansFromCenter(this, entity) + Math.PI, ZONE_IMPULSE * this.impulsePercentage);
        }else{
          box.applyImpulse(entity.id, radiansFromCenter(this, entity), ZONE_IMPULSE * this.impulsePercentage);
        }
      }
    })

  };
});