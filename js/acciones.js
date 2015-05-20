// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
	 $ ('#calcular') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
   $ ('#btn_inicio') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
	var nombre;
    var dia;
    var mes;
    var ano;	
$(document).ready(function(e) {

$('#btn_calcular').click(function(e){
		var diac;
		diac = $('#cbo_dia').val();
		var mesc;
		mesc = $('#cbo_mes').val();
		var anoc;
		anoc = $('#cbo_ano').val();
		var fecha_actual = new Date ();
		var fecha_proximo = new Date (fecha_actual.getFullYear(),mesc ,diac);
		// fecha proxima
		var fecha_actual = new Date (fecha_actual.getFullYear(), fecha_actual.getMonth(), fecha_actual.getDate());
		// fecha actual del año actual 
		var fecha_nacimiento = new Date (anoc,mesc ,diac);
		var edad = fecha_actual.getFullYear()-anoc;
		
		if (fecha_proximo <= fecha_actual)
		{
			fecha_proximo = new Date (fecha_proximo.getFullYear()+1,fecha_proximo.getMonth(),fecha_proximo.getDate());
			
		}
		else
		{
			edad=edad-1
		}
		var dias_faltantes = (fecha_proximo - fecha_actual)/1000/60/60/24;
		
		dias_faltantes = Math.round(dias_faltantes);
		
		
		$('#dias').text( $('#txt_nombre').val() + ' Faltan ' + dias_faltantes + ' dias para tu cumplaños '); 
	
		
		 $('#edad').text('Tienes '+ edad  +  ' Anos hoy');
		 
		if (dias_faltantes <7)
		{
		
		}
		else
		{
			
		  
		}
		
});
      
	 
	 $('#btn_inicio').click(function(e){
		$('#txt_nombre').val('')
		$('#cbo_dia').val('')
		$('#cbo_mes').val('')
		$('#cbo_ano').val('')
		
		
});

});//ready

});


