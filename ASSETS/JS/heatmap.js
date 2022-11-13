$(document).ready(function () {
    console.log("start system ... ");
    //INCLUSÃO DE BOTÕES PARA DICIONAR OS ICONES
    $( "<img src='./ICONES/capacete.png' width='100' height='100' class='capaceteAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/NCAmbientalMenor.png' width='100' height='100' class='NCAMenAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/NCAmbientalMaior.png' width='100' height='100' class='NCAMaiAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/eventoAp.png' width='100' height='100' class='EventoApAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/eventograve.png' width='100' height='100' class='EventoGraveAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/eventongrave.png' width='100' height='100' class='EventoNGraveAdd'/>" ).appendTo( "#addIcones");
    //ATRELADO A FUNÇÃO addIcon AOS BOTÕES
    $( ".capaceteAdd" ).on("click", {ic:"capacete"}, addIcon);       
    $( ".NCAMenAdd" ).on("click", {ic:"NCAmbientalMenor"}, addIcon);  
    $( ".NCAMaiAdd" ).on("click", {ic:"NCAmbientalMaior"}, addIcon);    
    $( ".EventoApAdd" ).on("click", {ic:"eventoAp"}, addIcon);    
    $( ".EventoGraveAdd" ).on("click", {ic:"eventograve"}, addIcon);    
    $( ".EventoNGraveAdd" ).on("click", {ic:"eventongrave"}, addIcon);
    
    function addIcon (event) {
        var data = event.data;
        switch (data.ic) {
            //capacete
            case "capacete":
                $( "<img src='./ICONES/capacete.png' width='100' height='100' class='capaceteIco' width='100' height='100' class='NCAMenIco'/>" ).appendTo( "#layoutSr");
                $( ".capaceteIco" ).draggable().on("click", {ref:"capacete"}, escondeTudo).on("dblclick", mostraTudo);
                break;
            //NCAmbientalMenor
            case "NCAmbientalMenor":
                $( "<img src='./ICONES/NCAmbientalMenor.png' width='100' height='100' class='NCAMenIco'/>" ).appendTo( "#layoutSr");
                $( ".NCAMenIco" ).draggable().on("click", {ref:"NCAmbientalMenor"}, escondeTudo).on("dblclick", mostraTudo); 
                break;
            //NCAmbientalMaior
            case "NCAmbientalMaior":
                $( "<img src='./ICONES/NCAmbientalMaior.png' width='100' height='100' class='NCAMaiIco'/>" ).appendTo( "#layoutSr");
                $( ".NCAMaiIco" ).draggable().on("click", {ref:"NCAmbientalMaior"}, escondeTudo).on("dblclick", mostraTudo);  
                break;
            //eventoAp
            case "eventoAp":
                $( "<img src='./ICONES/eventoAp.png' width='100' height='100' class='eventoApIco'/>" ).appendTo( "#layoutSr");
                $( ".eventoApIco" ).draggable().on("click", {ref:"eventoAp"}, escondeTudo).on("dblclick", mostraTudo);  
                break;
            //eventograve
            case "eventograve":
                $( "<img src='./ICONES/eventograve.png' width='100' height='100' class='eventograveIco'/>" ).appendTo( "#layoutSr");
                $( ".eventograveIco" ).draggable().on("click", {ref:"eventograve"}, escondeTudo).on("dblclick", mostraTudo);    
                break;
            //eventongrave
            case "eventongrave":
                $( "<img src='./ICONES/eventongrave.png' width='100' height='100' class='eventongraveIco'/>" ).appendTo( "#layoutSr");
                $( ".eventongraveIco" ).draggable().on("click", {ref:"eventongrave"}, escondeTudo).on("dblclick", mostraTudo);    
                break;
            //default não faz nada apenas para.
                default:
                break;
        }   
    } //function addIcon
    
    function escondeTudo (event) {
        var data = event.data;
        switch (data.ref) {
            //capacete
            case "capacete":
                //$( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");
                break;
            //NCAmbientalMenor
            case "NCAmbientalMenor":
                $( ".capaceteIco" ).addClass("esconde");
                //$( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");
                break;
            //NCAmbientalMaior
            case "NCAmbientalMaior":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                //$( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");    
                break;
            //eventoAp
            case "eventoAp":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                //$( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");    
                break;
            //eventograve
            case "eventograve":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                //$( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");    
                break;
            //eventongrave
            case "eventongrave":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                //$( ".eventongraveIco" ).addClass("esconde");   
                break;
            //default não faz nada apenas para.
                default:
                break;
        }
	$(".esconde").animate({opacity:0});
    } //function escondeTudo
    
    function mostraTudo () {
	$(".esconde").animate({opacity:100}, 500, function() {$("*").removeClass("esconde")});
       
    } //function mostraTudo
});
