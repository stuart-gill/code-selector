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

    var path;
    if (person1 != ""){
      if (qArray.includes("badFit")) {
        path = ("a close look at other options apart from programming");
      }
      else if (android === 'no' || android === 'maybe'){
        if (companyType === 'government'){
          path = ("PHP");
        }
        else if (companyType === 'startup'){
          path = ("Ruby");
        }
        else if (companyType === 'established'){
          path = ("C#");
        }
        else if (work === 'marketing'){
          path = ("PHP");
        }
        else if (work === 'web'){
          path = ("Ruby")
        }
        else {
          path = ("Java");
        }
      }
      else if (companyType === 'enterprise' || work === 'backend' || android === 'yes') {
        path = ("Java");
      }
      else {
        path = ("C#");
      }
      $(".person1").text(person1);
      $(".path").text(path);
      $("#result").show("slow");
    }
    else{
      alert("Please enter your full name");
    }
  });
});
