
function numberGenerator(min, max) {
  let localMin = min;
  let localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;
} // END OF FUNCTION numberGenerator

// -----------------------------------------------------------------------------

function carousel() {

  new Vue({

    el: "#containerId",
    data: {
      "url1": "img/edinburgh1.jpg",
      "url2": "img/edinburgh2.jpg",
      "url3": "img/edinburgh3.jpg",
      "url4": "img/edinburgh4.jpg",
      "url5": "img/edinburgh5.jpg",
      "url6": "img/edinburgh6.jpg",
      "url7": "img/inverness1.jpg",
      "url8": "img/inverness2.jpg",
      "url9": "img/scotland1.jpg",
      "url10": "img/scotland2.jpg",
      "url11": "img/scotland3.jpg",
      "url12": "img/tartan1.png"
    }, // END OF DATA

    methods: {
      forward: function() {
        console.log("FORWARD");
      }, // END OF FORWARD

      backwards: function() {
        console.log("BACKWARDS");
      } // END OF BACKWARDS

    } // END OF METHODS

  }); // END OF VUE

} // END OF FUNCTION IMAGES

// --------------END BONUS------------------------------------------------------

function init () {
  carousel();

}

$(init);
// -----------------------------------------------------------------------------
