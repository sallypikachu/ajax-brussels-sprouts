
$('#get-dish').on('click', function(event) {
  event.preventDefault();

  var request = $.ajax({
    method: "GET",
    url: "/dishes/random.json",
  });

  request.done(function(newDish) {
    alert(newDish['dish']);
  });
});
