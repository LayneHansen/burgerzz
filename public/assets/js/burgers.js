// Create a new burger
  // adds to list
  // adds Crush button

$(function () {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
    reqBurger: $("#burger-text").val().trim(),
    };
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).done(
      function() {
        console.log("Created new burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
      );
  });

    $("#crush-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurger");
      console.log(newBurger);
      // var crushedBurger = {
      //   devoured: newBurger
      // }
    })
    
  //   $.ajax("/api/burgers", {
  //     type: "PUT",
  //     data: newBurger
  //   })
  //   .then(function () {
  //     console.log(newBurger);
  //     console.log("Created new burger");
  //     location.reload();
  //   });
  // });
});

// 

// Crush a burger
// moves to Crushed column