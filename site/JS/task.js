



var i = $('input[type="checkbox"]');
i.on('click', function() {
  var total = 0;
  i.each(function() {
    if ($(this).prop('checked')) {
     total += parseInt($(this).val());  
    }
  });
  $('progress').val(total);
});


// This program is a task list / to-do list.

