//PARA ADICIONAR A IMAGEM QUANDO CLICAR NELA USAR:
//$( "<b>hello</b>" ).appendTo( "body" ); 

$(document).ready(function () {
    console.log("start system ... ");
    $( "<img src='/ICONES/capacete.png' width='100' height='100' class='capaceteAdd'/>" ).appendTo( "#addIcones");
    console.log("start system ... ");
    $( "<img src='/ICONES/NCAmbientalMenor.png' width='100' height='100' class='NCAMenAdd'/>" ).appendTo( "#addIcones");
    console.log("start system ... ");
    
    $( "<img src='/ICONES/NCAmbientalMaior.png' width='100' height='100' class='NCAMaiAdd'/>" ).appendTo( "#addIcones");
    
    $( "<img src='/ICONES/eventoAp.png' width='100' height='100' class='EventoApAdd'/>" ).appendTo( "#addIcones");
    
    $( "<img src='/ICONES/eventograve.png' width='100' height='100' class='EventoGraveAdd'/>" ).appendTo( "#addIcones");
    
    $( "<img src='/ICONES/eventongrave.png' width='100' height='100' class='EventoNGraveAdd'/>" ).appendTo( "#addIcones");
    
    $( ".capaceteAdd" ).on("click", {ic:"capacete"}, addIcon);
    console.log("start system ... ");    
    $( ".NCAMenAdd" ).on("click", {ic:"NCAmbientalMenor"}, addIcon);
    console.log("start system ... ");    
    $( ".NCAMaiAdd" ).on("click", {ic:"NCAmbientalMaior"}, addIcon);    
    $( ".EventoApAdd" ).on("click", {ic:"eventoAp"}, addIcon);    
    $( ".EventoGraveAdd" ).on("click", {ic:"eventograve"}, addIcon);    
    $( ".EventoNGraveAdd" ).on("click", {ic:"eventongrave"}, addIcon);
    
    
    function addIcon (event) {
        var data = event.data;
        switch (data.ic) {
            //capacete
            case "capacete":
                $( "<img src='/ICONES/capacete.png' width='100' height='100' class='capaceteIco' width='100' height='100' class='NCAMenIco'/>" ).appendTo( "#addIcones");
                $( ".capaceteIco" ).draggable();  
                break;
            //NCAmbientalMenor
            case "NCAmbientalMenor":
                $( "<img src='/ICONES/NCAmbientalMenor.png' width='100' height='100' class='NCAMenIco'/>" ).appendTo( "#addIcones");
                $( ".NCAMenIco" ).draggable();  
                break;
            //NCAmbientalMaior
            case "NCAmbientalMaior":
                $( "<img src='/ICONES/NCAmbientalMaior.png' width='100' height='100' class='NCAMaiIco'/>" ).appendTo( "#addIcones");
                $( ".NCAMaiIco" ).draggable();    
                break;
            //eventoAp
            case "eventoAp":
                $( "<img src='/ICONES/eventoAp.png' width='100' height='100' class='eventoApIco'/>" ).appendTo( "#addIcones");
                $( ".eventoApIco" ).draggable();    
                break;
            //eventograve
            case "eventograve":
                $( "<img src='/ICONES/eventograve.png' width='100' height='100' class='eventograveIco'/>" ).appendTo( "#addIcones");
                $( ".eventograveIco" ).draggable();    
                break;
            //eventongrave
            case "eventongrave":
                $( "<img src='/ICONES/eventongrave.png' width='100' height='100' class='eventongraveIco'/>" ).appendTo( "#addIcones");
                $( ".eventongraveIco" ).draggable();    
                break;
        
                default:
                break;
        }
        
    }
    
    
});