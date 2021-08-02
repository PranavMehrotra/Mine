function wel_func(){
    document.getElementById("wel_2").style.transform= "scale(0.2)";
    document.getElementById("wel_1").style.transform= "scale(0.2)";
    setTimeout(function(){document.getElementById("main").style.display="flex";
        document.getElementById("age").style.display="flex";},1400);
    setTimeout(function(){document.getElementById("wel_2").style.display="none";
        document.getElementById("wel_1").style.display="none";},1400);
    setTimeout(function(){myFunction();},3000);
}

function myFunction() {
    var person = prompt("Please enter your name:", "Harry Potter");
    var age= prompt("Please enter your age:", 18);
    if (person != null && age != null) {
      document.getElementById("main").innerHTML =
      "Hello " + person + "!";
      if (age>24){document.getElementById("age").innerHTML ="You have already passed 24!";}
         else if (age==24){document.getElementById("age").innerHTML ="You are 24!";}
      else{
      let diff=24 - age;
      if (diff==1){document.getElementById("age").innerHTML =
      "In "+diff+" year you will be 24.";}
      else{
      document.getElementById("age").innerHTML =
      "In "+diff+" years you will be 24.";}
    }
  }
}
