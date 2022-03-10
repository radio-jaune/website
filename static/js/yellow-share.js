console.log("Yellow Share JavaScript is loaded (but JQuery Document is not ready yet)!");
$(document).ready(function() {
  /// ----- /// ----- ///
  /// Initialize clicked state
  /// ----- /// ----- ///
  if ($('.yellow.social.share').hasClass("clicked")) {
    $('.yellow.social.share').removeClass("clicked");
  }
  // --- Init yellow flash for the share button
  setInterval(function () {
    /// set clicked state
    if ($('.float-circle.yellow.social.share').hasClass("clicked")) {
      console.log(`just don't do anything`)
    } else {
      $('.yellowcontainer.tabs.yellow.tabbed.livestreams.yellow.social.share').toggleClass("yellowflash");
      $(".float-circle.yellow.social.share").removeClass("no-animation");
      $('.float-circle.yellow.social.share').toggleClass("open");
      /*
      if ($('.float-circle.yellow.social.share').hasClass("open")) {
        $('.float-circle.yellow.social.share').removeClass("open").addClass("open");
      } else {
        $('.float-circle.yellow.social.share').addClass("open");
      }
  */
      /* **> bad idea of course
      setInterval(function () {
        $('.yellowcontainer.tabs.yellow.tabbed.livestreams.yellow.social.share').toggleClass("yellowflash");
        $(".float-circle.yellow.social.share").addClass("no-animation");
        $('.float-circle.yellow.social.share').removeClass("open");
      }, 500);
      */
  
    }

  }, 6000);
  /*
  */
  setInterval(function () {
    $('.yellowcontainer.tabs.yellow.tabbed.livestreams.yellow.social.share').toggleClass("yellowflash");
    $(".float-circle.yellow.social.share").addClass("no-animation");
    $('.float-circle.yellow.social.share').removeClass("open");
  }, 4000);

  $('.share-alt.yellow.social.share').on('click', function(e) {
    $(".branch.yellow.social.share").removeClass("no-animation");
    $('.branch.yellow.social.share').toggleClass("open");
  });

  $('.social.yellow.social.share').on('click', function(e) {
    $(".container.yellow.social.share").removeClass("no-animation");
    $(".container.yellow.social.share").toggleClass("open");
  });

  $('.main-button.share.yellow.social.share').on('click', function(e) {
    /// set clicked state
    if ($('.float-circle.yellow.social.share').hasClass("clicked")) {
      $('.float-circle.yellow.social.share').removeClass("clicked").addClass("clicked");
    } else {
      $('.float-circle.yellow.social.share').addClass("clicked");
    }
    /// toggle look n  feel
    $(".float-circle.yellow.social.share").removeClass("no-animation");
    $(".float-circle.yellow.social.share").toggleClass("open");
  });

  $('.main-button.share.yellow.social.share').mouseenter(function() {
    $('.yellowcontainer.tabs.yellow.tabbed.livestreams.yellow.social.share').toggleClass("yellowflash");
		$(".float-circle.yellow.social.share").removeClass("no-animation");
		if ( $( ".float-circle.yellow.social.share" ).hasClass( "open" ) ) {
			/// console.log(` ><++>>>> Yellow Share has social links opened, no need to toggle them when mouse enters the main button...`)
		} else {
      /// console.log(` ><++>>>> Yellow Share has social links closed, so we need to toggle them opened when mouse enters the main button!!!!`)
			$(".float-circle.yellow.social.share").toggleClass("open");
		}
  });

  $('.main-button.share.yellow.social.share').mouseleave(function() {
    $('.yellowcontainer.tabs.yellow.tabbed.livestreams.yellow.social.share').toggleClass("yellowflash");
  });
  console.log("Yellow Share Component ready!");
});
