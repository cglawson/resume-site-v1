$(document).ready(function() {
  $duration = 500;

  if ($(document).width() <= 800) { // Mobile
    $count = 1; // Default to 'in'
    $('#menu-button').click(function() {
      if ($count % 2 == 1) { // Menu out

        $('#rela').css("left", "-282px");
        $('#menu-button').css("left", "250px");
        $('#side-bar').css("left", "0px");
        $('#avatar').css("left", "0px");

        $count++;
      } else { // Menu in

        $('#rela').css("left", "-562px");
        $('#menu-button').css("left", "10px");
        $('#side-bar').css("left", "-240px");
        $('#avatar').css("left", "-240px");

        $count++;
      }
    });
  } else { // Desktop
    $count = 2; // Default to 'out'
    smoothScroll.init();
    $('#menu-button').click(function() {
      if ($count % 2 == 1) { // Menu out
        $('#rela').animate({
          "left": "-282px"
        }, $duration, function() {});
        $('#side-bar').animate({
          "left": "0px"
        }, $duration, function() {});

        $('#avatar').animate({
          "left": "0px"
        }, $duration, function() {});

        $('#menu-button').animate({
          "left": "250px"
        }, $duration, function() {});

        $count++;
      } else { // Menu in
        $('#rela').animate({
          "left": "-562px"
        }, $duration, function() {});
        $('#side-bar').animate({
          "left": "-240px"
        }, $duration, function() {});

        $('#avatar').animate({
          "left": "-240px"
        }, $duration, function() {});

        $('#menu-button').animate({
          "left": "10px"
        }, $duration, function() {});

        $count++;
      }
    });
  }
});