$(function() {
  $("form").submit(function(event) {

    var originalList = [$("#itemOne").val(), $("#itemTwo").val(), $("#itemThree").val(), $("#itemFour").val(), $("#itemFive").val()];

    var alphaList = originalList.sort();

    var capsList = alphaList.map(function(cap) {
      $("ul").append('<li>' + cap.toUpperCase() + '</li>');
    });
      event.preventDefault();

      $('form').hide();
  });
});
