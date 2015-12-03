
$('#get-dish').on('click', function(event) {
  event.preventDefault();

  // $.ajax({
  //   method: "GET",
  //   url: "/dishes/random.json",
  // })
  //
  // .done(function(newDish) {
  //   alert(newDish['dish']);
  // });
  debugger;
  postAjax();
});

var postAjax = function(){
  debugger;
  $.ajax({
    method: "POST",
    url: "/hi",
    data: { message: "hello" }
  })
  .done(function(dataFromServer){
    debugger;
  })
}
