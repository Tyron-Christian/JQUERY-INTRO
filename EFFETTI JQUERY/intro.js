// INTRODUZIONE A JQUERY, SI PARTE!

// importante, jquery può essere scaricato oppure inserito tramite cdn dentro l'head di html


// le prima basi di sintassi con degli esercizi 

$(this).hide(); // nasconde l'elemento 

$('p').hide(); // nasconde gli elementi pù

$(".demo").hide(); // nasconde le classi 
$("#demo").hide(); // nasconde gli ID

// una prassi molto importante è quella di mettere ready nelle nostre funzione, questa è abbreviata: 
$(function(){
    // codice
})


// EVENTI IN JQUERY
$("p").click(); // evento del click

$("p").click(function(){
    // codice da eseguire...
})

// dbclick che nasconde questo elemento
$(".test").dblclick(function(){
    $(this).hide();
  });


// funzione quando il mouse si trova sopra la scritta desiderata
$("#mouse").mouseenter(function(){
    alert("Cazzo vuoi?");
  });


/* ci sono moltissime funzioni col mouse a questo link: https://www.w3schools.com/jquery/jquery_events.asp */

