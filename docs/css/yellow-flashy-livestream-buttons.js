$(document).ready(function() {
  var state = 'on';

  $('.line').on('click', function() {
    // TOGGLE
    if (state == 'on') {
      state = 'off';
      // change text
      ///   $('.line').html('PAUSED');
      // change color
      $(this).toggleClass('offline').toggleClass('online');
      // Send State to php - save db

    } else {
      // change text
      ///   $('.line').html('ON AIR');
      state = 'on';
      // change color
      $(this).toggleClass('offline').toggleClass('online');
      // Send State to php - save db

    }

  });

});
