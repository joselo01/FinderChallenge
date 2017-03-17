$('#btnSearch').click(function () {
  var searchField = $('#search').val();
  var myExp = new RegExp(searchField, 'i');

  $.getJSON('/books-schema.json', function (data) {
    var output = '<ul id="resultado">';

    $.each(data.data, function (key, item) {
      if ((item.title.search(myExp) != -1) || (item.teaser.search(myExp) != -1)) {
        output +='<li>';
        output +='<span class="image"><img src=' + item.image + '/></span>';
        output +='<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        output +='<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        output +='</li>';
      }
    });

    output += '</ul>';
    $('content').html(output);
  });
});


