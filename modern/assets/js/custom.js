/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */

$(document).ready(function() {
  $("#show-searchBar").on("click", function() {
    var search_widget = $("#search_widget");
    if (search_widget.is(":visible")) {
      search_widget.hide();
    } else {
      search_widget.show();
    }
  });
});
