$(document).ready(function(){
    $("#dialog-form").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
          "Aceptar": function() {
            // Copiar valores del diálogo al formulario
            $("#nombre").val($("#nombre_dialog").val());
            $("#apellidos").val($("#apellidos_dialog").val());
            $(this).dialog("close");
          },
          "Cancelar": function() {
            $(this).dialog("close");
          }
        }
      });
  
      // Mostrar el diálogo cuando se sitúe sobre los campos de texto
      $("#nombre, #apellidos").on("focus", function() {
        $("#dialog-form").dialog("open");
      });
    // Inicializa el calendario de jQueryUI para el campo de fecha
    $("#fecha").datepicker();

    // Inicializa la función tooltip de jQueryUI para mostrar una ventana de ayuda
    $( document ).tooltip();

    // Inicializa el diálogo que se abrirá al pasar el mouse sobre el campo de nombre o apellidos
    $( "#dialog" ).dialog({
        autoOpen: false
    });

    // Barra de desplazamiento para las horas semanales de trabajo
    $("#horas").progressbar();

    // Lista desplegable de jQueryUI para la comunidad autónoma
    $("#comunidad").acordion();

    //Boton del formulario
    $("#boton").button();
});