$('#btnSearch').prop('disabled', true);
$('#search').keyup(function() {
    if ($(this).val().length >= 3) {
        $('#btnSearch').prop('disabled', false);
    } else {
        $('#btnSearch').prop('disabled', true);
    }
});

function Cargardata(count) {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, 'i');

    $.getJSON('/books-schema.json', function(data) {
        var output = '<ul id="resultado">';
        var dataToShow = data.data.slice(0, count);
        $.each(dataToShow, function(i, item) {
            if ((item.title.search(myExp) != -1) || (item.teaser.search(myExp) != -1)) {
                output += '<li>';
                output += '<span class="image"><img src=' + item.image + '/></span>';
                output += '<span class="title">' + '<h3>' + item.title + '</h3>' + '</span>';
                output += '<span class="description">' + '<p>' + item.teaser + '</p>' + '</span>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $('content').html(output);
    });

}

/*CARGANDO 9 ITEMS*/

$(document).ready(function() {
    Cargardata(9);
});

/*BOTÓN BUSCAR Y ENTER INPUT*/

$('#btnSearch').click(function() {
    Cargardata();
});

$('#search').keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        if ($(this).val().length > 2) {
            $("#mensaje").text("");
            Cargardata();
            return false;
        } else {
            $("#mensaje").text("Ingrese mínimo tres caracteres");
            return false;
        }
    }
});

/*valida solo textos*/

$("#search").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


/*AUTOCOMPLETE*/
var ajax = new XMLHttpRequest();
ajax.open("GET", "/books-schema.json", true);
ajax.onload = function() {
    var list = JSON.parse(ajax.responseText).data.map(function(item) { return item.title; });
    new Awesomplete(document.querySelector("#search"), { list: list, minChars: 3, maxItems: 7 });
};
ajax.send();