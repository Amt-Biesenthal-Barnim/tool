var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang_rckseite",
      "name": "Eingang_Rückseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.004155545838081309,
        "pitch": 0.0780511992240065,
        "fov": 1.5465028311360536
      },
      "linkHotspots": [
        {
          "yaw": -0.014497634186216857,
          "pitch": 0.2614973317095135,
          "rotation": 0,
          "target": "1-flur_eg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-flur_eg",
      "name": "Flur_EG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.052636913949040576,
        "pitch": 0.07442091088801206,
        "fov": 1.5465028311360536
      },
      "linkHotspots": [
        {
          "yaw": -3.05801871722473,
          "pitch": 0.05287481637118674,
          "rotation": 0,
          "target": "0-eingang_rckseite"
        },
        {
          "yaw": -1.509062525796569,
          "pitch": 0.11961686123338211,
          "rotation": 0,
          "target": "3-flur_eg_west"
        },
        {
          "yaw": 1.514062508359042,
          "pitch": 0.1161753267033987,
          "rotation": 0,
          "target": "2-flur_eg_ost"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-flur_eg_ost",
      "name": "Flur_EG_Ost",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.049286030804015724,
          "pitch": 0.27697261280310315,
          "rotation": 0,
          "target": "1-flur_eg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-flur_eg_west",
      "name": "Flur_EG_West",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06430398816395311,
          "pitch": 0.16385295044344517,
          "rotation": 0,
          "target": "1-flur_eg"
        },
        {
          "yaw": -1.2698717795502894,
          "pitch": 0.400361856950731,
          "rotation": 0,
          "target": "4-zimmer_111"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-zimmer_111",
      "name": "Zimmer_111",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8528522639818217,
          "pitch": 0.41410946555501305,
          "rotation": 0,
          "target": "3-flur_eg_west"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Plottkeallee aus Kinder Perspektive",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": 0,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
