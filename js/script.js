
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

      "activeImg": 0,
      // ARRAY WITH IMG PATH STRINGS
      "images": ["img/roma1.jpg", "img/roma2.jpg", "img/roma3.jpg", "img/roma4.jpg", "img/roma5.jpg", "img/roma6.jpg", "img/roma7.jpg", "img/roma8.jpg", "img/roma9.jpg", "img/roma10.jpg", "img/roma11.jpg", "img/roma12.png"]
    }, // END OF DATA

    methods: {

      forward: function() {

        if (this.activeImg == (this.images.length - 1)) {
          this.activeImg = 0;
        } else {
          this.activeImg++;
        }
      }, // END OF FORWARD

      backwards: function() {

        if (this.activeImg == 0) {
          this.activeImg = this.images.length - 1;
        } else {
          this.activeImg--;
        }
      }, // END OF BACKWARDS

    } // END OF METHODS

  }); // END OF VUE

} // END OF FUNCTION CAROUSEL

// --------------END BONUS------------------------------------------------------

function init () {
  carousel();

}

$(init);
// -----------------------------------------------------------------------------
