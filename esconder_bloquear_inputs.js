document.addEventListener('DOMContentLoaded',function(){
    var chSim = document.getElementById('chSim');
    var chNao = document.getElementById('chNao');
 
    chNao.addEventListener('change', esconderCampos);
    chSim.addEventListener('change', esconderCampos);
 
    function esconderCampos(){
       var campos = document.querySelectorAll('#nome, #fazenda,#animais');
    
       if(chNao.checked){
          campos.forEach(function(campos){
                campos.value ='';
                campos.disabled = true;
                campos.closest('.form-group').style.display='none';//esconde os combos
          })}
          
          else{
          campos.forEach(function(campos){
             campos.disabled = false;
             campos.closest('.form-group').style.display='';//faz os campos aparecerem
          })}
    }
 });
 
document.addEventListener('DOMContentLoaded', function() {
    var chSim = document.getElementById('chSim');
    var chNao = document.getElementById('chNao');
 
    chNao.addEventListener('change', desabilitarCampos);
    chSim.addEventListener('change', desabilitarCampos);
 
    function desabilitarCampos() {
        var campos = document.querySelectorAll('#nome, #fazenda,#animais');
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 
        if (chNao.checked) {
            campos.forEach(function(campo) {
                campo.value = '';
                campo.disabled = true; // Desabilita os campos de texto
            });
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = false;
                checkbox.disabled = true; // Desabilita os checkboxes
            });
        }
         else {
            campos.forEach(function(campo) {
                campo.disabled = false; // Habilita os campos de texto
            });
            checkboxes.forEach(function(checkbox) {
                checkbox.disabled = false; // Habilita os checkboxes
            });
        }
    }
 });