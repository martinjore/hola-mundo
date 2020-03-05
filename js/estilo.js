$(document).ready(function(){
    $("#menu ul.botonera li a").click(function(evento){
       alert("Has pulsado el enlace...");
    });
    $("#hmtl").html("<i>inicio</i>");
    
 })
    
 $(document).on("mouseenter","#menu ul.botonera li a",function(){
   $(this).css("background-color","#de6aa8");
   $(this).css("font-size","18px");
   $(this).css("font-family","times new roman")
   $(this).css("color","blue");
 })
  

 $(document).on("mouseout","#menu ul.botonera li a",function(){
   $(this).css("font-size","20px");
   $(this).css("color","#fff");
   $(this).css("background-color","#d12c2c");
   $(this).css("font-family","Inknut Antiqua") 
 })
 