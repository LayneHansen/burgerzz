// Create a new burger
  // adds to list
  // adds Crush button

$(function () {
  $("#submit").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("burger-text").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    })
    .then(function () {
      console.log(newBurger);
      console.log("Created new burger");
      location.reload();
    });
  });
});

// Crush a burger
  // moves to Crushed column