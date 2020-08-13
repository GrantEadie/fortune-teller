


// user interface
$(document).ready(function() {
  $("form#profileInfo").submit(function(event) {
    event.preventDefault();
    let age = $("#age").val();
    let color = $("#favColor").val();
    let wyr = $("input:radio[name=wyr]:checked").val();

    $(".skeleton, .barney, .batman, .edward, .karen").hide();


    if (age) {   
      if (age < 18) {
        alert("You're to young, go back to school!");
        }
        else if (age > 65) {
          $(".skeleton, .matchTitle").show(1000);    
        }
        else if (age >= 18 && age < 25 || wyr === "jumping") {
          $(".barney, .matchTitle").show(500);
        }  
        else if (color === "Black" && wyr === "savingPeople") {
          $(".batman, .matchTitle").show(500);
        } 
        else if (color === "Black" && wyr === "gardening") {
          $(".edward, .matchTitle").show(500);
        }
        else if (color === "white" || wyr === "complaining" ) {
          $(".karen, .matchTitle").show(500); 
        }        
        else {
          $(".batman, .matchTitle").show(500);
        }      
      }
      else {
        alert("Please enter your age");
      }
  });
});

