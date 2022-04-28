"use strict";
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
}, 3000);

const body = document.querySelector("body");
const loader = document.querySelector(".loader");
const loadeSpiner = document.querySelector("#loadSpiner");
const loaderUser = document.querySelector("#loadUser");

setTimeout(() => {
    loader.style.display = "none";
    body.classList.add("auto");
    setTimeout(() => {
        loadeSpiner.style.display = "none";
        loaderUser.style.display = "block";
    }, 2000);
}, 1500);

//===== variables =====
const userCorreo = document.querySelector("#user-correo");
const userUsuario = document.querySelector("#user-user");
const crearCuenta = document.querySelector(".crear__cuenta");
const header = document.querySelector("#header-clase");
const telefonoContenedor = document.querySelector("#telefono-contenedor");
const recuperacion = document.querySelector("#recuperacion");
const main = document.querySelector("#main");

main.addEventListener("click", (e) => {
    if (e.target.id === "entrar-instagram") {
        loaderUser.style.display = "none";
        loadeSpiner.style.display = "block";
        setTimeout(() => {
            location.href = "../src/html/inicio.html";
        }, 2000);
    }
    if (e.target.id === "cambiar-cuenta") {
        e.preventDefault();
        userUsuario.style.display = "none";
        userCorreo.style.display = "block";
    }
    if (e.target.id === "olvidar-password") {
        e.preventDefault();
        main.classList.add("active");
        header.classList.add("active");
        telefonoContenedor.classList.add("active");
        crearCuenta.style.display = "none";
        userCorreo.style.display = "none";
        userUsuario.style.display = "none";
        recuperacion.style.display = "block";
    }
    if (e.target.id === "crea-cuentaNueva") {
        e.preventDefault();
        main.classList.remove("active");
        header.classList.remove("active");
        telefonoContenedor.classList.remove("active");
        userCorreo.style.display = "none";
        recuperacion.style.display = "none";
        crearCuenta.style.display = "block";
    }
    if (e.target.id === "entrar") {
        e.preventDefault();
        crearCuenta.style.display = "none";
        userCorreo.style.display = "block";
    }
    if (e.target.id === "inicio-facebook") {
        e.preventDefault();
        crearCuenta.style.display = "none";
        userCorreo.style.display = "none";
        userUsuario.style.display = "block";
    }
    if (e.target.id === "inicio-sesion") {
        e.preventDefault();
        main.classList.remove("active");
        header.classList.remove("active");
        telefonoContenedor.classList.remove("active");
        recuperacion.style.display = "none";
        userCorreo.style.display = "block";
    }
    //===== evento  del input=====
    if (e.target.classList.contains("main__input")) {
        e.target.addEventListener("input", (e) => {
            if (e.target.value != "") {
                e.target.parentElement.classList.add("active");
            } else {
                e.target.parentElement.classList.remove("active");
            }
        });
    }
});

////////// validar formulario de iniciar sesion //////////
const iniciarCorreo = document.querySelector("#iniciar-correo");
const iniciarPassword = document.querySelector("#iniciar-contraseña");
const inicioBtn = document.querySelector("#enviar-formulario-iniciar");
const inicioError = document.querySelector("#error");
const errorPhone = document.querySelector("#error-phone");
const loaderBtn = document.querySelector(".main__loaderBtn");
const spanBtn = document.querySelector(".main__spanBtn");
const formularioIniciarSession = document.querySelector(
    "#formulario-iniciarSession"
);

let inicioSessionForm = {
    email: "",
    password: "",
};

//===== eventos =====
iniciarCorreo.addEventListener("input", (e) => {
    inicioSessionForm.email = e.target.value;
    inicioBtnHabilitar();
});
iniciarPassword.addEventListener("input", (e) => {
    inicioSessionForm.password = e.target.value;
    inicioBtnHabilitar();
});
formularioIniciarSession.addEventListener("submit", validarInicioSesion);
function inicioBtnHabilitar() {
    if (iniciarCorreo.value != "" && iniciarPassword.value != "") {
        inicioBtn.classList.add("habilitar", "enviar");
    } else {
        inicioBtn.classList.remove("habilitar", "enviar");
    }
}
function validarInicioSesion(e) {
    e.preventDefault();
    if (inicioError.classList.contains("active")) {
        inicioError.classList.remove("active");
    }
    const { email, password } = inicioSessionForm;
    if (email != "" && password !== "") {
        if (inicioBtn.classList.contains("enviar")) {
            spanBtn.classList.add("display");
            loaderBtn.classList.add("active");

            setTimeout(() => {
                spanBtn.classList.remove("display");
                loaderBtn.classList.remove("active");

                inicioError.classList.add("active");
                setTimeout(() => {
                    inicioError.classList.remove("active");
                }, 2000);

                errorPhone.classList.add("active");
                body.style.overflow = "hidden"
                errorPhone.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (e.target.id === "error-phone") {
                        body.style.overflow = "auto"
                        errorPhone.classList.remove("active");
                    }
                    if (e.target.id === "error-link") {
                        e.preventDefault();
                        body.style.overflow = "auto"
                        errorPhone.classList.remove("active");
                    }
                });
            }, 2000);
        }
    }
}
