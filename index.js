function enviarMensaje(){
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if(email && asunto && mensaje){
        var url = encodeURI("https://script.google.com/macros/s/AKfycbxVkHH6CQTfYBWFf10BlK_x_dX_tDr8ngo7ekqksnAr5T-E6CKyfuzYjZo4kZofQvMopQ/exec?email="+email+"&asunto="+asunto+"&mensaje="+mensaje);
        fetch(url)
            .then(response => response.json())
            .then(()=>{
                document.getElementById("mensajeEnviado").style.display = "block";
            });
        
    }
}
