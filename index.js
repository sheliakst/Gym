$(document).ready(() => {
  $(".neo2").click(() => {
    $(".wrapper").css("display", "none");
    $(".pop").css("display", "flex");
    $(".popNai").css("display", "inline");
  });

  $(".neo3").click(() => {
    $(".wrapper").css("display", "none");
    $(".pop").css("display", "flex");
    $(".popOxi").css("display", "inline");
  });






  $(".pop").click(() => {
    $(".wrapper").css("display", "flex");
    $(".pop").css("display", "none");
    $(".popOxi").css("display", "none");
    $(".popNai").css("display", "none");

  });

  



});
