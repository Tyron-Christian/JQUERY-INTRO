// EFFETTO SLIDE CON JQUERY

// l'effetto si chiama slide toggle

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow"); //utilizza la funzione slidetoggle
    });
  });