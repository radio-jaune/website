
// matrix drawing the characters
function draw()
{
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, matrix_canvas.width, matrix_canvas.height);

  ctx.fillStyle = "#f4427d";//green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for(var i = 0; i < drops.length; i++)
  {
      //a random chinese character to print
      var text = matrix[Math.floor(Math.random()*matrix.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i*font_size, drops[i]*font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*font_size > matrix_canvas.height && Math.random() > 0.975)
          drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
  }
}



console.log(`Yellow Matrix MATRIX JavaScript is loaded (but JQuery Document is not ready yet)!`);




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
  console.log(`Yellow Matrix MATRIX LOADING... <<<<<`);
  console.log(`Yellow Matrix MATRIX LOADING... <<<<<`);
  console.log(`Yellow Matrix MATRIX LOADING... <<<<<`);
  console.log(`Yellow Matrix MATRIX LOADING... <<<<<`);
  console.log(`Yellow Matrix MATRIX LOADING... <<<<<`);
  console.log(`Yellow Matrix MATRIX LOADING... <<<<<`);

  // geting canvas by Boujjou Achraf
  var matrix_canvas = document.getElementById("matrix_canvas");
  var ctx = matrix_canvas.getContext("2d");
  /// var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  // var matrix = `你在这里是因为锡安即将被毁灭。它的每一个活着的居民都被消灭了，它的整个存在都被消灭了。`
  var matrix = `${matrix}หวังมันคือความหลงผิดที่เป็นแก่นสารของมนุษย์ที่มาของความแข็งแกร่งที่ยิ่งใหญ่ที่สุดของคุณและจุดอ่อนที่ยิ่งใหญ่ที่สุดของคุณไปพร้อมๆกัน`
  matrix = `${matrix}EverythingthathasabeginninghasanendIseetheendcomingIseethedarknessspreadingIseedeathAndyouareallthatstandsinhisway`
  matrix = `${matrix}ฉันรู้ว่าเธอคิดอะไรอยู่เพราะตอนนี้ฉันก็คิดแบบเดียวกันอันที่จริงฉันคิดมาตลอดตั้งแต่มาที่นี่ทำไมฉันถึงไม่กินยาเม็ดสีฟ้าล่ะ?`
  // matrix = `${matrix}你对权威有意见，安德森先生。你相信你是特别的，不知何故规则不适用于你。显然你错了`
  // matrix = `${matrix}你在这里是因为锡安即将被毁灭。它的每一个活着的居民都被消灭了，它的整个存在都被消灭了。`


  // matrix drawing the characters
  function draw()
  {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, matrix_canvas.width, matrix_canvas.height);

    ctx.fillStyle = "#E4E420"; // #f4427d //green text rgb(228 228 32)
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > matrix_canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
  }

  //making the canvas full screen
  matrix_canvas.height = window.innerHeight;
  matrix_canvas.width = window.innerWidth;

  //chinese characters - taken from the unicode charset
  //converting the string into an array of single characters
  matrix = matrix.split("");

  var font_size = 10;
  var columns = matrix_canvas.width/font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for(var x = 0; x < columns; x++)
     drops[x] = 1;

  setInterval(draw, 35);
  console.log(`Yellow Matrix MATRIX is LOADED !!!!!!!!  MATRIXXX  !!!!!!`);

});
