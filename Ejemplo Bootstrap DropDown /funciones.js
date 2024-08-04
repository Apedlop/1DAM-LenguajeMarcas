var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos()
{
var x;
x=$("#enlaceazul");
x.click(presionEnlace)
}
function presionEnlace()
{
    y=$("#columna1");
    //alert($(this).attr("href"));
   // y.html("<p>nuevo texto</p>");
   
   y.load($(this).attr("href"));
}
