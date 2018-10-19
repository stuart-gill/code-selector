$(document).ready(function() {
  $('#quiz').submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();
    var gender = $("#gender").val();
    var companyType = $("input:radio[name=companyType]:checked").val();
    var work = $("input:radio[name=work]:checked").val();


    if (age > 40 && rpg == 'palladin') {
      $("img").hide();
      $("#cersei").show();
    }
    else if (gender == 'female') {
      $("img").hide();
      $("#tyrion").show();
    }
    else {
      $("img").hide();
      $("#meli").show();
    }
  });
});
