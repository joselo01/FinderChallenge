$(document).ready( function() {
$.getJSON("/books-schema.json",
		/* MENUS */
function(data) {
		$.each(data.entities.categories[0], function(i, item) {
      //$('#categoria').append($('<li>').attr('id', item.id).html(item.label));
      $('#categoria').append($('<li>').attr('id', (item.label).toLowerCase()).html(item.label));
  });

    $.each(data.entities.lang[0], function(i, item) {
    	$('#idioma').append($('<li>').attr('id', item.id).html(item.label));	
  });
		$.each(data.entities.edition[0], function(i, item) {
    	$('#presentacion').append($('<li>').attr('id', item.id).html(item.label));	
  });
		$.each(data.entities.saved, function(i, item) {
    	$("<li>").html(item.label).appendTo("#busqueda");	
  });

		/* FIN MENUS */
	
	var projectHTML = '<ul id="resultado">';

    $.each(data.data, function(i, item) {
    	
        if (i>8) return false; 
        {
        	projectHTML += '<li>';
            projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
            projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
            projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
            projectHTML += '</li>';
        }
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

		})	


    function filtrar_por_categoria(peliculas,categoria) {
    var matches=[];
    peliculas.forEach(function(pelicula) {
       if(pelicula.categories.indexOf(categoria)!==-1) {
         matches.push(pelicula);
       }
    });
    return matches;
}

  function filtrar_por_idiomas(libros,idioma) {
    var matches=[];
    libros.forEach(function(libro) {
       if(libro.lang.indexOf(idioma)!==-1) {
         matches.push(libro);
       }
    });
    return matches;
}


function filtrar_por_edicion(libros,edition) {
    var matches=[];
    libros.forEach(function(libro) {
       if(libro.mode.indexOf(edition)!==-1) {
         matches.push(libro);
       }
    });
    return matches;
}


$.getJSON("/books-schema.json", function(data) {

      /* FILTRO POR CATEGORIA */
    $('#cTodos').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      $.each(data.data, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });



    $('#terror').on('click', function() {
      var projectHTML = '<ul id="resultado">';
      var peliculas_de_horror = filtrar_por_categoria(data.data,'horror');
      $.each(peliculas_de_horror, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });

    $('#comedia').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var peliculas_de_comedia = filtrar_por_categoria(data.data,'comedy');
      $.each(peliculas_de_comedia, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });

    $('#drama').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var peliculas_de_drama = filtrar_por_categoria(data.data,'drama');
      $.each(peliculas_de_drama, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });

    /* FIN FILTRO CATEGORIA */


    /* FILTRO POR IDIOMA */


     $('#iTodos').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      $.each(data.data, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });



    $('#idioma li#1').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var libros_idioma = filtrar_por_idiomas(data.data, 1);
      $.each(libros_idioma, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });


    $('#idioma li#2').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var libros_idioma = filtrar_por_idiomas(data.data, 2);
      $.each(libros_idioma, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });


    $('#idioma li#3').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var libros_idioma = filtrar_por_idiomas(data.data, 3);
      $.each(libros_idioma, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });

      /* FIN FILTRO IDIOMA */


      /* FILTRO MODE */ 

      $('#presentacion li#1').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var libros_edicion = filtrar_por_edicion(data.data, 1);
      $.each(libros_edicion, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });

      $('#presentacion li#2').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var libros_edicion = filtrar_por_edicion(data.data, 2);
      $.each(libros_edicion, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });


      $('#presentacion li#3').on('click', function() {

      var projectHTML = '<ul id="resultado">';
      var libros_edicion = filtrar_por_edicion(data.data, 3);
      $.each(libros_edicion, function(i, item) {
        projectHTML += '<li>';
        projectHTML += '<span class="image"><img src=' + item.image + '/></span>';
        projectHTML += '<span class="title">'+'<h3>' + item.title+ '</h3>'+'</span>';
        projectHTML += '<span class="description">'+'<p>' + item.teaser + '</p>'+'</span>';
        projectHTML += '</li>';
    }); //end each

    projectHTML +='</ul>';
    $('content').html(projectHTML);

    });


  });


   
 
  });