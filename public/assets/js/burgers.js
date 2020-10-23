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

  $(".crush-burger").on("click", function (event) {
    var id = $(this).data("id");
    newBurger = 1;
    console.log(newBurger, id);
    var crushedBurger = {
      devoured: newBurger
    }
    console.log("crushed");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: crushedBurger
    })
    .done(function () {
      console.log("Crushed burger", crushedBurger);
      location.reload();
    });
    console.log("crushed again")
  });

});
