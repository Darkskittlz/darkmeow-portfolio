const particlesConfig = {
    "background": {
      "color": {
        "value": "#000000"
      },
      "image": "url('https://github.com/Darkskittlz/Background-Samples/blob/main/src/assets/BandingoGithubURL2.png?raw=true')",
      "position": "62% 49%",
      "repeat": "no-repeat",
      "background-position": "cover",
      "size": "100%"
    },
    "backgroundMask": {
      "cover": {
        "color": {
          "value": "#000000"
        }
      }
    },
    "fullScreen": {
      "zIndex": "0"
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "bubble"
        }
      },
      "modes": {
        "bubble": {
          "distance": 250,
          "duration": 2,
          "opacity": 0,
          "size": 0,
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "selectors": []
          }
        },
        "grab": {
          "distance": 400
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#fff"
              }
            }
          }
        },
        "repulse": {
          "distance": 400,
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "selectors": []
          }
        }
      }
    },
    "particles": {
      "color": {
        "value": "#1FCA01"
      },
      "links": {
        "color": {
          "value": "#000"
        },
        "distance": 150,
        "opacity": 0.4
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 600
          }
        },
        "enable": true,
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": true,
        "speed": 1,
        "spin": {}
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 160
      },
      "opacity": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 0,
          "max": 1
        },
        "animation": {
          "enable": true,
          "speed": 1,
          "minimumValue": 0
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 3
        },
        "animation": {
          "speed": 4,
          "minimumValue": 0.3
        }
      }
    }
  }
  
  export default particlesConfig