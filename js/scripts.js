$(document).ready(function() {
  $('#quiz').submit(function(event) {
    event.preventDefault();
    var income = $("input:radio[name=income]:checked").val();
    var companyType = $("input:radio[name=companyType]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    var android = $("input:radio[name=android]:checked").val();
    var computer = $("input:radio[name=computer]:checked").val();
    var qArray = [income, companyType, work, android, computer];


    if (qArray.includes("badFit")) {
      alert("Bad Fit");
    }

    if (income === 'yes') {
      alert("yes");
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
