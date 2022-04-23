const telefonos = document.querySelectorAll(".main__img");

let indice = 0;
function opacity() {
    telefonos.forEach((telefono) => {
        telefono.classList.remove("active");
    });
    telefonos[indice].classList.toggle("active");

    if (indice >= telefonos.length - 1) {
        indice = 0;
    } else {
        indice++;
    }
}
setInterval(() => {
    opacity();
}, 2000);

const body = document.querySelector("body");

setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    body.classList.add("auto");
    setTimeout(() => {
        document.querySelector("#loadSpiner").style.display = "none";
        document.querySelector("#loadUser").style.display = "block";
    }, 2000);
}, 1500);

//===== variables =====
const cambiarCuenta = document.querySelector("#cambiar-cuenta");
const registrarte = document.querySelector("#registrarte");
const userCorreo = document.querySelector("#user-correo");
const userUsuario = document.querySelector("#user-user");
const crearCuenta = document.querySelector(".crear__cuenta");
const entrar = document.querySelector("#entrar");
const inicioFacebook = document.querySelector("#inicio-facebook");
const inicioFacebookDos = document.querySelector("#inicio-facebook-dos");
const olvidarPassword = document.querySelector("#olvidar-password");
const header = document.querySelector("#header-clase");
const telefonoContenedor = document.querySelector("#telefono-contenedor");

const creaCuentaNueva = document.querySelector("#crea-cuentaNueva");
const iniciarSesion = document.querySelector("#iniciar-sesion");
const recuperacion = document.querySelector("#recuperacion");
const main = document.querySelector("#main");

cambiarCuenta.addEventListener("click", (e) => {
    e.preventDefault();
    userUsuario.style.display = "none";
    userCorreo.style.display = "block";
});
registrarte.addEventListener("click", (e) => {
    e.preventDefault();
    userCorreo.style.display = "none";
    crearCuenta.style.display = "block";
});
entrar.addEventListener("click", (e) => {
    e.preventDefault();
    crearCuenta.style.display = "none";
    userCorreo.style.display = "block";
});
inicioFacebook.addEventListener("click", iniciarSesionFacebook);
inicioFacebookDos.addEventListener("click", iniciarSesionFacebook);

function iniciarSesionFacebook(e) {
    e.preventDefault();
    crearCuenta.style.display = "none";
    userCorreo.style.display = "none";
    userUsuario.style.display = "block";
}
olvidarPassword.addEventListener("click", (e) => {
    e.preventDefault();
    main.classList.add("active");
    header.classList.add("active");
    telefonoContenedor.classList.add("active");
    crearCuenta.style.display = "none";
    userCorreo.style.display = "none";
    userUsuario.style.display = "none";
    recuperacion.style.display = "block";
});

creaCuentaNueva.addEventListener("click", (e) => {
    e.preventDefault();
    main.classList.add("active");
    header.classList.remove("active");
    telefonoContenedor.classList.remove("active");
    recuperacion.style.display = "none";
    crearCuenta.style.display = "block";
});
iniciarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    main.classList.add("active");
    header.classList.remove("active");
    telefonoContenedor.classList.remove("active");
    recuperacion.style.display = "none";
    userCorreo.style.display = "block";
});
