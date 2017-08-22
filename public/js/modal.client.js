console.log("modal.client.js loaded")

$(".modal-button").on("click", function() {
  $('#normalModal').modal('show');
  console.log("clicked");
})