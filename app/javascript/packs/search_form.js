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
    theme: "bootstrap",
    width: 250
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

  // For Sortable
  $("#names_for_drag_and_drop").sortable({
    axis: 'y',
    update: function(){
      var new_sequence = []
      $(this).children().each(function(){
          new_sequence.push($(this).attr("id"))
      })
      $.ajax({
        url: "/information/update_sort",
        type: "POST",
        data: {
          infos: new_sequence
        }
      })
    }
  });

})