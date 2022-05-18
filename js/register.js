
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
          
        }, false)
      })
  })()



// Validacion Formulario Registro //

const formulario = document.getElementById("form");

// 1.- Capturar los datos del formulario //

function validarFormularioRegistro () {
    const nombreCompleto = document.getElementById("nombre").value;
    const eMail = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const usuario = document.getElementById("usuario").value;
    const contra = document.getElementById("pwd").value;
    const contraR = document.getElementById("pwdR").value;

    const alertSuccess = document.getElementById("alertSuccess");
    const alertEmail = document.getElementById("alertEmail");
    const alertPass = document.getElementById("alertPass");

    localStorage.setItem("nombre", nombreCompleto);
    localStorage.setItem("email", eMail);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("pwd", contra);
    localStorage.setItem("pwdR", contraR);

}


// SETEAMOS LOS VALORES DE LOGIN POR DEFECTO
const nombreCompleto = "DP";
const eMail = "mail@mail.com";
const direccion = "AA22";
const usuario ="DP"
const contra = 1234

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Login Exitoso";
};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });

};

// FUNCION DEL EVENTO SUBMIT CON JS
formulario.addEventListener("submit", (evento) => {

    // SIEMPRE QUE EJECUTAMOS UN EVENTO DESDE JS CON HTML
    // DEBEMOS INICIALIZAR EL EVENTO
    evento.preventDefault();

    alertSuccess.classList.add("d-none");

    // GENERAMOS UN ARRAY CON LOS MENSAJES DE ERROR
    const errores = [];

    // validar email
    if (eMail.value != eMail) {
        eMail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Email Inválido",
        });
    } else {
        
        if (eMail.value.length > 35) {
            eMail.classList.add("is-invalid");

            errores.push({
                tipo: alertEmail,
                msg: "Cantidad de caracteres supera el limite",
            });
        }
        else{
            eMail.classList.remove("is-invalid");
            eMail.classList.add("is-valid");
            alertEmail.classList.add("d-none");
        }
        
    }

    // Validamos la contraseña del user

    if (parseInt(contra.value) != contra) {
        errores.push({
            tipo: alertPass,
            msg: "Contraseña Inválida",
        });
    } else {
        alertPass.classList.add("d-none");
    }

    if (errores.length != 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});