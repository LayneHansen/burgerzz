// Create a new burger
// adds to list
// adds Crush button

$(function () {
  $("#submit").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      reqBurger: $("#burger-text").val().trim(),
    };
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).done(
      function () {
        console.log("Created new burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#crush-burger").on("click", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");
    console.log(newBurger, id);
    var crushedBurger = {
      devoured: newBurger
    }
    console.log("crushed");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: crushedBurger
    })
    console.log("crushed again")
      .done(function () {
        console.log(newBurger);
        console.log("Crushed burger");
        location.reload();
      });
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   })
  //   .done(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

});

// 

// Crush a burger
// moves to Crushed column