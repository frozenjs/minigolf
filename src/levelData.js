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
  'frozen/plugins/loadImage!images/hole16.png'
], function(_, hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12, hole13, hole14, hole15, hole16){

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
          "x": 413,
          "y": 496,
          "halfWidth": 64,
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
          "x": 662.5,
          "y": 497.5,
          "halfWidth": 66.5,
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
          "x": 1241,
          "y": 746.75,
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
          "x": 1287,
          "y": 266,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
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
              "x": 22.666666666666686,
              "y": -22.333333333333343
            },
            {
              "x": 23.666666666666686,
              "y": 46.66666666666666
            },
            {
              "x": -46.333333333333314,
              "y": -24.333333333333343
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
              "x": -107.28571428571428,
              "y": -14.714285714285722
            },
            {
              "x": -82.28571428571428,
              "y": -39.71428571428572
            },
            {
              "x": 118.71428571428572,
              "y": -38.71428571428572
            },
            {
              "x": 142.71428571428572,
              "y": -14.714285714285722
            },
            {
              "x": 142.71428571428572,
              "y": 36.28571428571428
            },
            {
              "x": -107.28571428571428,
              "y": 36.28571428571428
            },
            {
              "x": -107.28571428571428,
              "y": 35.28571428571428
            }
          ],
          "x": 257.2857142857143,
          "y": 214.71428571428572,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 10
        },
        {
          "points": [
            {
              "x": -88,
              "y": -44
            },
            {
              "x": 88,
              "y": -43
            },
            {
              "x": 89,
              "y": 131
            },
            {
              "x": -89,
              "y": -44
            }
          ],
          "x": 1163,
          "y": 369,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 11
        },
        {
          "points": [
            {
              "x": 450,
              "y": -41.33333333333337
            },
            {
              "x": 450,
              "y": 8.666666666666629
            },
            {
              "x": 426,
              "y": 33.66666666666663
            },
            {
              "x": -426,
              "y": 32.66666666666663
            },
            {
              "x": -450,
              "y": 7.666666666666629
            },
            {
              "x": -450,
              "y": -41.33333333333337
            }
          ],
          "x": 900,
          "y": 792.3333333333334,
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
          "x": 900,
          "y": 567.5,
          "halfWidth": 423,
          "halfHeight": 341.5,
          "staticBody": true,
          "sensor": true,
          "type": "Rectangle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 14,
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
    // {
    //   "entities": [
    //     {
    //       "x": 348,
    //       "y": 41.5,
    //       "halfWidth": 345,
    //       "halfHeight": 35.5,
    //       "staticBody": true,
    //       "sensor": false,
    //       "type": "Rectangle",
    //       "id": 0
    //     },
    //     {
    //       "x": 665.5,
    //       "y": 223,
    //       "halfWidth": 30.5,
    //       "halfHeight": 216,
    //       "staticBody": true,
    //       "sensor": false,
    //       "type": "Rectangle",
    //       "id": 1
    //     },
    //     {
    //       "x": 346,
    //       "y": 400.5,
    //       "halfWidth": 342,
    //       "halfHeight": 33.5,
    //       "staticBody": true,
    //       "sensor": false,
    //       "type": "Rectangle",
    //       "id": 2
    //     },
    //     {
    //       "x": 31.5,
    //       "y": 221.5,
    //       "halfWidth": 26.5,
    //       "halfHeight": 211.5,
    //       "staticBody": true,
    //       "sensor": false,
    //       "type": "Rectangle",
    //       "id": 3
    //     },
    //     {
    //       "x": 251,
    //       "y": 222,
    //       "radius": 96,
    //       "staticBody": true,
    //       "sensor": true,
    //       "sand": true,
    //       "type": "Circle",
    //       "fillStyle": "rgba(255,0,0,0.2)",
    //       "id": 4
    //     },
    //     {
    //       "x": 678,
    //       "y": 222,
    //       "radius": 196,
    //       "staticBody": true,
    //       "sensor": true,
    //       "sand": true,
    //       "type": "Circle",
    //       "fillStyle": "rgba(255,0,0,0.2)",
    //       "id": 5
    //     },
    //     {
    //       "x": 92.5,
    //       "y": 221.5,
    //       "radius": 8,
    //       "staticBody": false,
    //       "sensor": false,
    //       "type": "Circle",
    //       "fillStyle": "rgba(255,0,0,0.2)",
    //       "id": "ball"
    //     },
    //     {
    //       "x": 458,
    //       "y": 227,
    //       "radius": 6.77,
    //       "staticBody": true,
    //       "sensor": true,
    //       "type": "Circle",
    //       "fillStyle": "rgba(255,0,0,0.2)",
    //       "id": "goal"
    //     }
    //   ],
    //   "joints": [],
    //   "canvas": {
    //     "height": 440,
    //     "width": 700
    //   },
    //   "backImg": null
    // },
    //Level 14
    {
      "entities": [
        {
          "points": [
            {
              "x": -266.5,
              "y": -151.25
            },
            {
              "x": 285.5,
              "y": 120.75
            },
            {
              "x": 249.5,
              "y": 150.75
            },
            {
              "x": -268.5,
              "y": -120.25
            }
          ],
          "x": 410.5,
          "y": 152.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 0
        },
        {
          "points": [
            {
              "x": 50,
              "y": -68
            },
            {
              "x": 88,
              "y": -63
            },
            {
              "x": -68,
              "y": 77
            },
            {
              "x": -70,
              "y": 54
            }
          ],
          "x": 606,
          "y": 356,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 1
        },
        {
          "points": [
            {
              "x": -305.4,
              "y": -173.8
            },
            {
              "x": 212.60000000000002,
              "y": 103.19999999999999
            },
            {
              "x": 213.60000000000002,
              "y": 104.19999999999999
            },
            {
              "x": 219.60000000000002,
              "y": 128.2
            },
            {
              "x": -340.4,
              "y": -161.8
            }
          ],
          "x": 342.4,
          "y": 306.8,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 2
        },
        {
          "points": [
            {
              "x": 63.75,
              "y": -80.25
            },
            {
              "x": 70.75,
              "y": -53.25
            },
            {
              "x": -51.25,
              "y": 69.75
            },
            {
              "x": -83.25,
              "y": 63.75
            }
          ],
          "x": 94.25,
          "y": 83.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 3
        },
        {
          "points": [
            {
              "x": 29.399999999999977,
              "y": -86.4
            },
            {
              "x": 119.39999999999998,
              "y": -43.400000000000006
            },
            {
              "x": 7.399999999999977,
              "y": 73.6
            },
            {
              "x": -77.60000000000002,
              "y": 28.599999999999994
            },
            {
              "x": -78.60000000000002,
              "y": 27.599999999999994
            }
          ],
          "x": 327.6,
          "y": 226.4,
          "staticBody": true,
          "sensor": true,
          "water": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "water_hazard"
        },
        {
          "x": 347,
          "y": 219,
          "radius": 13.416407864998739,
          "staticBody": true,
          "sensor": false,
          "type": "Circle",
          "id": "pin",
          "maskBits": 2
        },
        {
          "x": 347,
          "y": 219,
          "halfWidth": 62,
          "halfHeight": 22,
          "staticBody": false,
          "sensor": true,
          "safe": true,
          "type": "Rectangle",
          "fillStyle": "#62A66F",
          "strokeStyle": "#62A66F",
          "id": "bar"
        },
        {
          "x": 135,
          "y": 104,
          "radius": 6.77,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 567.5,
          "y": 337,
          "radius": 8,
          "staticBody": false,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "ball"
        }
      ],
      "joints": [
        {
          "bodyId1": "pin",
          "bodyId2": "bar",
          "type": "Revolute",
          "id": "hj",
          "jointAttributes": {
            "motorSpeed": 0.3,
            "enableMotor": true,
            "maxMotorTorque": 3500
          }
        }
      ],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
//Level 15
{
  "entities": [
    {
      "x": 202,
      "y": 106,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa0",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 274.5,
      "y": 106,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa1",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 347,
      "y": 106,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa2",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 419.5,
      "y": 106,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa3",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 492,
      "y": 106,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa4",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 202,
      "y": 179,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa5",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 274.5,
      "y": 179,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa6",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 347,
      "y": 179,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa7",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 419.5,
      "y": 179,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa8",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 492,
      "y": 179,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa9",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 202,
      "y": 252,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa10",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 274.5,
      "y": 252,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa11",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 347,
      "y": 252,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa12",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 419.5,
      "y": 252,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa13",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 492,
      "y": 252,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa14",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 202,
      "y": 325,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa15",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 274.5,
      "y": 325,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa16",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 347,
      "y": 325,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa17",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 419.5,
      "y": 325,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa18",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 492,
      "y": 325,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pa19",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 165,
      "y": 143,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb0",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 237.5,
      "y": 143,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb1",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 310,
      "y": 143,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb2",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 382.5,
      "y": 143,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb3",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 455,
      "y": 143,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb4",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 527.5,
      "y": 143,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb5",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 165,
      "y": 215.5,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb6",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 237.5,
      "y": 215.5,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb7",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 310,
      "y": 215.5,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb8",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 382.5,
      "y": 215.5,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb9",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 455,
      "y": 215.5,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb10",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 527.5,
      "y": 215.5,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb11",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 165,
      "y": 288,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb12",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 237.5,
      "y": 288,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb13",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 310,
      "y": 288,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb14",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 382.5,
      "y": 288,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb15",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 455,
      "y": 288,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb16",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 527.5,
      "y": 288,
      "radius": 10,
      "staticBody": true,
      "sensor": false,
      "type": "Circle",
      "id": "pb17",
      "density": 1,
      "restitution": 0.75
    },
    {
      "x": 67,
      "y": 217.5,
      "halfWidth": 59,
      "halfHeight": 215.5,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 0
    },
    {
      "x": 355.5,
      "y": 425.5,
      "halfWidth": 340.5,
      "halfHeight": 13.5,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 1
    },
    {
      "x": 629,
      "y": 219.5,
      "halfWidth": 63,
      "halfHeight": 215.5,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 2
    },
    {
      "x": 351.5,
      "y": 16.5,
      "halfWidth": 343.5,
      "halfHeight": 13.5,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 3
    },
    {
      "x": 345.5,
      "y": 214,
      "halfWidth": 225.5,
      "halfHeight": 132,
      "staticBody": true,
      "sensor": true,
      "type": "Rectangle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "impulseAngle": 180,
      "impulsePercentage": 0.6,
      "id": 4
    },
    {
      "x": 349,
      "y": 52,
      "radius": 8,
      "staticBody": false,
      "sensor": false,
      "type": "Circle",
      "fillStyle": "rgba(0,255,0,0.4)",
      "id": "ball"
    },
    {
      "x": 348,
      "y": 383,
      "radius": 4,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "id": "goal",
      "fillStyle": "rgba(255,0,0,0.2)"
    }
  ],
  "joints": [],
  "canvas": {
    "height": 440,
    "width": 700
  },
  "backImg": null
},
//Level 16
{
  "entities": [
    {
      "x": 351.5,
      "y": 40,
      "halfWidth": 348.5,
      "halfHeight": 38,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 0
    },
    {
      "x": 278.5,
      "y": 219,
      "halfWidth": 211.5,
      "halfHeight": 15,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 1
    },
    {
      "x": 42.5,
      "y": 219,
      "halfWidth": 35.5,
      "halfHeight": 215,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 2
    },
    {
      "x": 347.5,
      "y": 396.5,
      "halfWidth": 336.5,
      "halfHeight": 34.5,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 3
    },
    {
      "x": 658.5,
      "y": 216,
      "halfWidth": 38.5,
      "halfHeight": 207,
      "staticBody": true,
      "sensor": false,
      "type": "Rectangle",
      "id": 4
    },
    {
      "x": 250,
      "y": 141,
      "radius": 66,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "impulsePercentage": 0.7,
      "impulseInward": false,
      "id": "c1"
    },
    {
      "x": 250,
      "y": 141,
      "radius": 28,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "impulsePercentage": 0.7,
      "impulseInward": true,
      "fillStyle": "rgba(255,0,0,0.2)",
      "id": "c2"
    },
    {
      "x": 416,
      "y": 141,
      "radius": 66,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "impulsePercentage": 0.7,
      "impulseInward": false,
      "id": "c3"
    },
    {
      "x": 416,
      "y": 141,
      "radius": 28,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "impulsePercentage": 0.7,
      "impulseInward": true,
      "fillStyle": "rgba(255,0,0,0.2)",
      "id": "c4"
    },
    {
      "x": 248,
      "y": 300,
      "radius": 66,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "impulsePercentage": 0.7,
      "impulseInward": false,
      "id": "c5"
    },
    {
      "x": 248,
      "y": 300,
      "radius": 28,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "impulsePercentage": 0.7,
      "impulseInward": true,
      "fillStyle": "rgba(255,0,0,0.2)",
      "id": "c6"
    },
    {
      "x": 416,
      "y": 299,
      "radius": 66,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "impulsePercentage": 0.7,
      "impulseInward": false,
      "id": "c7"
    },
    {
      "x": 416,
      "y": 299,
      "radius": 28,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "impulsePercentage": 0.7,
      "impulseInward": true,
      "fillStyle": "rgba(255,0,0,0.2)",
      "id": "c8"
    },
    {
      "x": 553,
      "y": 221,
      "radius": 66,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "impulsePercentage": 0.7,
      "impulseInward": false,
      "id": "c9"
    },
    {
      "x": 553,
      "y": 221,
      "radius": 28,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "impulsePercentage": 0.7,
      "impulseInward": true,
      "fillStyle": "rgba(255,0,0,0.2)",
      "id": "c10"
    },
    {
      "x": 122,
      "y": 302,
      "radius": 4,
      "staticBody": true,
      "sensor": true,
      "type": "Circle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "id": "goal"
    },
    {
      "x": 120,
      "y": 141,
      "radius": 8,
      "staticBody": false,
      "sensor": false,
      "type": "Circle",
      "fillStyle": "rgba(255,0,0,0.2)",
      "id": "ball"
    }
  ],
  "joints": [],
  "canvas": {
    "height": 440,
    "width": 700
  },
  "backImg": null
}

  ];

  var args = Array.prototype.slice.call(arguments, 1);

  _.forEach(levels, function(level, id){
    level.backImg = args[id];
    level.maxGoalVelocity = level.maxGoalVelocity || MAX_VELOCITY_FOR_GOAL;
  });

  return levels;

});