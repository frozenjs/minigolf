define([
  'lodash',
  'frozen/plugins/loadImage!images/hole1.png',
  'frozen/plugins/loadImage!images/hole2.png',
  'frozen/plugins/loadImage!images/hole3.png',
  'frozen/plugins/loadImage!images/hole4.png',
  'frozen/plugins/loadImage!images/hole5.png',
  'frozen/plugins/loadImage!images/hole6.png',
  'frozen/plugins/loadImage!images/hole7.png',
  'frozen/plugins/loadImage!images/hole8.png',
  'frozen/plugins/loadImage!images/hole9.png',
  'frozen/plugins/loadImage!images/hole10.png',
  'frozen/plugins/loadImage!images/hole11.png',
  'frozen/plugins/loadImage!images/hole12.png',
  'frozen/plugins/loadImage!images/hole13.png',
  'frozen/plugins/loadImage!images/hole14.png',
  'frozen/plugins/loadImage!images/hole15.png',
  'frozen/plugins/loadImage!images/hole16.png',
  'frozen/plugins/loadImage!images/hole17.png',
  'frozen/plugins/loadImage!images/hole18.png',
  'frozen/plugins/loadImage!images/hole19.png',
  'frozen/plugins/loadImage!images/hole20.png',
  'frozen/plugins/loadImage!images/hole21.png',
  'frozen/plugins/loadImage!images/hole22.png'
], function(_){

  'use strict';

  var MAX_VELOCITY_FOR_GOAL = 8;

  var levels = [
    // Level 1
    {
      "entities": [
        {
          "x": 62.5,
          "y": 503,
          "halfWidth": 36.5,
          "halfHeight": 325,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 748,
          "y": 207.5,
          "halfWidth": 733,
          "halfHeight": 41.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1439,
          "y": 496.5,
          "halfWidth": 39,
          "halfHeight": 340.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 746.5,
          "y": 797,
          "halfWidth": 717.5,
          "halfHeight": 47,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 162,
          "y": 338,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1338,
          "y": 663,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 2
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 750,
          "y": 128.5,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 753.5,
          "y": 864,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438.5,
          "y": 505.5,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 595,
          "y": 500,
          "halfWidth": 575,
          "halfHeight": 49.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "points": [
            {
              "x": 131.25,
              "y": -120.5
            },
            {
              "x": 131.25,
              "y": 39.5
            },
            {
              "x": -131.75,
              "y": 40.5
            },
            {
              "x": -135.75,
              "y": 40.5
            }
          ],
          "x": 1279.75,
          "y": 788.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 5
        },
        {
          "points": [
            {
              "x": 88,
              "y": -56
            },
            {
              "x": 88,
              "y": 110
            },
            {
              "x": -190,
              "y": -56
            }
          ],
          "x": 1324.3333333333333,
          "y": 221.66666666666666,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": -20,
              "y": -43
            },
            {
              "x": 9,
              "y": -43
            },
            {
              "x": 17,
              "y": -34
            },
            {
              "x": 17,
              "y": 47
            },
            {
              "x": 10,
              "y": 56
            },
            {
              "x": -20,
              "y": 56
            },
            {
              "x": -20,
              "y": -41
            }
          ],
          "x": 1182.2857142857142,
          "y": 493.42857142857144,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 7
        },
        {
          "x": 162,
          "y": 312.5,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 161,
          "y": 680,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 3
    {
      "entities": [
        {
          "x": 62.5,
          "y": 503,
          "halfWidth": 36.5,
          "halfHeight": 325,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 748,
          "y": 207.5,
          "halfWidth": 733,
          "halfHeight": 41.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1439,
          "y": 496.5,
          "halfWidth": 39,
          "halfHeight": 340.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 746.5,
          "y": 797,
          "halfWidth": 717.5,
          "halfHeight": 47,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 163,
          "y": 501,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1338,
          "y": 501,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 475,
          "y": 500,
          "radius": 124.80785231707178,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 4
        },
        {
          "x": 1025,
          "y": 500,
          "radius": 124.80785231707178,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 5
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 4
    {
      "entities": [
        {
          "x": 62.5,
          "y": 503,
          "halfWidth": 36.5,
          "halfHeight": 325,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 748,
          "y": 207.5,
          "halfWidth": 733,
          "halfHeight": 41.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1439,
          "y": 496.5,
          "halfWidth": 39,
          "halfHeight": 340.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 746.5,
          "y": 797,
          "halfWidth": 717.5,
          "halfHeight": 47,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 162,
          "y": 338,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1338,
          "y": 663,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 837,
          "y": 504,
          "halfWidth": 62,
          "halfHeight": 328,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 4,
          "impulseAngle": 270,
          "impulsePercentage": 1
        },
        {
          "x": 1087,
          "y": 502,
          "halfWidth": 62,
          "halfHeight": 328.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 5,
          "impulseAngle": 90,
          "impulsePercentage": 1
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 5
    {
      "entities": [
        {
          "x": 62.5,
          "y": 503,
          "halfWidth": 36.5,
          "halfHeight": 325,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 748,
          "y": 207.5,
          "halfWidth": 733,
          "halfHeight": 41.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1439,
          "y": 496.5,
          "halfWidth": 39,
          "halfHeight": 340.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 746.5,
          "y": 797,
          "halfWidth": 717.5,
          "halfHeight": 47,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 163,
          "y": 501,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1338,
          "y": 501,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 900,
          "y": 500,
          "radius": 74.62573282722254,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 4
        },
        {
          "x": 746,
          "y": 319,
          "halfWidth": 730,
          "halfHeight": 78,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 5,
          "impulseAngle": 180,
          "impulsePercentage": 1
        },
        {
          "x": 744,
          "y": 725,
          "halfWidth": 734.5,
          "halfHeight": 122,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 6,
          "impulseAngle": 0,
          "impulsePercentage": 1
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 6
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 750,
          "y": 128.5,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 753.5,
          "y": 864,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438.5,
          "y": 505.5,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 388,
          "y": 500,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 170,
          "y": 500,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "points": [
            {
              "x": -28.875,
              "y": -200.875
            },
            {
              "x": 28.125,
              "y": -199.875
            },
            {
              "x": 38.125,
              "y": -189.875
            },
            {
              "x": 38.125,
              "y": 189.125
            },
            {
              "x": 29.125,
              "y": 200.125
            },
            {
              "x": -26.875,
              "y": 200.125
            },
            {
              "x": -38.875,
              "y": 192.125
            },
            {
              "x": -38.875,
              "y": -190.875
            }
          ],
          "x": 287.875,
          "y": 499.875,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 7
        },
        {
          "points": [
            {
              "x": 280,
              "y": -254
            },
            {
              "x": 286,
              "y": 84
            },
            {
              "x": -282,
              "y": 86
            },
            {
              "x": -284,
              "y": 84
            }
          ],
          "x": 1137,
          "y": 744,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 8
        },
        {
          "points": [
            {
              "x": -281.5,
              "y": -85.5
            },
            {
              "x": 281.5,
              "y": -88.5
            },
            {
              "x": 282.5,
              "y": 256.5
            },
            {
              "x": -282.5,
              "y": -82.5
            }
          ],
          "x": 1136.5,
          "y": 254.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 9
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 7
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 752,
          "y": 129,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 754,
          "y": 839,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438.5,
          "y": 505.5,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 338,
          "y": 775,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1348,
          "y": 489,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 751,
          "y": 700,
          "halfWidth": 175,
          "halfHeight": 175,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 750,
          "y": 274,
          "halfWidth": 175,
          "halfHeight": 175,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 336,
          "y": 637,
          "halfWidth": 311,
          "halfHeight": 109,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 6,
          "impulseAngle": 180,
          "impulsePercentage": 0.8
        },
        {
          "x": 337,
          "y": 337.5,
          "halfWidth": 310,
          "halfHeight": 109.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 7,
          "impulseAngle": 0,
          "impulsePercentage": 0.8
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 8
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 750,
          "y": 128.5,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 753.5,
          "y": 864,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438.5,
          "y": 505.5,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 438,
          "y": 213,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 848,
          "y": 406,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "points": [
            {
              "x": -179,
              "y": 90.25
            },
            {
              "x": 181,
              "y": -268.75
            },
            {
              "x": 179,
              "y": 86.25
            },
            {
              "x": -181,
              "y": 92.25
            }
          ],
          "x": 1288,
          "y": 776,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 5
        },
        {
          "points": [
            {
              "x": 117.33333333333326,
              "y": -122.33333333333331
            },
            {
              "x": 124.33333333333326,
              "y": 244.66666666666669
            },
            {
              "x": -241.66666666666674,
              "y": -122.33333333333331
            }
          ],
          "x": 1344,
          "y": 249,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": -117.33333333333326,
              "y": 122.33333333333331
            },
            {
              "x": -124.33333333333326,
              "y": -244.66666666666669
            },
            {
              "x": 241.66666666666674,
              "y": 122.33333333333331
            }
          ],
          "x": 176,
          "y": 771,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 7
        },
        {
          "points": [
            {
              "x": 179,
              "y": -90.25
            },
            {
              "x": -181,
              "y": 268.75
            },
            {
              "x": -179,
              "y": -86.25
            },
            {
              "x": 181,
              "y": -92.25
            }
          ],
          "x": 212,
          "y": 224,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 8
        },
        {
          "points": [
            {
              "x": 73.25,
              "y": -183.25
            },
            {
              "x": 142.25,
              "y": -181.25
            },
            {
              "x": -67.75,
              "y": 169.75
            },
            {
              "x": -147.75,
              "y": 194.75
            }
          ],
          "x": 498.75,
          "y": 355.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 9
        },
        {
          "points": [
            {
              "x": -34,
              "y": -65.79999999999995
            },
            {
              "x": 133,
              "y": 34.200000000000045
            },
            {
              "x": 133,
              "y": 108.20000000000005
            },
            {
              "x": -116,
              "y": -37.799999999999955
            },
            {
              "x": -116,
              "y": -38.799999999999955
            }
          ],
          "x": 467,
          "y": 590.8,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 10
        },
        {
          "points": [
            {
              "x": -134.79999999999995,
              "y": 36.60000000000002
            },
            {
              "x": 163.20000000000005,
              "y": -144.39999999999998
            },
            {
              "x": 239.20000000000005,
              "y": -112.39999999999998
            },
            {
              "x": -132.79999999999995,
              "y": 109.60000000000002
            },
            {
              "x": -134.79999999999995,
              "y": 110.60000000000002
            }
          ],
          "x": 735.8,
          "y": 588.4,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 11
        },
        {
          "points": [
            {
              "x": -37,
              "y": -24
            },
            {
              "x": 37,
              "y": -98
            },
            {
              "x": 38,
              "y": 78
            },
            {
              "x": -38,
              "y": 44
            }
          ],
          "x": 937,
          "y": 399,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 12
        },
        {
          "points": [
            {
              "x": -106.75,
              "y": -39
            },
            {
              "x": 167.25,
              "y": -39
            },
            {
              "x": 93.25,
              "y": 37
            },
            {
              "x": -153.75,
              "y": 37
            }
          ],
          "x": 806.75,
          "y": 339,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 13
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 9
    {
      "entities": [
        {
          "x": 125,
          "y": 638,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1364,
          "y": 398,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 62,
          "y": 441,
          "halfWidth": 37,
          "halfHeight": 392,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 277,
          "y": 88,
          "halfWidth": 251.5,
          "halfHeight": 36,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 962,
          "y": 168,
          "halfWidth": 512,
          "halfHeight": 81,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1441,
          "y": 532.5,
          "halfWidth": 41,
          "halfHeight": 437.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 881.5,
          "y": 925,
          "halfWidth": 598.5,
          "halfHeight": 50,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 208.5,
          "y": 863,
          "halfWidth": 191.5,
          "halfHeight": 112,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "points": [
            {
              "x": 57,
              "y": -36.25
            },
            {
              "x": -18,
              "y": 37.75
            },
            {
              "x": -19,
              "y": 36.75
            },
            {
              "x": -20,
              "y": -38.25
            }
          ],
          "x": 113,
          "y": 143.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": 23,
              "y": -22
            },
            {
              "x": 24,
              "y": 47
            },
            {
              "x": -46,
              "y": -24
            }
          ],
          "x": 433,
          "y": 135,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 7
        },
        {
          "points": [
            {
              "x": -18.25,
              "y": -36.25
            },
            {
              "x": 54.75,
              "y": 36.75
            },
            {
              "x": -17.25,
              "y": 33.75
            },
            {
              "x": -19.25,
              "y": -34.25
            }
          ],
          "x": 404,
          "y": 848,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 8
        },
        {
          "points": [
            {
              "x": 37.75,
              "y": -55.5
            },
            {
              "x": 38.75,
              "y": 17.5
            },
            {
              "x": -40.25,
              "y": 18.5
            }
          ],
          "x": 1376.25,
          "y": 867.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 9
        },
        {
          "points": [
            {
              "x": -107,
              "y": -15
            },
            {
              "x": -82,
              "y": -40
            },
            {
              "x": 119,
              "y": -39
            },
            {
              "x": 143,
              "y": -15
            },
            {
              "x": 143,
              "y": 36
            },
            {
              "x": -107,
              "y": 36
            },
            {
              "x": -107,
              "y": 35
            }
          ],
          "x": 257,
          "y": 215,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 10
        },
        {
          "points": [
            {
              "x": 450,
              "y": -41
            },
            {
              "x": 450,
              "y": 9
            },
            {
              "x": 426,
              "y": 34
            },
            {
              "x": -426,
              "y": 33
            },
            {
              "x": -450,
              "y": 8
            },
            {
              "x": -450,
              "y": -41
            }
          ],
          "x": 900,
          "y": 792,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 12
        },
        {
          "x": 275,
          "y": 457,
          "halfWidth": 98,
          "halfHeight": 342.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "impulseAngle": 90,
          "impulsePercentage": 1
        },
        {
          "x": 862,
          "y": 563,
          "halfWidth": 387,
          "halfHeight": 341.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "impulseAngle": 90,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": 66,
              "y": -68
            },
            {
              "x": 67,
              "y": 134
            },
            {
              "x": -134,
              "y": -68
            }
          ],
          "x": 1183,
          "y": 368,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 15
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    //level 10
    {
      "entities": [
        {
          "x": 661.5,
          "y": 137,
          "halfWidth": 613.5,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 85,
          "y": 499.5,
          "halfWidth": 39,
          "halfHeight": 399.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 660,
          "y": 862.5,
          "halfWidth": 614,
          "halfHeight": 36.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1238,
          "y": 498,
          "halfWidth": 37,
          "halfHeight": 400,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 212.5,
          "y": 262.5,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 775,
          "y": 500,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 775,
          "y": 500,
          "radius": 274.38841083398546,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 4,
          "impulsePercentage": 1,
          "impulseInward": false
        },
        {
          "x": 775,
          "y": 500,
          "radius": 74.46475676452586,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 5,
          "impulseInward": true,
          "impulsePercentage": 1.8
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      },
      "maxGoalVelocity": 11
    },
    //level 11
    {
      "entities": [
        {
          "x": 62.5,
          "y": 503,
          "halfWidth": 36.5,
          "halfHeight": 325,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 748,
          "y": 207.5,
          "halfWidth": 733,
          "halfHeight": 41.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1439,
          "y": 496.5,
          "halfWidth": 39,
          "halfHeight": 340.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 746.5,
          "y": 797,
          "halfWidth": 717.5,
          "halfHeight": 47,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 187,
          "y": 651,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1332,
          "y": 301,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 428,
          "y": 499,
          "halfWidth": 397.5,
          "halfHeight": 50,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 1049.5,
          "y": 500,
          "halfWidth": 74.5,
          "halfHeight": 49,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "points": [
            {
              "x": 56.33333333333326,
              "y": -101
            },
            {
              "x": 55.33333333333326,
              "y": 101
            },
            {
              "x": -111.66666666666674,
              "y": 0
            }
          ],
          "x": 1344.6666666666667,
          "y": 651,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
        },
        {
          "x": 408,
          "y": 348,
          "halfWidth": 313,
          "halfHeight": 101,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 7,
          "water": true
        },
        {
          "points": [
            {
              "x": -39.60000000000002,
              "y": -26.19999999999999
            },
            {
              "x": 35.39999999999998,
              "y": -28.19999999999999
            },
            {
              "x": 35.39999999999998,
              "y": 1.8000000000000114
            },
            {
              "x": 9.399999999999977,
              "y": 26.80000000000001
            },
            {
              "x": -40.60000000000002,
              "y": 25.80000000000001
            }
          ],
          "x": 761,
          "y": 276,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8,
          "water": true
        },
        {
          "points": [
            {
              "x": 23.25,
              "y": -25.5
            },
            {
              "x": 25.25,
              "y": 1.5
            },
            {
              "x": -23.75,
              "y": 49.5
            },
            {
              "x": -24.75,
              "y": -25.5
            }
          ],
          "x": 746,
          "y": 326,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 9,
          "water": true
        },
        {
          "x": 899,
          "y": 500.5,
          "halfWidth": 73,
          "halfHeight": 324.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 10,
          "impulseAngle": 270,
          "impulsePercentage": 0.6
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    //Level 12
    {
      "entities": [
        {
          "x": 699.5,
          "y": 137.5,
          "halfWidth": 649.5,
          "halfHeight": 36.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 699.5,
          "y": 863.5,
          "halfWidth": 650.5,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 85.5,
          "y": 500,
          "halfWidth": 38.5,
          "halfHeight": 400,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1312.5,
          "y": 500,
          "halfWidth": 36.5,
          "halfHeight": 400,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 762.5,
          "y": 499.5,
          "halfWidth": 36.5,
          "halfHeight": 148.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "points": [
            {
              "x": -36.75,
              "y": -38.5
            },
            {
              "x": 39.25,
              "y": -38.5
            },
            {
              "x": 115.25,
              "y": 38.5
            },
            {
              "x": -115.75,
              "y": 39.5
            }
          ],
          "x": 586.75,
          "y": 789.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 5
        },
        {
          "points": [
            {
              "x": 112.75,
              "y": -37.25
            },
            {
              "x": 37.75,
              "y": 37.75
            },
            {
              "x": -37.25,
              "y": 37.75
            },
            {
              "x": -112.75,
              "y": -37.25
            }
          ],
          "x": 588.25,
          "y": 211.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": -15,
              "y": -325
            },
            {
              "x": 209,
              "y": -325
            },
            {
              "x": 209,
              "y": 324
            },
            {
              "x": -17,
              "y": 324
            },
            {
              "x": -192,
              "y": 150
            },
            {
              "x": -192,
              "y": -149
            }
          ],
          "x": 415,
          "y": 500,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 7,
          "impulseAngle": 90,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": -16.714285714285666,
              "y": -279
            },
            {
              "x": 157.28571428571433,
              "y": -104
            },
            {
              "x": 159.28571428571433,
              "y": 196
            },
            {
              "x": -19.714285714285666,
              "y": 373
            },
            {
              "x": -92.71428571428567,
              "y": 373
            },
            {
              "x": -93.71428571428567,
              "y": -279
            },
            {
              "x": -93.71428571428567,
              "y": -280
            }
          ],
          "x": 818.7142857142857,
          "y": 454,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8,
          "impulseAngle": 90,
          "impulsePercentage": 1
        },
        {
          "x": 1188,
          "y": 738,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 173,
          "y": 500,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 13
    {
      "entities": [
        {
          "x": 187,
          "y": 576,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1335,
          "y": 576,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 488.5,
          "y": 463.5,
          "halfWidth": 460.5,
          "halfHeight": 35.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 62.5,
          "y": 575,
          "halfWidth": 36.5,
          "halfHeight": 150,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 488,
          "y": 688.5,
          "halfWidth": 462,
          "halfHeight": 38.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1061,
          "y": 762.5,
          "halfWidth": 188,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 1324,
          "y": 688,
          "halfWidth": 148,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 1438.5,
          "y": 576,
          "halfWidth": 37.5,
          "halfHeight": 150,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 1325,
          "y": 462.5,
          "halfWidth": 150,
          "halfHeight": 36.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 6
        },
        {
          "x": 1212,
          "y": 349,
          "halfWidth": 37,
          "halfHeight": 150,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 7
        },
        {
          "x": 1063,
          "y": 236.5,
          "halfWidth": 188,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 8
        },
        {
          "x": 911,
          "y": 348.5,
          "halfWidth": 38,
          "halfHeight": 150.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 9
        },
        {
          "x": 1065,
          "y": 575,
          "halfWidth": 25,
          "halfHeight": 130,
          "staticBody": false,
          "sensor": false,
          "type": "Rectangle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "woodbar"
        },
        {
          "x": 1065,
          "y": 575,
          "radius": 9,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": "pin"
        }
      ],
      "joints": [
        {
          "bodyId1": "pin",
          "bodyId2": "woodbar",
          "type": "Revolute",
          "id": "hj",
          "jointAttributes": {
            "motorSpeed": 4,
            "enableMotor": true,
            "maxMotorTorque": 3500
          }
        }
      ],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    //Level 14
    {
      "entities": [
        {
          "x": 211.5,
          "y": 499,
          "halfWidth": 37.5,
          "halfHeight": 401,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 751,
          "y": 136.5,
          "halfWidth": 576,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1289.5,
          "y": 500.5,
          "halfWidth": 38.5,
          "halfHeight": 398.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 747.5,
          "y": 864,
          "halfWidth": 573.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 538,
          "y": 824.5,
          "halfWidth": 37,
          "halfHeight": 74.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 1038,
          "y": 825,
          "halfWidth": 37,
          "halfHeight": 74.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 813,
          "y": 162,
          "halfWidth": 62,
          "halfHeight": 62,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 6
        },
        {
          "points": [
            {
              "x": 16,
              "y": -16
            },
            {
              "x": 16,
              "y": 36
            },
            {
              "x": -36,
              "y": -16
            }
          ],
          "x": 860,
          "y": 240,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 7
        },
        {
          "x": 788.5,
          "y": 788,
          "halfWidth": 212.5,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8,
          "impulseAngle": 0,
          "impulsePercentage": 0.5
        },
        {
          "x": 501,
          "y": 195,
          "halfWidth": 250,
          "halfHeight": 25.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 9,
          "water": true
        },
        {
          "points": [
            {
              "x": -235,
              "y": -9
            },
            {
              "x": 166,
              "y": -13
            },
            {
              "x": 167,
              "y": -11
            },
            {
              "x": 138,
              "y": 15
            },
            {
              "x": -237,
              "y": 19
            }
          ],
          "x": 490,
          "y": 229,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 10,
          "water": true
        },
        {
          "x": 274,
          "y": 441,
          "halfWidth": 20,
          "halfHeight": 263,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 11,
          "water": true
        },
        {
          "x": 306,
          "y": 631,
          "halfWidth": 14,
          "halfHeight": 109,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 12,
          "water": true
        },
        {
          "x": 345,
          "y": 710.5,
          "halfWidth": 24,
          "halfHeight": 84.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "water": true
        },
        {
          "x": 383,
          "y": 749,
          "halfWidth": 11,
          "halfHeight": 74,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "water": true
        },
        {
          "x": 425.5,
          "y": 777,
          "halfWidth": 28.5,
          "halfHeight": 45,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "water": true
        },
        {
          "x": 470.5,
          "y": 790.5,
          "halfWidth": 23.5,
          "halfHeight": 34,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16,
          "water": true
        },
        {
          "points": [
            {
              "x": -9,
              "y": 15
            },
            {
              "x": -6,
              "y": -17
            },
            {
              "x": 23,
              "y": -16
            },
            {
              "x": -9,
              "y": 18
            }
          ],
          "x": 302,
          "y": 261,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17,
          "water": true
        },
        {
          "points": [
            {
              "x": 13,
              "y": -12
            },
            {
              "x": 11,
              "y": 11
            },
            {
              "x": -12,
              "y": 36
            },
            {
              "x": -12,
              "y": -34
            }
          ],
          "x": 307,
          "y": 338,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18,
          "water": true
        },
        {
          "points": [
            {
              "x": 19,
              "y": 11
            },
            {
              "x": -6,
              "y": 12
            },
            {
              "x": -7,
              "y": -11
            },
            {
              "x": -7,
              "y": -12
            }
          ],
          "x": 300,
          "y": 512,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 19,
          "water": true
        },
        {
          "points": [
            {
              "x": -15,
              "y": -31
            },
            {
              "x": 32,
              "y": 15
            },
            {
              "x": -16,
              "y": 17
            }
          ],
          "x": 337,
          "y": 610,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 20,
          "water": true
        },
        {
          "points": [
            {
              "x": 11,
              "y": 3
            },
            {
              "x": -4,
              "y": 11
            },
            {
              "x": -7,
              "y": -15
            }
          ],
          "x": 380,
          "y": 670,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 21,
          "water": true
        },
        {
          "points": [
            {
              "x": 17,
              "y": 8
            },
            {
              "x": -7,
              "y": 10
            },
            {
              "x": -9,
              "y": -18
            }
          ],
          "x": 405,
          "y": 722,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 22,
          "water": true
        },
        {
          "points": [
            {
              "x": -5,
              "y": -13
            },
            {
              "x": 17,
              "y": 9
            },
            {
              "x": -5,
              "y": 17
            },
            {
              "x": -6,
              "y": -13
            }
          ],
          "x": 459,
          "y": 747,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 23,
          "water": true
        },
        {
          "x": 729.5,
          "y": 443,
          "halfWidth": 73.5,
          "halfHeight": 136,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 24,
          "water": true
        },
        {
          "x": 776.5,
          "y": 489,
          "halfWidth": 94.5,
          "halfHeight": 114,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 25,
          "water": true
        },
        {
          "x": 774,
          "y": 625,
          "halfWidth": 27,
          "halfHeight": 45,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 26,
          "water": true
        },
        {
          "x": 863,
          "y": 524,
          "halfWidth": 57,
          "halfHeight": 26,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 27,
          "water": true
        },
        {
          "x": 642.5,
          "y": 389,
          "halfWidth": 36.5,
          "halfHeight": 65,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 28,
          "water": true
        },
        {
          "x": 637,
          "y": 350.5,
          "halfWidth": 54,
          "halfHeight": 18.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 29,
          "water": true
        },
        {
          "points": [
            {
              "x": -15,
              "y": -12
            },
            {
              "x": 35,
              "y": -13
            },
            {
              "x": 37,
              "y": 12
            },
            {
              "x": -28,
              "y": 7
            },
            {
              "x": -30,
              "y": 6
            }
          ],
          "x": 640,
          "y": 320,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 30,
          "water": true
        },
        {
          "points": [
            {
              "x": -26,
              "y": -11
            },
            {
              "x": 27,
              "y": -13
            },
            {
              "x": 46,
              "y": 11
            },
            {
              "x": -46,
              "y": 14
            }
          ],
          "x": 725,
          "y": 293,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 31,
          "water": true
        },
        {
          "points": [
            {
              "x": -18,
              "y": -34
            },
            {
              "x": 49,
              "y": 32
            },
            {
              "x": -12,
              "y": 34
            },
            {
              "x": -19,
              "y": -33
            }
          ],
          "x": 821,
          "y": 343,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 32,
          "water": true
        },
        {
          "points": [
            {
              "x": -10,
              "y": -39
            },
            {
              "x": 13,
              "y": -17
            },
            {
              "x": 12,
              "y": 28
            },
            {
              "x": -14,
              "y": 28
            }
          ],
          "x": 883,
          "y": 467,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 33,
          "water": true
        },
        {
          "points": [
            {
              "x": -3,
              "y": -18
            },
            {
              "x": 23,
              "y": 8
            },
            {
              "x": -21,
              "y": 10
            }
          ],
          "x": 896,
          "y": 491,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 34,
          "water": true
        },
        {
          "points": [
            {
              "x": -24,
              "y": -11
            },
            {
              "x": 24,
              "y": -13
            },
            {
              "x": 25,
              "y": -13
            },
            {
              "x": -24,
              "y": 38
            }
          ],
          "x": 894,
          "y": 563,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 35,
          "water": true
        },
        {
          "points": [
            {
              "x": 32,
              "y": -18
            },
            {
              "x": 33,
              "y": -15
            },
            {
              "x": -32,
              "y": 48
            },
            {
              "x": -33,
              "y": -15
            }
          ],
          "x": 834,
          "y": 619,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 36,
          "water": true
        },
        {
          "points": [
            {
              "x": 15,
              "y": -30
            },
            {
              "x": 17,
              "y": 30
            },
            {
              "x": 16,
              "y": 33
            },
            {
              "x": -48,
              "y": -33
            }
          ],
          "x": 732,
          "y": 637,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 37,
          "water": true
        },
        {
          "points": [
            {
              "x": -14,
              "y": -7
            },
            {
              "x": 14,
              "y": -5
            },
            {
              "x": 14,
              "y": 17
            },
            {
              "x": -15,
              "y": -6
            }
          ],
          "x": 672,
          "y": 585,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 38,
          "water": true
        },
        {
          "points": [
            {
              "x": -16,
              "y": -38
            },
            {
              "x": 12,
              "y": -39
            },
            {
              "x": 12,
              "y": 32
            },
            {
              "x": 10,
              "y": 33
            },
            {
              "x": -18,
              "y": 10
            }
          ],
          "x": 647,
          "y": 493,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 39,
          "water": true
        },
        {
          "points": [
            {
              "x": -12,
              "y": -7
            },
            {
              "x": 14,
              "y": -4
            },
            {
              "x": 12,
              "y": 18
            },
            {
              "x": -15,
              "y": -6
            }
          ],
          "x": 620,
          "y": 459,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 40,
          "water": true
        },
        {
          "points": [
            {
              "x": -70,
              "y": 24
            },
            {
              "x": -68,
              "y": 21
            },
            {
              "x": 104,
              "y": -150
            },
            {
              "x": 103,
              "y": 45
            },
            {
              "x": -70,
              "y": 45
            }
          ],
          "x": 1147,
          "y": 778,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 41,
          "water": true
        },
        {
          "points": [
            {
              "x": 22,
              "y": -38
            },
            {
              "x": 27,
              "y": -3
            },
            {
              "x": -24,
              "y": 34
            },
            {
              "x": -24,
              "y": 8
            }
          ],
          "x": 1230,
          "y": 642,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 42,
          "water": true
        },
        {
          "points": [
            {
              "x": -15,
              "y": -100
            },
            {
              "x": 34,
              "y": -51
            },
            {
              "x": 36,
              "y": 93
            },
            {
              "x": 35,
              "y": 93
            },
            {
              "x": -88,
              "y": -34
            }
          ],
          "x": 1214,
          "y": 354,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 43,
          "water": true
        },
        {
          "points": [
            {
              "x": -87,
              "y": -65
            },
            {
              "x": 110,
              "y": -17
            },
            {
              "x": 109,
              "y": -16
            },
            {
              "x": 37,
              "y": 47
            },
            {
              "x": -168,
              "y": 50
            }
          ],
          "x": 1091,
          "y": 270,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 44,
          "water": true
        },
        {
          "points": [
            {
              "x": 45,
              "y": -53
            },
            {
              "x": 72,
              "y": -27
            },
            {
              "x": -9,
              "y": 89
            },
            {
              "x": -54,
              "y": 45
            },
            {
              "x": -56,
              "y": -53
            }
          ],
          "x": 934,
          "y": 230,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 45,
          "water": true
        },
        {
          "x": 387,
          "y": 337,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1184,
          "y": 520,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    //Level 15
    {
      "entities": [
        {
          "x": 737,
          "y": 251,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 737,
          "y": 759,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 734,
          "y": 136.5,
          "halfWidth": 511,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 261.5,
          "y": 500,
          "halfWidth": 37.5,
          "halfHeight": 401,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1213,
          "y": 499.5,
          "halfWidth": 37,
          "halfHeight": 400.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 737,
          "y": 865,
          "halfWidth": 513,
          "halfHeight": 39,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 737.5,
          "y": 500,
          "halfWidth": 512.5,
          "halfHeight": 174,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 4,
          "impulseAngle": 180,
          "impulsePercentage": 0.6
        },
        {
          "x": 387.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 5,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 487.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 6,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 587.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 7,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 687.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 8,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 787.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 9,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 887.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 10,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 987.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 11,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 1087.5,
          "y": 387.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 12,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 437.5,
          "y": 437.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 13,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 537.5,
          "y": 437.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 14,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 637.5,
          "y": 437.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 15,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 737.5,
          "y": 437.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 16,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 837.5,
          "y": 437.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 17,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 937.5,
          "y": 437.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 18,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 1037.5,
          "y": 437.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 19,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 387.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 20,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 487.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 21,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 587.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 22,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 687.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 23,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 787.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 24,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 887.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 25,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 987.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 26,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 1087.5,
          "y": 487.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 27,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 437.5,
          "y": 537.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 28,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 537.5,
          "y": 537.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 29,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 637.5,
          "y": 537.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 30,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 737.5,
          "y": 537.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 31,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 837.5,
          "y": 537.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 32,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 937.5,
          "y": 537.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 33,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 1037.5,
          "y": 537.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 34,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 387.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 35,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 487.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 36,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 587.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 37,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 687.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 38,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 787.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 39,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 887.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 40,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 987.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 41,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 1087.5,
          "y": 587.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 42,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 437.5,
          "y": 637.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 43,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 537.5,
          "y": 637.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 44,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 637.5,
          "y": 637.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 45,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 737.5,
          "y": 637.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 46,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 837.5,
          "y": 637.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 47,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 937.5,
          "y": 637.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 48,
          "density": 1,
          "restitution": 0.75
        },
        {
          "x": 1037.5,
          "y": 637.5,
          "radius": 12,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": 49,
          "density": 1,
          "restitution": 0.75
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    //Level 16
    {
      "entities": [
        {
          "x": 313,
          "y": 537,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1198,
          "y": 352,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 162,
          "y": 501,
          "halfWidth": 37,
          "halfHeight": 224,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 462,
          "y": 312.5,
          "halfWidth": 337,
          "halfHeight": 36.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 625,
          "y": 387,
          "halfWidth": 99,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 761.5,
          "y": 262,
          "halfWidth": 37.5,
          "halfHeight": 86,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 1099,
          "y": 213,
          "halfWidth": 376,
          "halfHeight": 36,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 1437.5,
          "y": 500.5,
          "halfWidth": 36.5,
          "halfHeight": 323.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 987.5,
          "y": 788.5,
          "halfWidth": 486.5,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 6
        },
        {
          "x": 350,
          "y": 688.5,
          "halfWidth": 224,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 7
        },
        {
          "x": 537.5,
          "y": 675,
          "halfWidth": 36.5,
          "halfHeight": 149,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 8
        },
        {
          "x": 612,
          "y": 550,
          "halfWidth": 37,
          "halfHeight": 74,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 9
        },
        {
          "points": [
            {
              "x": -17.5,
              "y": -105
            },
            {
              "x": 32.5,
              "y": -55
            },
            {
              "x": 33.5,
              "y": -53
            },
            {
              "x": 33.5,
              "y": 124
            },
            {
              "x": -40.5,
              "y": 196
            },
            {
              "x": -41.5,
              "y": -105
            }
          ],
          "x": 240.5,
          "y": 454,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 10,
          "impulseAngle": 90,
          "impulsePercentage": 0.8
        },
        {
          "points": [
            {
              "x": -87,
              "y": -34
            },
            {
              "x": 65,
              "y": -34
            },
            {
              "x": 90,
              "y": -11
            },
            {
              "x": 90,
              "y": 39
            },
            {
              "x": -160,
              "y": 39
            }
          ],
          "x": 360,
          "y": 612,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 11,
          "impulseAngle": 0,
          "impulsePercentage": 0.8
        },
        {
          "points": [
            {
              "x": 138.5,
              "y": -24.5
            },
            {
              "x": 138.5,
              "y": 23
            },
            {
              "x": -114,
              "y": 23
            },
            {
              "x": -162,
              "y": -24.5
            }
          ],
          "x": 387.5,
          "y": 374.5,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 12,
          "impulseAngle": 180,
          "impulsePercentage": 0.5
        },
        {
          "points": [
            {
              "x": 15,
              "y": -62
            },
            {
              "x": 15,
              "y": 64
            },
            {
              "x": -9,
              "y": 42
            },
            {
              "x": -10,
              "y": 40
            },
            {
              "x": -10,
              "y": -85
            }
          ],
          "x": 435,
          "y": 537,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "impulseAngle": 270,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 4,
              "y": -24
            },
            {
              "x": 29,
              "y": 0
            },
            {
              "x": 5,
              "y": 23
            },
            {
              "x": -19,
              "y": 1
            },
            {
              "x": -20,
              "y": 0
            }
          ],
          "x": 445,
          "y": 451,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "impulseAngle": 315,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 25,
              "y": -8
            },
            {
              "x": 25,
              "y": 14
            },
            {
              "x": -1,
              "y": 14
            },
            {
              "x": -24,
              "y": -10
            }
          ],
          "x": 475,
          "y": 437,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "impulseAngle": 0,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 12,
              "y": -24.25
            },
            {
              "x": 13,
              "y": -2.25
            },
            {
              "x": -12,
              "y": 23.75
            },
            {
              "x": -13,
              "y": 2.75
            }
          ],
          "x": 513,
          "y": 426.25,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16,
          "impulseAngle": 315,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 101.5,
              "y": -23
            },
            {
              "x": 148.5,
              "y": 24
            },
            {
              "x": -125.5,
              "y": 23
            },
            {
              "x": -125.5,
              "y": -24
            }
          ],
          "x": 773.5,
          "y": 525,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17,
          "impulseAngle": 180,
          "impulsePercentage": 0.8
        },
        {
          "points": [
            {
              "x": -23,
              "y": -39
            },
            {
              "x": 23,
              "y": -84
            },
            {
              "x": 23,
              "y": 84
            },
            {
              "x": -23,
              "y": 39
            }
          ],
          "x": 899.75,
          "y": 464.25,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18,
          "impulseAngle": 90,
          "impulsePercentage": 0.8
        },
        {
          "points": [
            {
              "x": -71,
              "y": -18
            },
            {
              "x": 129,
              "y": -18
            },
            {
              "x": 83,
              "y": 26
            },
            {
              "x": -71,
              "y": 26
            }
          ],
          "x": 794,
          "y": 397,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 19,
          "impulseAngle": 0,
          "impulsePercentage": 0.8
        },
        {
          "points": [
            {
              "x": -276.5,
              "y": -36.25
            },
            {
              "x": 276.5,
              "y": -37.25
            },
            {
              "x": 350.5,
              "y": 36.75
            },
            {
              "x": -350.5,
              "y": 36.75
            }
          ],
          "x": 1000.5,
          "y": 715.25,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 20,
          "impulseAngle": 0,
          "impulsePercentage": 0.8
        },
        {
          "points": [
            {
              "x": -64,
              "y": -248
            },
            {
              "x": 59,
              "y": -297
            },
            {
              "x": 59,
              "y": 205
            },
            {
              "x": 9,
              "y": 206
            },
            {
              "x": -64,
              "y": 132
            }
          ],
          "x": 1342,
          "y": 547,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 21,
          "impulseAngle": 270,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": -185,
              "y": -20
            },
            {
              "x": 315,
              "y": -20
            },
            {
              "x": 192,
              "y": 29
            },
            {
              "x": -135,
              "y": 29
            }
          ],
          "x": 1086,
          "y": 270,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 22,
          "impulseAngle": 180,
          "impulsePercentage": 0.8
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 17
    {
      "entities": [
        {
          "x": 587,
          "y": 488,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 921,
          "y": 513,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 511.5,
          "y": 487.5,
          "halfWidth": 37.5,
          "halfHeight": 112.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 625.5,
          "y": 412.5,
          "halfWidth": 150.5,
          "halfHeight": 36.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 900.5,
          "y": 438.5,
          "halfWidth": 149.5,
          "halfHeight": 35.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1012.5,
          "y": 512.5,
          "halfWidth": 36.5,
          "halfHeight": 111.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 587.5,
          "y": 563.5,
          "halfWidth": 112.5,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 863.5,
          "y": 588,
          "halfWidth": 185.5,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "points": [
            {
              "x": 14,
              "y": 7
            },
            {
              "x": -14,
              "y": 7
            },
            {
              "x": -14,
              "y": -21
            }
          ],
          "x": 561,
          "y": 519,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": -7,
              "y": -14
            },
            {
              "x": 20,
              "y": -14
            },
            {
              "x": -7,
              "y": 14
            }
          ],
          "x": 556,
          "y": 463,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 7
        },
        {
          "points": [
            {
              "x": -8,
              "y": -17
            },
            {
              "x": 17,
              "y": 8
            },
            {
              "x": -9,
              "y": 9
            }
          ],
          "x": 708,
          "y": 543,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 8
        },
        {
          "points": [
            {
              "x": -13,
              "y": -6
            },
            {
              "x": 13,
              "y": -6
            },
            {
              "x": 13,
              "y": 19
            }
          ],
          "x": 738,
          "y": 455.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 9
        },
        {
          "points": [
            {
              "x": -14,
              "y": 7
            },
            {
              "x": 14,
              "y": -20
            },
            {
              "x": 14,
              "y": 7
            }
          ],
          "x": 963,
          "y": 544,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 10
        },
        {
          "points": [
            {
              "x": 9,
              "y": -9
            },
            {
              "x": 9,
              "y": 18
            },
            {
              "x": -18,
              "y": -9
            }
          ],
          "x": 967,
          "y": 484,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 11
        },
        {
          "x": 712,
          "y": 503.5,
          "halfWidth": 11,
          "halfHeight": 74.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "sand": true
        },
        {
          "x": 787.5,
          "y": 507,
          "halfWidth": 10.5,
          "halfHeight": 76,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "sand": true
        },
        {
          "x": 862.5,
          "y": 507.5,
          "halfWidth": 10.5,
          "halfHeight": 74.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "sand": true
        },
        {
          "x": 662,
          "y": 494,
          "halfWidth": 37,
          "halfHeight": 51,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16,
          "impulseAngle": 90,
          "impulsePercentage": 0.4
        },
        {
          "x": 750.5,
          "y": 507.5,
          "halfWidth": 25.5,
          "halfHeight": 75.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17,
          "impulseAngle": 90,
          "impulsePercentage": 0.4
        },
        {
          "x": 825,
          "y": 507,
          "halfWidth": 25.5,
          "halfHeight": 75,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18,
          "impulseAngle": 90,
          "impulsePercentage": 0.4
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 18
    {
      "entities": [
        {
          "x": 163,
          "y": 462,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1321,
          "y": 399,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 61.5,
          "y": 500,
          "halfWidth": 37.5,
          "halfHeight": 325,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 751,
          "y": 212.5,
          "halfWidth": 726,
          "halfHeight": 36.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 1439,
          "y": 501.5,
          "halfWidth": 38,
          "halfHeight": 323.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 751.5,
          "y": 788.5,
          "halfWidth": 725.5,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 450,
          "y": 713.5,
          "halfWidth": 224,
          "halfHeight": 37.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 1112.5,
          "y": 287.5,
          "halfWidth": 186.5,
          "halfHeight": 36.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 162,
          "y": 728.5,
          "halfWidth": 63,
          "halfHeight": 21.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 6,
          "water": true
        },
        {
          "points": [
            {
              "x": -15,
              "y": -10
            },
            {
              "x": 12,
              "y": -10
            },
            {
              "x": 32,
              "y": 15
            },
            {
              "x": -16,
              "y": 15
            },
            {
              "x": -16,
              "y": -10
            }
          ],
          "x": 116,
          "y": 692,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 7,
          "water": true
        },
        {
          "x": 574,
          "y": 271.5,
          "halfWidth": 350,
          "halfHeight": 21.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8,
          "water": true
        },
        {
          "x": 612,
          "y": 319,
          "halfWidth": 312,
          "halfHeight": 25,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 9,
          "water": true
        },
        {
          "x": 634,
          "y": 355.5,
          "halfWidth": 284,
          "halfHeight": 13.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 10,
          "water": true
        },
        {
          "x": 648.5,
          "y": 382,
          "halfWidth": 248.5,
          "halfHeight": 12,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 11,
          "water": true
        },
        {
          "x": 660,
          "y": 406,
          "halfWidth": 211,
          "halfHeight": 12.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 12,
          "water": true
        },
        {
          "x": 674.5,
          "y": 431.5,
          "halfWidth": 174.5,
          "halfHeight": 11.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "water": true
        },
        {
          "x": 675.5,
          "y": 456.5,
          "halfWidth": 124.5,
          "halfHeight": 11.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "water": true
        },
        {
          "x": 700,
          "y": 479,
          "halfWidth": 77,
          "halfHeight": 13.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "water": true
        },
        {
          "points": [
            {
              "x": -22,
              "y": -12
            },
            {
              "x": 22,
              "y": -10
            },
            {
              "x": 22,
              "y": 33
            },
            {
              "x": -23,
              "y": -12
            }
          ],
          "x": 203,
          "y": 261,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16,
          "water": true
        },
        {
          "points": [
            {
              "x": 17,
              "y": -17
            },
            {
              "x": 16,
              "y": 34
            },
            {
              "x": -33,
              "y": -16
            }
          ],
          "x": 283,
          "y": 310,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17,
          "water": true
        },
        {
          "points": [
            {
              "x": -12,
              "y": -7
            },
            {
              "x": 12,
              "y": -7
            },
            {
              "x": 11,
              "y": 19
            }
          ],
          "x": 339,
          "y": 351,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18,
          "water": true
        },
        {
          "points": [
            {
              "x": -12,
              "y": -7
            },
            {
              "x": 12,
              "y": -7
            },
            {
              "x": 11,
              "y": 19
            }
          ],
          "x": 389,
          "y": 376,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 19,
          "water": true
        },
        {
          "points": [
            {
              "x": 8,
              "y": -7
            },
            {
              "x": 7,
              "y": 15
            },
            {
              "x": -16,
              "y": -7
            }
          ],
          "x": 442,
          "y": 402,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 20,
          "water": true
        },
        {
          "points": [
            {
              "x": 8,
              "y": -8
            },
            {
              "x": 8,
              "y": 16
            },
            {
              "x": -15,
              "y": -8
            }
          ],
          "x": 492,
          "y": 427,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 21,
          "water": true
        },
        {
          "points": [
            {
              "x": 8,
              "y": -8
            },
            {
              "x": 8,
              "y": 16
            },
            {
              "x": -15,
              "y": -8
            }
          ],
          "x": 543,
          "y": 452,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 22,
          "water": true
        },
        {
          "points": [
            {
              "x": -11,
              "y": -7
            },
            {
              "x": 11,
              "y": -5
            },
            {
              "x": 11,
              "y": 18
            },
            {
              "x": -11,
              "y": -6
            }
          ],
          "x": 613,
          "y": 474,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 23,
          "water": true
        },
        {
          "points": [
            {
              "x": -7,
              "y": -8
            },
            {
              "x": 16,
              "y": -9
            },
            {
              "x": -8,
              "y": 17
            }
          ],
          "x": 784,
          "y": 478,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 24,
          "water": true
        },
        {
          "points": [
            {
              "x": -6,
              "y": -12
            },
            {
              "x": 19,
              "y": -13
            },
            {
              "x": -7,
              "y": 14
            }
          ],
          "x": 807,
          "y": 456,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 25,
          "water": true
        },
        {
          "points": [
            {
              "x": 15,
              "y": -8
            },
            {
              "x": -8,
              "y": 15
            },
            {
              "x": -8,
              "y": -7
            }
          ],
          "x": 857,
          "y": 428,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 26,
          "water": true
        },
        {
          "points": [
            {
              "x": 17,
              "y": -9
            },
            {
              "x": -9,
              "y": 17
            },
            {
              "x": -9,
              "y": -9
            }
          ],
          "x": 880,
          "y": 404,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 27,
          "water": true
        },
        {
          "points": [
            {
              "x": -5,
              "y": -12
            },
            {
              "x": 15,
              "y": -13
            },
            {
              "x": -5,
              "y": 12
            }
          ],
          "x": 903,
          "y": 382,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 28,
          "water": true
        },
        {
          "points": [
            {
              "x": -7,
              "y": -6
            },
            {
              "x": 15,
              "y": -5
            },
            {
              "x": -7,
              "y": 12
            }
          ],
          "x": 931,
          "y": 331,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 29,
          "water": true
        },
        {
          "x": 1049,
          "y": 741,
          "halfWidth": 350.5,
          "halfHeight": 9,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 30,
          "water": true
        },
        {
          "x": 964,
          "y": 719,
          "halfWidth": 214,
          "halfHeight": 12,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 31,
          "water": true
        },
        {
          "x": 963,
          "y": 694,
          "halfWidth": 162.5,
          "halfHeight": 12,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 32,
          "water": true
        },
        {
          "points": [
            {
              "x": 3,
              "y": -62
            },
            {
              "x": 54,
              "y": -61
            },
            {
              "x": 63,
              "y": 61
            },
            {
              "x": -120,
              "y": 62
            }
          ],
          "x": 947,
          "y": 619,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 33,
          "water": true
        },
        {
          "points": [
            {
              "x": -20,
              "y": -61
            },
            {
              "x": 48,
              "y": 7
            },
            {
              "x": 50,
              "y": 38
            },
            {
              "x": 48,
              "y": 41
            },
            {
              "x": -60,
              "y": 36
            },
            {
              "x": -66,
              "y": -60
            }
          ],
          "x": 1070,
          "y": 643,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 34,
          "water": true
        },
        {
          "points": [
            {
              "x": -5,
              "y": -12
            },
            {
              "x": 16,
              "y": 11
            },
            {
              "x": -5,
              "y": 14
            }
          ],
          "x": 1008,
          "y": 572,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 35,
          "water": true
        },
        {
          "points": [
            {
              "x": 9,
              "y": -14
            },
            {
              "x": 10,
              "y": 5
            },
            {
              "x": -10,
              "y": 5
            }
          ],
          "x": 690,
          "y": 747,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 36,
          "water": true
        },
        {
          "points": [
            {
              "x": 11,
              "y": -18
            },
            {
              "x": 11,
              "y": 5
            },
            {
              "x": -10,
              "y": 7
            }
          ],
          "x": 739,
          "y": 727,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 37,
          "water": true
        },
        {
          "points": [
            {
              "x": 8,
              "y": -17
            },
            {
              "x": 8,
              "y": 8
            },
            {
              "x": -17,
              "y": 8
            }
          ],
          "x": 793,
          "y": 700,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 38,
          "water": true
        },
        {
          "points": [
            {
              "x": -6,
              "y": -14
            },
            {
              "x": 18,
              "y": 13
            },
            {
              "x": -5,
              "y": 13
            }
          ],
          "x": 1131,
          "y": 695,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 39,
          "water": true
        },
        {
          "points": [
            {
              "x": -6,
              "y": -10
            },
            {
              "x": -4,
              "y": -12
            },
            {
              "x": 16,
              "y": 10
            },
            {
              "x": -6,
              "y": 11
            }
          ],
          "x": 1184,
          "y": 722,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 40,
          "water": true
        },
        {
          "points": [
            {
              "x": 17,
              "y": -32
            },
            {
              "x": 17,
              "y": 17
            },
            {
              "x": -32,
              "y": 17
            }
          ],
          "x": 1384,
          "y": 689,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 41,
          "water": true
        },
        {
          "points": [
            {
              "x": -21,
              "y": -15
            },
            {
              "x": 54,
              "y": -16
            },
            {
              "x": 54,
              "y": 11
            },
            {
              "x": -42,
              "y": 11
            }
          ],
          "x": 1346,
          "y": 723,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 42,
          "water": true
        },
        {
          "points": [
            {
              "x": -21,
              "y": -55
            },
            {
              "x": -20,
              "y": -206
            },
            {
              "x": 27,
              "y": -206
            },
            {
              "x": 27,
              "y": 117
            },
            {
              "x": -16,
              "y": 118
            },
            {
              "x": -21,
              "y": 113
            }
          ],
          "x": 1374,
          "y": 456,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 43,
          "sand": true
        },
        {
          "points": [
            {
              "x": -29,
              "y": -83
            },
            {
              "x": 23,
              "y": -83
            },
            {
              "x": 23,
              "y": 67
            },
            {
              "x": 22,
              "y": 68
            },
            {
              "x": -8,
              "y": 40
            },
            {
              "x": -31,
              "y": -9
            }
          ],
          "x": 1331,
          "y": 334,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 44,
          "sand": true
        },
        {
          "points": [
            {
              "x": 6,
              "y": -25
            },
            {
              "x": 31,
              "y": 24
            },
            {
              "x": 5,
              "y": 24
            },
            {
              "x": -20,
              "y": -1
            },
            {
              "x": -23,
              "y": -24
            }
          ],
          "x": 1294,
          "y": 350,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 45,
          "sand": true
        },
        {
          "points": [
            {
              "x": -23,
              "y": -10
            },
            {
              "x": 22,
              "y": -10
            },
            {
              "x": 23,
              "y": 13
            },
            {
              "x": 1,
              "y": 14
            }
          ],
          "x": 1249,
          "y": 335,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 46,
          "sand": true
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 19
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 750,
          "y": 128.5,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 753.5,
          "y": 864,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438,
          "y": 494,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 250,
          "y": 313,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1254,
          "y": 313,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 250,
          "y": 788,
          "halfWidth": 74,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 750.5,
          "y": 212,
          "halfWidth": 74.5,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 1250,
          "y": 212,
          "halfWidth": 74,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 6
        },
        {
          "x": 1363,
          "y": 675,
          "halfWidth": 37.5,
          "halfHeight": 74,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 7
        },
        {
          "x": 134,
          "y": 498.5,
          "halfWidth": 35,
          "halfHeight": 327.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8,
          "water": true
        },
        {
          "x": 387.5,
          "y": 209,
          "halfWidth": 287.5,
          "halfHeight": 33,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 9,
          "water": true
        },
        {
          "x": 501,
          "y": 385,
          "halfWidth": 166.5,
          "halfHeight": 206.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 10,
          "water": true
        },
        {
          "x": 862,
          "y": 792,
          "halfWidth": 537,
          "halfHeight": 34,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 11,
          "water": true
        },
        {
          "x": 1000,
          "y": 383,
          "halfWidth": 168,
          "halfHeight": 207.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 12,
          "water": true
        },
        {
          "x": 1366.5,
          "y": 388,
          "halfWidth": 34.5,
          "halfHeight": 213,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "water": true
        },
        {
          "x": 324.5,
          "y": 675,
          "halfWidth": 148.5,
          "halfHeight": 76,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "impulseAngle": 90,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": 75,
              "y": -112
            },
            {
              "x": 75,
              "y": 35
            },
            {
              "x": -75,
              "y": 35
            }
          ],
          "x": 251,
          "y": 564,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "impulseAngle": 90,
          "impulsePercentage": 1
        },
        {
          "x": 750.5,
          "y": 362,
          "halfWidth": 74.5,
          "halfHeight": 112,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16,
          "impulseAngle": 180,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": -110,
              "y": -38
            },
            {
              "x": 184,
              "y": -38
            },
            {
              "x": 38,
              "y": 110
            }
          ],
          "x": 713,
          "y": 638,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17,
          "impulseAngle": 0,
          "impulsePercentage": 1
        },
        {
          "x": 751,
          "y": 563,
          "halfWidth": 76,
          "halfHeight": 36,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18,
          "impulseAngle": 0,
          "impulsePercentage": 1
        },
        {
          "x": 1251,
          "y": 675,
          "halfWidth": 74,
          "halfHeight": 73.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 19,
          "impulseAngle": 270,
          "impulsePercentage": 0.5
        },
        {
          "points": [
            {
              "x": -36,
              "y": -74
            },
            {
              "x": 112,
              "y": 74
            },
            {
              "x": -36,
              "y": 74
            }
          ],
          "x": 1213,
          "y": 527,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 20,
          "impulseAngle": 270,
          "impulsePercentage": 0.5
        },
        {
          "x": 750,
          "y": 789,
          "halfWidth": 299,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 21
        },
        {
          "x": 563,
          "y": 562,
          "halfWidth": 112,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 22
        },
        {
          "x": 937.5,
          "y": 562,
          "halfWidth": 111.5,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 23
        },
        {
          "x": 637.5,
          "y": 312,
          "halfWidth": 36.5,
          "halfHeight": 137,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 24
        },
        {
          "x": 863.5,
          "y": 312.5,
          "halfWidth": 36.5,
          "halfHeight": 136.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 25
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
      },
    // Level 20
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 750,
          "y": 128.5,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 753.5,
          "y": 864,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438,
          "y": 494,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 1088,
          "y": 501,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 263,
          "y": 488,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 688,
          "y": 637,
          "halfWidth": 187,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 688,
          "y": 363,
          "halfWidth": 187,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 612.5,
          "y": 537.5,
          "halfWidth": 36.5,
          "halfHeight": 62.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 6
        },
        {
          "x": 762.5,
          "y": 462.5,
          "halfWidth": 36.5,
          "halfHeight": 61.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 7
        },
        {
          "points": [
            {
              "x": -110,
              "y": -27
            },
            {
              "x": -37,
              "y": -100
            },
            {
              "x": 110,
              "y": -100
            },
            {
              "x": 110,
              "y": 27
            },
            {
              "x": 37,
              "y": 100
            },
            {
              "x": -110,
              "y": 100
            }
          ],
          "x": 688,
          "y": 501,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8,
          "impulseAngle": 270,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": -153,
              "y": -73
            },
            {
              "x": 297,
              "y": -73
            },
            {
              "x": 153,
              "y": 73
            },
            {
              "x": -297,
              "y": 73
            }
          ],
          "x": 1024.5,
          "y": 326,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 9,
          "impulseAngle": 0,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": -72,
              "y": -101
            },
            {
              "x": 72,
              "y": -248
            },
            {
              "x": 72,
              "y": 248
            },
            {
              "x": -72,
              "y": 101
            }
          ],
          "x": 1250.5,
          "y": 501,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 10,
          "impulseAngle": 90,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": 153,
              "y": -73
            },
            {
              "x": 297,
              "y": 73
            },
            {
              "x": -153,
              "y": 73
            },
            {
              "x": -297,
              "y": -73
            }
          ],
          "x": 1025.25,
          "y": 675,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 11,
          "impulseAngle": 180,
          "impulsePercentage": 1
        },
        {
          "x": 749,
          "y": 787,
          "halfWidth": 48,
          "halfHeight": 112,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 12,
          "impulseAngle": 270,
          "impulsePercentage": 1
        },
        {
          "x": 750,
          "y": 213.5,
          "halfWidth": 48,
          "halfHeight": 113.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "impulseAngle": 270,
          "impulsePercentage": 1
        },
        {
          "x": 514,
          "y": 500,
          "halfWidth": 12,
          "halfHeight": 99.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "impulseAngle": 90,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 131,
              "y": -31
            },
            {
              "x": 131,
              "y": 20
            },
            {
              "x": -171,
              "y": 20
            },
            {
              "x": -220,
              "y": -31
            }
          ],
          "x": 370,
          "y": 380,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "impulseAngle": 0,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": -140,
              "y": -25
            },
            {
              "x": 164,
              "y": -25
            },
            {
              "x": 164,
              "y": 25
            },
            {
              "x": -188,
              "y": 25
            }
          ],
          "x": 338,
          "y": 627,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16,
          "impulseAngle": 180,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": 25,
              "y": -100
            },
            {
              "x": 25,
              "y": 100
            },
            {
              "x": -25,
              "y": 153
            },
            {
              "x": -25,
              "y": -153
            }
          ],
          "x": 174,
          "y": 502,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17,
          "impulseAngle": 270,
          "impulsePercentage": 1
        },
        {
          "x": 173,
          "y": 261,
          "halfWidth": 198.5,
          "halfHeight": 85.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18,
          "sand": true
        },
        {
          "x": 172,
          "y": 739,
          "halfWidth": 200,
          "halfHeight": 84.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 19,
          "sand": true
        },
        {
          "x": 122.5,
          "y": 501.5,
          "halfWidth": 23.5,
          "halfHeight": 152.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 20,
          "sand": true
        },
        {
          "x": 1377,
          "y": 500.5,
          "halfWidth": 23,
          "halfHeight": 325.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 21,
          "sand": true
        },
        {
          "points": [
            {
              "x": -212,
              "y": -21
            },
            {
              "x": 291,
              "y": -21
            },
            {
              "x": 291,
              "y": 29
            },
            {
              "x": -163,
              "y": 29
            }
          ],
          "x": 1062,
          "y": 194,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 22,
          "sand": true
        },
        {
          "points": [
            {
              "x": -216,
              "y": -25
            },
            {
              "x": 240,
              "y": -25
            },
            {
              "x": 240,
              "y": 25
            },
            {
              "x": -265,
              "y": 25
            }
          ],
          "x": 1114,
          "y": 803,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 23,
          "sand": true
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 21
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 750,
          "y": 128.5,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 753.5,
          "y": 864,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438,
          "y": 494,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 275,
          "y": 738,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1225,
          "y": 738,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 272.5,
          "y": 228,
          "halfWidth": 251.5,
          "halfHeight": 146,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 1225.5,
          "y": 230,
          "halfWidth": 249.5,
          "halfHeight": 144,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 750,
          "y": 763,
          "halfWidth": 299,
          "halfHeight": 137,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 6
        },
        {
          "x": 750.5,
          "y": 273.5,
          "halfWidth": 225.5,
          "halfHeight": 98.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 7,
          "impulseAngle": 180,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": -11.5,
              "y": -27.5
            },
            {
              "x": -2,
              "y": -36
            },
            {
              "x": 13.5,
              "y": -21.5
            },
            {
              "x": 13.5,
              "y": 21.5
            },
            {
              "x": -2,
              "y": 36
            },
            {
              "x": -11.5,
              "y": 27.5
            }
          ],
          "x": 588,
          "y": 550,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8,
          "impulseAngle": 90,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -11.5,
              "y": -27.5
            },
            {
              "x": -2,
              "y": -36
            },
            {
              "x": 13.5,
              "y": -21.5
            },
            {
              "x": 13.5,
              "y": 21.5
            },
            {
              "x": -2,
              "y": 36
            },
            {
              "x": -11.5,
              "y": 27.5
            }
          ],
          "x": 838,
          "y": 550,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 9,
          "impulseAngle": 90,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -11.5,
              "y": -27.5
            },
            {
              "x": -2,
              "y": -36
            },
            {
              "x": 13.5,
              "y": -21.5
            },
            {
              "x": 13.5,
              "y": 21.5
            },
            {
              "x": -2,
              "y": 36
            },
            {
              "x": -11.5,
              "y": 27.5
            }
          ],
          "x": 690,
          "y": 500,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 10,
          "impulseAngle": 90,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 11.5,
              "y": -27.5
            },
            {
              "x": 2,
              "y": -36
            },
            {
              "x": -13.5,
              "y": -21.5
            },
            {
              "x": -13.5,
              "y": 21.5
            },
            {
              "x": 2,
              "y": 36
            },
            {
              "x": 11.5,
              "y": 27.5
            }
          ],
          "x": 663,
          "y": 551,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 11,
          "impulseAngle": 270,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 11.5,
              "y": -27.5
            },
            {
              "x": 2,
              "y": -36
            },
            {
              "x": -13.5,
              "y": -21.5
            },
            {
              "x": -13.5,
              "y": 21.5
            },
            {
              "x": 2,
              "y": 36
            },
            {
              "x": 11.5,
              "y": 27.5
            }
          ],
          "x": 913,
          "y": 551,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 12,
          "impulseAngle": 270,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": 11.5,
              "y": -27.5
            },
            {
              "x": 2,
              "y": -36
            },
            {
              "x": -13.5,
              "y": -21.5
            },
            {
              "x": -13.5,
              "y": 21.5
            },
            {
              "x": 2,
              "y": 36
            },
            {
              "x": 11.5,
              "y": 27.5
            }
          ],
          "x": 813,
          "y": 499,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "impulseAngle": 270,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -21,
              "y": -13
            },
            {
              "x": 31,
              "y": -13
            },
            {
              "x": 45,
              "y": 0
            },
            {
              "x": 29,
              "y": 13
            },
            {
              "x": -17,
              "y": 13
            },
            {
              "x": -34,
              "y": -1
            }
          ],
          "x": 620,
          "y": 515,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "impulseAngle": 180,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -21,
              "y": -13
            },
            {
              "x": 31,
              "y": -13
            },
            {
              "x": 45,
              "y": 0
            },
            {
              "x": 29,
              "y": 13
            },
            {
              "x": -17,
              "y": 13
            },
            {
              "x": -34,
              "y": -1
            }
          ],
          "x": 870,
          "y": 515,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "impulseAngle": 180,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -21,
              "y": 13
            },
            {
              "x": 31,
              "y": 13
            },
            {
              "x": 45,
              "y": 0
            },
            {
              "x": 29,
              "y": -13
            },
            {
              "x": -17,
              "y": -13
            },
            {
              "x": -34,
              "y": 1
            }
          ],
          "x": 620,
          "y": 585,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16,
          "impulseAngle": 0,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -21,
              "y": 13
            },
            {
              "x": 31,
              "y": 13
            },
            {
              "x": 45,
              "y": 0
            },
            {
              "x": 29,
              "y": -13
            },
            {
              "x": -17,
              "y": -13
            },
            {
              "x": -34,
              "y": 1
            }
          ],
          "x": 870,
          "y": 585,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17,
          "impulseAngle": 0,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -49,
              "y": -13
            },
            {
              "x": 49,
              "y": -13
            },
            {
              "x": 65,
              "y": -1
            },
            {
              "x": 49,
              "y": 13
            },
            {
              "x": -49,
              "y": 13
            },
            {
              "x": -62,
              "y": -1
            }
          ],
          "x": 751,
          "y": 464,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18,
          "impulseAngle": 180,
          "impulsePercentage": 0.4
        },
        {
          "points": [
            {
              "x": -49,
              "y": 13
            },
            {
              "x": 49,
              "y": 13
            },
            {
              "x": 65,
              "y": 1
            },
            {
              "x": 49,
              "y": -13
            },
            {
              "x": -49,
              "y": -13
            },
            {
              "x": -62,
              "y": 1
            }
          ],
          "x": 750,
          "y": 535,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 19,
          "impulseAngle": 0,
          "impulsePercentage": 0.4
        },
        {
          "x": 625,
          "y": 550.5,
          "halfWidth": 22,
          "halfHeight": 20.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 20,
          "sand": true
        },
        {
          "x": 750.5,
          "y": 500,
          "halfWidth": 46.5,
          "halfHeight": 21,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 21,
          "sand": true
        },
        {
          "x": 875.5,
          "y": 550.5,
          "halfWidth": 22.5,
          "halfHeight": 20.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 22,
          "sand": true
        },
        {
          "points": [
            {
              "x": -42.5,
              "y": -88.5
            },
            {
              "x": 133.5,
              "y": -88.5
            },
            {
              "x": -42.5,
              "y": 88.5
            }
          ],
          "x": 142.5,
          "y": 463.5,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 23,
          "sand": true
        },
        {
          "points": [
            {
              "x": 42.5,
              "y": -88.5
            },
            {
              "x": -133.5,
              "y": -88.5
            },
            {
              "x": 42.5,
              "y": 88.5
            }
          ],
          "x": 1358,
          "y": 462,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 24,
          "sand": true
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    },
    // Level 22
    {
      "entities": [
        {
          "x": 61,
          "y": 477.5,
          "halfWidth": 38,
          "halfHeight": 382.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 750,
          "y": 128.5,
          "halfWidth": 736,
          "halfHeight": 45.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 753.5,
          "y": 864,
          "halfWidth": 729.5,
          "halfHeight": 38,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 1438,
          "y": 494,
          "halfWidth": 37.5,
          "halfHeight": 403.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 137,
          "y": 500,
          "radius": 11.5,
          "staticBody": false,
          "sensor": false,
          "type": "Circle",
          "fillStyle": "rgba(0,255,0,0.4)",
          "id": "ball"
        },
        {
          "x": 1263,
          "y": 500,
          "radius": 6,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 261.5,
          "y": 283,
          "halfWidth": 237.5,
          "halfHeight": 191,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 262,
          "y": 714,
          "halfWidth": 237,
          "halfHeight": 188,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 1238,
          "y": 280,
          "halfWidth": 237,
          "halfHeight": 194,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 6
        },
        {
          "x": 1237.5,
          "y": 713.5,
          "halfWidth": 236.5,
          "halfHeight": 187.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 7
        },
        {
          "x": 750,
          "y": 279,
          "halfWidth": 174,
          "halfHeight": 195,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 8
        },
        {
          "x": 749.5,
          "y": 713.5,
          "halfWidth": 174.5,
          "halfHeight": 187.5,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 9
        },
        {
          "x": 963,
          "y": 363,
          "halfWidth": 111,
          "halfHeight": 36,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 10
        },
        {
          "x": 962.5,
          "y": 638,
          "halfWidth": 111.5,
          "halfHeight": 37,
          "staticBody": true,
          "sensor": false,
          "type": "Rectangle",
          "id": 11
        },
        {
          "points": [
            {
              "x": 85,
              "y": -200
            },
            {
              "x": 87,
              "y": 76
            },
            {
              "x": 36,
              "y": 125
            },
            {
              "x": -36,
              "y": 125
            },
            {
              "x": -87,
              "y": 76
            },
            {
              "x": -85,
              "y": -200
            }
          ],
          "x": 537,
          "y": 376,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 12,
          "impulseAngle": 180,
          "impulsePercentage": 3
        },
        {
          "points": [
            {
              "x": 85,
              "y": 200
            },
            {
              "x": 87,
              "y": -76
            },
            {
              "x": 36,
              "y": -125
            },
            {
              "x": -36,
              "y": -125
            },
            {
              "x": -87,
              "y": -76
            },
            {
              "x": -85,
              "y": 200
            }
          ],
          "x": 537,
          "y": 627,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 13,
          "impulseAngle": 0,
          "impulsePercentage": 3
        },
        {
          "points": [
            {
              "x": 85,
              "y": -200
            },
            {
              "x": 87,
              "y": 76
            },
            {
              "x": 36,
              "y": 125
            },
            {
              "x": -36,
              "y": 125
            },
            {
              "x": -87,
              "y": 76
            },
            {
              "x": -85,
              "y": -200
            }
          ],
          "x": 962,
          "y": 376,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
          "impulseAngle": 180,
          "impulsePercentage": 1
        },
        {
          "points": [
            {
              "x": 85,
              "y": 200
            },
            {
              "x": 87,
              "y": -76
            },
            {
              "x": 36,
              "y": -125
            },
            {
              "x": -36,
              "y": -125
            },
            {
              "x": -87,
              "y": -76
            },
            {
              "x": -85,
              "y": 200
            }
          ],
          "x": 962,
          "y": 627,
          "staticBody": true,
          "sensor": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 15,
          "impulseAngle": 0,
          "impulsePercentage": 1
        }
      ],
      "joints": [],
      "canvas": {
        "height": 1000,
        "width": 1500
      }
    }
  ];

  var args = Array.prototype.slice.call(arguments, 1);

  _.forEach(levels, function(level, id){
    level.backImg = args[id];
    level.maxGoalVelocity = level.maxGoalVelocity || MAX_VELOCITY_FOR_GOAL;
  });

  return levels;

});
