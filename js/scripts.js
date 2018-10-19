$(document).ready(function() {
  $('#quiz').submit(function(event) {
    event.preventDefault();
    var person1 = $("input#person1").val();
    var income = $("input:radio[name=income]:checked").val();
    var companyType = $("input:radio[name=companyType]:checked").val();
    var work = $("input:radio[name=work]:checked").val();
    var android = $("input:radio[name=android]:checked").val();
    var computer = $("input:radio[name=computer]:checked").val();
    var qArray = [income, companyType, work, android, computer];
    alert(person1);

    if (qArray.includes("badFit")) {
      alert("Bad Fit");
    }
    else if (android === 'no' || android === 'maybe'){
      if (companyType === 'government'){
        alert("PHP");
      }
      else if (companyType === 'startup'){
        alert("Ruby");
      }
      else if (companyType === 'established'){
        alert("C#");
      }
      else if (work === 'marketing'){
        alert("PHP");
      }
      else if (work === 'web'){
        alert("Ruby")
      }
      else {
        alert("Java");
      }
    }
    else if (companyType === 'enterprise' || work === 'backend' || android === 'yes') {
      alert("Java");
    }
    else {
      alert("C#");
    }
    // else if (companyType === 'startup') {
      // $("img").hide();
      // $("#tyrion").show();
    // }
  });
});
