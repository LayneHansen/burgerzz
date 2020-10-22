// Create a new burger
  // adds to list
  // adds Crush button

$(function () {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    // var id = $(this).data("id");
    var newBurger = {
    name: $("#burger-text").val().trim(),
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