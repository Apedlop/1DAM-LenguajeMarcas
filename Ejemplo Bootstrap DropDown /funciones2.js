var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos()
{
var x;
x=$(".enlaceazul");
x.click(function(event) {
  
   event.preventDefault();
   y=$("#columna1");
   y.load($(this).attr("href"));
  
})}

