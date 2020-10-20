// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".add_burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newsleep");
  
      var newBurgerType = {
        sleepy: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger-text").val().trim(),
        // devoured: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  