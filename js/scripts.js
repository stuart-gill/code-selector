$(document).ready(function() {
  $('#quiz').submit(function(event) {
    event.preventDefault();
    var income = $("input:radio[name=income]:checked").val();
    var companyType = $("input:radio[name=companyType]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    var android = $("input:radio[name=android]:checked").val();


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
