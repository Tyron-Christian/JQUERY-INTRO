// CAPITOLO DEDICATO AGLI EFFETTI CON JQUERY

//jQuery nascondi() e mostra()

// funziona nascondi
$("#hide").click(function(){
    $("p").hide(1000); // è possibile inserire quanto tempo ci vuole nelle parentesi di HIDE
  });
  
// funzione mostra
  $("#show").click(function(){
    $("p").show();
  });

  // ATTIVA E DISATTIVA CON TOGGLE

  
  $("button").click(function(){
    $("h5").toggle();
  });