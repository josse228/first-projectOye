function validar(formulario) {
  
    var validacion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*--------Validacion para el campo del EMAIL--------*/
    if (formulario.email.value.trim().length == 0){
      document.getElementById("errorEmail").innerText = "Email invalido";
      formulario.email.focus();
      return false;
    } else if (!validacion.test(formulario.email.value.trim())){
      document.getElementById("errorEmail").innerText = "El valor ingresado no es un email";
      formulario.email.focus()
      return false;
    }
/*--------Validacion para el campo de la CONTRASEÑA--------*/ 
    if (formulario.contraseña.value.trim().length == 0){
      document.getElementById("errorContraseña").innerText = "Contraseña inválida, mínimo 8 caracteres.";
      formulario.contraseña.focus();
      return false;
    } else if(formulario.contraseña.value.trim().length < 8){
      document.getElementById("errorContraseña").innerText = "La contraseña debe tener al menos 8 caracteres.";
      formulario.contraseña.focus();
      return false;
    }
/*--------Validacion para el campo de la CONFIRMACION CONTRASEÑA--------*/ 
    if(formulario.contraseña.value != formulario.confirmacion.value){
      document.getElementById("confirmacionContraseña").innerText = "Las contraseñas no coinciden.";
      formulario.confirmacion.focus();
      return false;
    }
/*--------Validacion para el campo de MUSICA FAVORITA--------*/ 
    if (formulario.musicaFavorita.value == ""){
      document.getElementById("errorGenero").innerText = "Debe seleccionar un género.";
      return false;
    }
/*--------Validacion para el campo de la EDAD--------*/    
    if(formulario.edad.value == ""){
        document.getElementById("errorEdad").innerText = "Debe agregar un rango de edad.";
        return false;
      }
/*--------Validacion para el campo de TERMINOS Y CONDICIONES-------*/     
    if(!formulario.terminos.checked){
      document.getElementById("errorTerminos").innerText = "Debe aceptar los términos.";
      return false;
    }
/*--------Mensaje de registro exitoso--------*/   
    alert("Registro exitoso.");
  
    return true;
  }
  