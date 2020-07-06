$(document).ready(function(){
  $(".search_form").submit(function(){
    var body = $("#form_field").val();

    if (body.length < 1) {
      alert('Please enter the name song of to search.');
      return false;
    }
  });

  $("#form_field").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: "information/auto_complete",
        type: "GET",
        dataType: "json",
        data: {
          track: request.term
        },
        success: function(data) {
          if (data !== null) {
            response($.map(data, function(value, key){
              return {
                  label: value,
                  value: value
              };
            }));
          }
        },
        error: function(){
          alert("Something went wrong...")
        }
      });
    },
  });

  // Turn on js-selectable class so that it becomes SELCT 2 tag
  $('.js-searchable').select2({
    allowClear: true,
    placeholder: "select name",
    width: 200
    // If you are using Bootstrap, please add　`theme: "bootstrap"` too.
  });

  $(".select2_div").change(function(){
    var name = $("#select2-Name-container").attr("title")
    $.ajax({
      url: "information/search",
      type: "GET",
      data: {
        track: name
      },
      error: function(){
        alert("Something went wrong...")
      }
    });
  });

})