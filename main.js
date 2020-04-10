//background//
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": ["#ffffff", "#45f4f5"]
    },
    "shape": {
      "type": ["circle","star"],
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
//Messages//
var nom = document.getElementById("nom");
var messages = document.getElementById("messages");

var tailleLS = Object.keys(localStorage).length;
console.log(tailleLS);

function get(){
  if(messages.value == "")
    return;
    var commentaire = nom.value+" : "+messages.value;
    localStorage.setItem(tailleLS,commentaire);
    tailleLS++;

    var div = document.createElement("div");
    div.innerHTML = commentaire;
    div.className="comments";
    var post = document.getElementById("contact");
    post.appendChild(div);
}
var share = document.querySelector("button");
share.addEventListener("click", get);

for (var i=0 ; i<tailleLS; i++){
  var div = document.createElement("div");
  div.className="comments";
  div.innerHTML=localStorage.getItem(i);
  var post = document.getElementById("contact");
  post.appendChild(div);
}