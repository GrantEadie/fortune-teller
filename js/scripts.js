$(document).ready(function(){
  $("form#fortune_teller").submit(function(event) {
    event.preventDefault();
    $("#fortune").show();

    let array = [];

    $("input:checkbox[name=personality]:checked").each(function(){
      const fortuneAttributes = $(this).val();
      array.push(fortuneAttributes);
      });

      let newArray = array.toString();
      alert(newArray);

        if (newArray === "dogs,cats") {
          alert("you're an animal person");
        } else if (newArray === "dogs,cats,rain") {
          alert("you're a strange person");
        } else if (newArray === "dogs") {
          alert("you just like dogs");
        } else if (newArray === "cats") {
          alert("you just like cats");
        } else {
          alert("you don't like any animals"); 
        }
      $('#fortune_teller').hide();
    });
  });