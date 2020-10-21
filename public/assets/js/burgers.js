// Create a new burger
  // adds to list
  // adds Crush button

$(function () {
  $("#submit").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newBurger = $(this).data("burger-text");

    var newBurgerMade = {
      name: $("burger-text").val().trim(),
    };
    
    $.ajax("/api/cats/" + id {
      type: "PUT",
      data: newBurgerMade
    }).then(
      function() {
        console.log("Created new burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
      );
    });
    
  //   $.ajax("/api/burgers", {
  //     type: "POST",
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