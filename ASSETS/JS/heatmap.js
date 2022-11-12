//PARA ADICIONAR A IMAGEM QUANDO CLICAR NELA USAR:
//$( "<b>hello</b>" ).appendTo( "body" ); 

$(document).ready(function () {
    $( "<img src='/ICONES/capacete.png' width='100' height='100' class='capaceteAdd'/>" ).appendTo( "#addIcones");
    $( ".capaceteAdd" ).click(function() {
        $( "<img src='/ICONES/capacete.png' width='100' height='100' class='capaceteIco'/>" ).appendTo( "#addIcones");
        $( ".capaceteIco" ).draggable();
      });
    
    
});