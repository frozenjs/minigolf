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
  'frozen/plugins/loadImage!images/hole12.png'
], function(_, hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12){

  'use strict';

  var MAX_VELOCITY_FOR_GOAL = 8;

  var levels = [
    // Level 1
    {
      "entities": [
        {
          "x": 347,
          "y": 48,
          "halfWidth": 345,
          "halfHeight": 46,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 25,
          "y": 236,
          "halfWidth": 22,
          "halfHeight": 196,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 350,
          "y": 385,
          "halfWidth": 342,
          "halfHeight": 50,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 669.5,
          "y": 221,
          "halfWidth": 26.5,
          "halfHeight": 187,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 89,
          "y": 147,
          "radius": 8,
          "linearDamping": 0.5,
          "angularDamping": 0.4,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 605.5,
          "y": 285.5,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    // Level 2
    {
      "entities": [
        {
          "x": 17,
          "y": 219,
          "halfWidth": 16,
          "halfHeight": 185.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 347,
          "y": 18.5,
          "halfWidth": 346,
          "halfHeight": 14.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 347,
          "y": 419,
          "halfWidth": 345,
          "halfHeight": 13,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 681,
          "y": 220,
          "halfWidth": 15,
          "halfHeight": 180,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 286,
          "y": 215,
          "halfWidth": 275.5,
          "halfHeight": 17,
          "staticBody": true,
          "type": "Rectangle",
          "id": 4
        },
        {
          "points": [
            {
              "x": 52,
              "y": -72.33333333333331
            },
            {
              "x": 50,
              "y": 34
            },
            {
              "x": -102,
              "y": 35
            }
          ],
          "x": 616,
          "y": 372.3333333333333,
          "staticBody": true,
          "type": "Polygon",
          "id": 5
        },
        {
          "points": [
            {
              "x": 45,
              "y": -30
            },
            {
              "x": 50,
              "y": 71
            },
            {
              "x": -104,
              "y": -33
            }
          ],
          "x": 618.3333333333334,
          "y": 63,
          "staticBody": true,
          "type": "Polygon",
          "id": 6
        },
        {
          "x": 76,
          "y": 110,
          "radius": 8,
          "linearDamping": 0.5,
          "angularDamping": 0.4,
          "staticBody": false,
          "type": "Circle",
          "id": "ball"
        },
        {
          "x": 76,
          "y": 320,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
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
    // Level 3
    {
      "entities": [
        {
          "x": 349.5,
          "y": 59,
          "halfWidth": 346.5,
          "halfHeight": 54,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 347,
          "y": 384.5,
          "halfWidth": 342,
          "halfHeight": 45.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 32,
          "y": 208,
          "halfWidth": 28,
          "halfHeight": 201,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 663,
          "y": 227.5,
          "halfWidth": 29,
          "halfHeight": 185.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 226,
          "y": 231,
          "radius": 60,
          "staticBody": true,
          "type": "Circle",
          "id": 4
        },
        {
          "x": 471,
          "y": 232,
          "radius": 60,
          "staticBody": true,
          "type": "Circle",
          "id": 5
        },
        {
          "x": 101,
          "y": 228.5,
          "radius": 8,
          "linearDamping": 0.5,
          "angularDamping": 0.4,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 590.5,
          "y": 231.5,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    // Level 4
    {
      "entities": [
        {
          "x": 348.5,
          "y": 23.5,
          "halfWidth": 346.5,
          "halfHeight": 21.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 349,
          "y": 414.5,
          "halfWidth": 344,
          "halfHeight": 18.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 59,
          "y": 218,
          "halfWidth": 31,
          "halfHeight": 205,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 638,
          "y": 213,
          "halfWidth": 35,
          "halfHeight": 196,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 573,
          "y": 333,
          "radius": 8,
          "linearDamping": 0.5,
          "angularDamping": 0.4,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 114.5,
          "y": 119.5,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 275,
          "y": 220,
          "halfWidth": 140,
          "halfHeight": 174,
          "staticBody": true,
          "type": "Rectangle",
          "sensor": true,
          "impulseAngle": 90,
          "impulsePercentage": 1,
          "hill": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 4
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    // Level 5
    {
      "entities": [
        {
          "x": 20.5,
          "y": 218,
          "halfWidth": 18.5,
          "halfHeight": 217,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 349.5,
          "y": 418.5,
          "halfWidth": 347.5,
          "halfHeight": 18.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 350.5,
          "y": 19,
          "halfWidth": 346.5,
          "halfHeight": 19,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "points": [
            {
              "x": 86,
              "y": -75
            },
            {
              "x": 87,
              "y": 147
            },
            {
              "x": -175,
              "y": -72
            }
          ],
          "x": 607,
          "y": 101,
          "staticBody": true,
          "type": "Polygon",
          "id": 3
        },
        {
          "points": [
            {
              "x": 87.33333333333337,
              "y": -148.33333333333331
            },
            {
              "x": 88.33333333333337,
              "y": 75.66666666666669
            },
            {
              "x": -177,
              "y": 72.66666666666669
            }
          ],
          "x": 605.6666666666666,
          "y": 338.3333333333333,
          "staticBody": true,
          "type": "Polygon",
          "id": 4
        },
        {
          "x": 140.5,
          "y": 218.5,
          "halfWidth": 21.5,
          "halfHeight": 120.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 186.5,
          "y": 229.5,
          "radius": 8,
          "linearDamping": 0.5,
          "angularDamping": 0.4,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 76,
          "y": 227.5,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    // Level 6
    {
      "entities": [
        {
          "x": 22.5,
          "y": 218,
          "halfWidth": 21.5,
          "halfHeight": 217,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 674,
          "y": 219,
          "halfWidth": 22,
          "halfHeight": 215,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 348.5,
          "y": 412.5,
          "halfWidth": 347.5,
          "halfHeight": 24.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 349.5,
          "y": 30,
          "halfWidth": 346.5,
          "halfHeight": 26,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 373.5,
          "y": 111.5,
          "halfWidth": 106.5,
          "halfHeight": 92.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 372,
          "y": 338,
          "halfWidth": 107,
          "halfHeight": 90,
          "staticBody": true,
          "type": "Rectangle",
          "id": 5
        },
        {
          "x": 151.5,
          "y": 374.5,
          "radius": 8,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 617,
          "y": 224.5,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 155,
          "y": 300.5,
          "halfWidth": 110,
          "halfHeight": 52.5,
          "staticBody": true,
          "type": "Rectangle",
          "sensor": true,
          "impulsePercentage": 1,
          "impulseAngle": 180,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 8
        },
        {
          "x": 155.5,
          "y": 145,
          "halfWidth": 110.5,
          "halfHeight": 59,
          "staticBody": true,
          "type": "Rectangle",
          "sensor": true,
          "impulsePercentage": 1,
          "impulseAngle": 0,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 9
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    // Level 7
    {
      "entities": [
        {
          "points": [
            {
              "x": 35,
              "y": -95
            },
            {
              "x": 35,
              "y": 80
            },
            {
              "x": -35,
              "y": 144
            },
            {
              "x": -35,
              "y": -129
            }
          ],
          "x": 37,
          "y": 256,
          "staticBody": true,
          "type": "Polygon",
          "id": 0
        },
        {
          "points": [
            {
              "x": 61,
              "y": -88.5
            },
            {
              "x": 84,
              "y": -20.5
            },
            {
              "x": -38,
              "y": 71.5
            },
            {
              "x": -107,
              "y": 37.5
            }
          ],
          "x": 111,
          "y": 89.5,
          "staticBody": true,
          "type": "Polygon",
          "id": 1
        },
        {
          "points": [
            {
              "x": 180.75,
              "y": -28.5
            },
            {
              "x": 162.75,
              "y": 31.5
            },
            {
              "x": -160.25,
              "y": 32.5
            },
            {
              "x": -183.25,
              "y": -35.5
            }
          ],
          "x": 356.25,
          "y": 36.5,
          "staticBody": true,
          "type": "Polygon",
          "id": 2
        },
        {
          "points": [
            {
              "x": -58.5,
              "y": -60.75
            },
            {
              "x": 98.5,
              "y": 3.25
            },
            {
              "x": 36.5,
              "y": 57.25
            },
            {
              "x": -77,
              "y": 1
            }
          ],
          "x": 596.5,
          "y": 66.75,
          "staticBody": true,
          "type": "Polygon",
          "id": 3
        },
        {
          "points": [
            {
              "x": -24.75,
              "y": -108
            },
            {
              "x": 40.25,
              "y": -164
            },
            {
              "x": 31.25,
              "y": 175
            },
            {
              "x": -46.75,
              "y": 97
            }
          ],
          "x": 657.75,
          "y": 232,
          "staticBody": true,
          "type": "Polygon",
          "id": 4
        },
        {
          "points": [
            {
              "x": 140.5,
              "y": -56.25
            },
            {
              "x": 218.5,
              "y": 20.75
            },
            {
              "x": -178.5,
              "y": 43.75
            },
            {
              "x": -180.5,
              "y": -8.25
            }
          ],
          "x": 470.5,
          "y": 386.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 5
        },
        {
          "points": [
            {
              "x": -92,
              "y": -49.25
            },
            {
              "x": 126,
              "y": -7.25
            },
            {
              "x": 128,
              "y": 42.75
            },
            {
              "x": -162,
              "y": 13.75
            }
          ],
          "x": 165,
          "y": 385.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": 25.25,
              "y": -78
            },
            {
              "x": 67.25,
              "y": -79.25
            },
            {
              "x": -20.75,
              "y": 69.75
            },
            {
              "x": -74,
              "y": 86
            }
          ],
          "x": 261.75,
          "y": 144.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 7
        },
        {
          "points": [
            {
              "x": -51,
              "y": -43
            },
            {
              "x": 74,
              "y": 13
            },
            {
              "x": 77,
              "y": 54
            },
            {
              "x": -102,
              "y": -26
            }
          ],
          "x": 291,
          "y": 256,
          "staticBody": true,
          "type": "Polygon",
          "id": 8
        },
        {
          "points": [
            {
              "x": 46,
              "y": -47
            },
            {
              "x": 81,
              "y": -27
            },
            {
              "x": -63.5,
              "y": 57
            },
            {
              "x": -65,
              "y": 16
            }
          ],
          "x": 430,
          "y": 253,
          "staticBody": true,
          "type": "Polygon",
          "id": 9
        },
        {
          "points": [
            {
              "x": 14.5,
              "y": -53
            },
            {
              "x": 19.5,
              "y": 46
            },
            {
              "x": -15.5,
              "y": 28
            },
            {
              "x": -18.5,
              "y": -21
            }
          ],
          "x": 491.5,
          "y": 180,
          "staticBody": true,
          "type": "Polygon",
          "id": 10
        },
        {
          "points": [
            {
              "x": -75.75,
              "y": -13.25
            },
            {
              "x": 102.25,
              "y": -24.25
            },
            {
              "x": 70.25,
              "y": 12.75
            },
            {
              "x": -96.75,
              "y": 24.75
            }
          ],
          "x": 402.75,
          "y": 151.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 11
        },
        {
          "x": 223.5,
          "y": 90.5,
          "radius": 8,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 448,
          "y": 193,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    // Level 8
    {
      "entities": [
        {
          "x": 23,
          "y": 218.5,
          "halfWidth": 20,
          "halfHeight": 218.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 349.5,
          "y": 418.5,
          "halfWidth": 347.5,
          "halfHeight": 19.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 348.5,
          "y": 20,
          "halfWidth": 346.5,
          "halfHeight": 19,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 679,
          "y": 221,
          "halfWidth": 20,
          "halfHeight": 216,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 242.5,
          "y": 164.5,
          "halfWidth": 213.5,
          "halfHeight": 16.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 245,
          "y": 286.5,
          "halfWidth": 211,
          "halfHeight": 16.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 5
        },
        {
          "points": [
            {
              "x": 29.33333333333337,
              "y": -47
            },
            {
              "x": 30.33333333333337,
              "y": 48
            },
            {
              "x": -60,
              "y": -1
            }
          ],
          "x": 634.6666666666666,
          "y": 226,
          "staticBody": true,
          "type": "Polygon",
          "id": 6
        },
        {
          "x": 69.5,
          "y": 199.5,
          "radius": 8,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 637,
          "y": 57.5,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    // Level 9
    {
      "entities": [
        {
          "x": 349.5,
          "y": 25.5,
          "halfWidth": 347.5,
          "halfHeight": 24.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 73.5,
          "y": 221,
          "halfWidth": 70.5,
          "halfHeight": 216,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 349.5,
          "y": 418.5,
          "halfWidth": 347.5,
          "halfHeight": 19.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 659.5,
          "y": 221.5,
          "halfWidth": 38.5,
          "halfHeight": 214.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 177.5,
          "y": 87.5,
          "radius": 8,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 436.5,
          "y": 227.5,
          "radius": 50,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "impulseInward": true,
          "impulsePercentage": 2,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 5
        },
        {
          "x": 436.5,
          "y": 227.5,
          "radius": 145,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "impulsePercentage": 1,
          "impulseInward": false,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 6
        },
        {
          "x": 436.5,
          "y": 227.5,
          "radius": 159,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "impulsePercentage": 0.2,
          "impulseInward": false,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 7
        },
        {
          "x": 436.5,
          "y": 227.5,
          "radius": 6.77,
          "staticBody": true,
          "type": "Circle",
          "sensor": true,
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    //level 10
    {
      "entities": [
        {
          "points": [
            {
              "x": -107.75,
              "y": -138.5
            },
            {
              "x": 109.25,
              "y": -0.5
            },
            {
              "x": 107.25,
              "y": 1.5
            },
            {
              "x": -108.75,
              "y": 137.5
            }
          ],
          "x": 199.75,
          "y": 222.5,
          "staticBody": true,
          "type": "Polygon",
          "id": 0
        },
        {
          "points": [
            {
              "x": -2.75,
              "y": -57.75
            },
            {
              "x": 68.25,
              "y": 15.25
            },
            {
              "x": -7.75,
              "y": 57.25
            },
            {
              "x": -57.75,
              "y": -14.75
            }
          ],
          "x": 135.75,
          "y": 374.75,
          "staticBody": true,
          "type": "Polygon",
          "id": 3
        },
        {
          "points": [
            {
              "x": -1,
              "y": -55.25
            },
            {
              "x": 69,
              "y": -15.25
            },
            {
              "x": -5,
              "y": 62.75
            },
            {
              "x": -63,
              "y": 7.75
            }
          ],
          "x": 139,
          "y": 65.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 4
        },
        {
          "points": [
            {
              "x": 194.5,
              "y": -77.5
            },
            {
              "x": 2.5,
              "y": 80.5
            },
            {
              "x": 0.5,
              "y": 81.5
            },
            {
              "x": -197.5,
              "y": -84.5
            }
          ],
          "x": 340.5,
          "y": 111.5,
          "staticBody": true,
          "type": "Polygon",
          "id": 5
        },
        {
          "points": [
            {
              "x": 7.2000000000000455,
              "y": -61.8
            },
            {
              "x": 60.200000000000045,
              "y": 6.200000000000003
            },
            {
              "x": 2.2000000000000455,
              "y": 42.2
            },
            {
              "x": 0.20000000000004547,
              "y": 42.2
            },
            {
              "x": -69.79999999999995,
              "y": -28.799999999999997
            }
          ],
          "x": 546.8,
          "y": 77.8,
          "staticBody": true,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": -97.5,
              "y": 1.75
            },
            {
              "x": 106.5,
              "y": -127.25
            },
            {
              "x": 88.5,
              "y": 122.75
            },
            {
              "x": -97.5,
              "y": 2.75
            }
          ],
          "x": 472.5,
          "y": 219.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 7
        },
        {
          "points": [
            {
              "x": 14.75,
              "y": -47.25
            },
            {
              "x": 47.75,
              "y": -12.25
            },
            {
              "x": -11.25,
              "y": 40.75
            },
            {
              "x": -51.25,
              "y": 18.75
            }
          ],
          "x": 534.25,
          "y": 368.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 8
        },
        {
          "points": [
            {
              "x": 2.3333333333333144,
              "y": -91
            },
            {
              "x": 164.33333333333331,
              "y": 42
            },
            {
              "x": -166.66666666666669,
              "y": 49
            }
          ],
          "x": 339.6666666666667,
          "y": 343,
          "staticBody": true,
          "type": "Polygon",
          "id": 9
        },
        {
          "x": 175,
          "y": 113,
          "radius": 8,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 181,
          "y": 330.5,
          "radius": 6.77,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [],
      "canvas": {
        "height": 440,
        "width": 700
      },
      "backImg": null
    },
    //level 11
    {
      "entities": [
        {
          "x": 272,
          "y": 180,
          "halfWidth": 259,
          "halfHeight": 27,
          "staticBody": true,
          "type": "Rectangle",
          "id": 0
        },
        {
          "x": 27,
          "y": 129.5,
          "halfWidth": 24,
          "halfHeight": 127.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 1
        },
        {
          "x": 348.5,
          "y": 26,
          "halfWidth": 344.5,
          "halfHeight": 26,
          "staticBody": true,
          "type": "Rectangle",
          "id": 2
        },
        {
          "x": 675,
          "y": 214.5,
          "halfWidth": 23,
          "halfHeight": 211.5,
          "staticBody": true,
          "type": "Rectangle",
          "id": 3
        },
        {
          "x": 592.5,
          "y": 414,
          "halfWidth": 101.5,
          "halfHeight": 22,
          "staticBody": true,
          "type": "Rectangle",
          "id": 4
        },
        {
          "x": 524.5,
          "y": 288,
          "halfWidth": 25.5,
          "halfHeight": 114,
          "staticBody": true,
          "type": "Rectangle",
          "id": 5
        },
        {
          "points": [
            {
              "x": 12.666666666666629,
              "y": -17.333333333333336
            },
            {
              "x": 8.666666666666629,
              "y": 22.666666666666664
            },
            {
              "x": -21.33333333333337,
              "y": -5.333333333333336
            }
          ],
          "x": 647.3333333333334,
          "y": 53.333333333333336,
          "staticBody": true,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": -1.5,
              "y": -17.25
            },
            {
              "x": 17.5,
              "y": 2.75
            },
            {
              "x": 2.5,
              "y": 18.75
            },
            {
              "x": -18.5,
              "y": -4.25
            }
          ],
          "x": 532.5,
          "y": 169.25,
          "staticBody": true,
          "type": "Polygon",
          "id": 7
        },
        {
          "x": 591,
          "y": 112,
          "radius": 6,
          "staticBody": true,
          "type": "Circle",
          "id": "pin"
        },
        {
          "x": 591,
          "y": 112,
          "halfWidth": 55,
          "halfHeight": 8,
          "staticBody": false,
          "type": "Rectangle",
          "fillStyle": "#855E42",
          "strokeStyle": "#855E42",
          "id": "bar"
        },
        {
          "x": 90.5,
          "y": 104.5,
          "radius": 8,
          "staticBody": false,
          "type": "Circle",
          "id": "ball",
          "fillStyle": "rgba(0,255,0,0.4)"
        },
        {
          "x": 601,
          "y": 363,
          "radius": 6.77,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        }
      ],
      "joints": [
        {
          "bodyId1": "pin",
          "bodyId2": "bar",
          "type": "Revolute",
          "id": "hj",
          "jointAttributes": {
            "motorSpeed": -4,
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
    //Level 12
    {
      "entities": [
        {
          "points": [
            {
              "x": -102,
              "y": -15.5
            },
            {
              "x": 112,
              "y": -17.5
            },
            {
              "x": 128,
              "y": 15.5
            },
            {
              "x": -138,
              "y": 17.5
            }
          ],
          "x": 255,
          "y": 412.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 0
        },
        {
          "points": [
            {
              "x": 29,
              "y": -44.5
            },
            {
              "x": 58,
              "y": -6.5
            },
            {
              "x": -40,
              "y": 41.5
            },
            {
              "x": -47,
              "y": 9.5
            }
          ],
          "x": 413,
          "y": 383.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 1
        },
        {
          "points": [
            {
              "x": -58.80000000000001,
              "y": -9
            },
            {
              "x": 75.19999999999999,
              "y": -28
            },
            {
              "x": 90.19999999999999,
              "y": 7
            },
            {
              "x": -46.80000000000001,
              "y": 38
            },
            {
              "x": -59.80000000000001,
              "y": -8
            }
          ],
          "x": 501.8,
          "y": 346,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 2
        },
        {
          "points": [
            {
              "x": -21.5,
              "y": -46.25
            },
            {
              "x": 61.5,
              "y": 25.75
            },
            {
              "x": 33.5,
              "y": 62.75
            },
            {
              "x": -73.5,
              "y": -42.25
            }
          ],
          "x": 90.5,
          "y": 370.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 3
        },
        {
          "points": [
            {
              "x": -28.799999999999997,
              "y": -161.2
            },
            {
              "x": 16.200000000000003,
              "y": -113.19999999999999
            },
            {
              "x": 21.200000000000003,
              "y": 82.80000000000001
            },
            {
              "x": 21.200000000000003,
              "y": 84.80000000000001
            },
            {
              "x": -29.799999999999997,
              "y": 106.80000000000001
            }
          ],
          "x": 48.8,
          "y": 239.2,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 4
        },
        {
          "points": [
            {
              "x": 56.5,
              "y": -59.5
            },
            {
              "x": 54.5,
              "y": -21.5
            },
            {
              "x": -31.5,
              "y": 57.5
            },
            {
              "x": -79.5,
              "y": 23.5
            }
          ],
          "x": 96.5,
          "y": 67.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 5
        },
        {
          "points": [
            {
              "x": 122.5,
              "y": -19.25
            },
            {
              "x": 89.5,
              "y": 15.75
            },
            {
              "x": -94.5,
              "y": 19.75
            },
            {
              "x": -117.5,
              "y": -16.25
            }
          ],
          "x": 245.5,
          "y": 26.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 6
        },
        {
          "points": [
            {
              "x": -43,
              "y": -55.5
            },
            {
              "x": 69,
              "y": 19.5
            },
            {
              "x": 25,
              "y": 49.5
            },
            {
              "x": -51,
              "y": -13.5
            }
          ],
          "x": 387,
          "y": 55.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 7
        },
        {
          "points": [
            {
              "x": 111,
              "y": -13.5
            },
            {
              "x": 76,
              "y": 29.5
            },
            {
              "x": -91,
              "y": 21.5
            },
            {
              "x": -96,
              "y": -37.5
            }
          ],
          "x": 503,
          "y": 84.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 8
        },
        {
          "points": [
            {
              "x": 5.25,
              "y": -43.25
            },
            {
              "x": 20.25,
              "y": 35.75
            },
            {
              "x": -9.75,
              "y": 16.75
            },
            {
              "x": -15.75,
              "y": -9.25
            }
          ],
          "x": 592.75,
          "y": 119.25,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 9
        },
        {
          "points": [
            {
              "x": 23.5,
              "y": -31.75
            },
            {
              "x": 26.5,
              "y": 34.25
            },
            {
              "x": -24.5,
              "y": 25.25
            },
            {
              "x": -25.5,
              "y": -27.75
            }
          ],
          "x": 571.5,
          "y": 166.75,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 10
        },
        {
          "points": [
            {
              "x": -12.200000000000045,
              "y": -9.800000000000011
            },
            {
              "x": 13.799999999999955,
              "y": -16.80000000000001
            },
            {
              "x": 17.799999999999955,
              "y": 14.199999999999989
            },
            {
              "x": -7.2000000000000455,
              "y": 19.19999999999999
            },
            {
              "x": -12.200000000000045,
              "y": -6.800000000000011
            }
          ],
          "x": 593.2,
          "y": 201.8,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 11
        },
        {
          "points": [
            {
              "x": 22.25,
              "y": -31.5
            },
            {
              "x": 24.25,
              "y": 31.5
            },
            {
              "x": -21.75,
              "y": 19.5
            },
            {
              "x": -24.75,
              "y": -19.5
            }
          ],
          "x": 571.75,
          "y": 238.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 12
        },
        {
          "points": [
            {
              "x": -4,
              "y": -16.75
            },
            {
              "x": 18,
              "y": -10.75
            },
            {
              "x": 5,
              "y": 19.25
            },
            {
              "x": -19,
              "y": 8.25
            }
          ],
          "x": 590,
          "y": 274.75,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 13
        },
        {
          "points": [
            {
              "x": -26.75,
              "y": -16
            },
            {
              "x": 27.25,
              "y": -17
            },
            {
              "x": 27.25,
              "y": 20
            },
            {
              "x": -27.75,
              "y": 13
            }
          ],
          "x": 578.75,
          "y": 293,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 14
        },
        {
          "points": [
            {
              "x": -2,
              "y": -13.5
            },
            {
              "x": 26,
              "y": -17.5
            },
            {
              "x": -9,
              "y": 31.5
            },
            {
              "x": -15,
              "y": -0.5
            }
          ],
          "x": 589,
          "y": 320.5,
          "staticBody": true,
          "sensor": false,
          "type": "Polygon",
          "id": 15
        },
        {
          "x": 225,
          "y": 145,
          "radius": 41,
          "staticBody": true,
          "sensor": true,
          "water": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 16
        },
        {
          "x": 221,
          "y": 286.5,
          "radius": 40,
          "staticBody": true,
          "sensor": true,
          "water": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 17
        },
        {
          "points": [
            {
              "x": -20.5,
              "y": 4.25
            },
            {
              "x": 29.5,
              "y": -16.75
            },
            {
              "x": 11.5,
              "y": 6.25
            },
            {
              "x": -20.5,
              "y": 6.25
            }
          ],
          "x": 341.5,
          "y": 221.75,
          "staticBody": true,
          "sensor": true,
          "water": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 18
        },
        {
          "points": [
            {
              "x": -23.80000000000001,
              "y": -10.199999999999989
            },
            {
              "x": 7.199999999999989,
              "y": -12.199999999999989
            },
            {
              "x": 24.19999999999999,
              "y": 8.800000000000011
            },
            {
              "x": 16.19999999999999,
              "y": 22.80000000000001
            },
            {
              "x": -23.80000000000001,
              "y": -9.199999999999989
            }
          ],
          "x": 343.8,
          "y": 236.2,
          "staticBody": true,
          "sensor": true,
          "water": true,
          "type": "Polygon",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": 19
        },
        {
          "x": 114,
          "y": 214,
          "radius": 6.77,
          "staticBody": true,
          "sensor": true,
          "type": "Circle",
          "fillStyle": "rgba(255,0,0,0.2)",
          "id": "goal"
        },
        {
          "x": 551.5,
          "y": 204,
          "radius": 6.708203932499369,
          "staticBody": false,
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