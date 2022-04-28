"use strict";
const body = document.querySelector("body");
const loader = document.querySelector(".loader");
const spinerTop = document.querySelector(".spinerTop");

setTimeout(() => {
    loader.style.display = "none";
    body.classList.add("auto");
    setTimeout(() => {
        spinerTop.classList.add("active");
    }, 2000);
}, 1500);

function SwiperCargar() {
    let swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        // init: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 25,
            },
            380: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
            },
            180: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 5,
            },
        },
    });
}
SwiperCargar();

////////// cargar base de datos //////////
const estados = document.querySelector("#estados");
const publicaciones = document.querySelector(".publicaciones");
const sugerenciaTop = document.querySelector("#sugerencia-top");
const sugerenciaBottom = document.querySelector("#sugerencias-bottom");
const verTodosTop = document.querySelector("#ver-todosTop");
const verTodosBottom = document.querySelector("#ver-todosBottom");
let filterTop = [...datos];
let filterBottom = [...datos];

//===== cargar los estados =====
crearEstados();
function crearEstados() {
    datos.forEach((estado) => {
        const { imagen, usuario, id } = estado;
        const section = document.createElement("section");
        section.innerHTML = `
        <div class="estados__post">
            <div class="estados__circulo" data-id="${id}">
            <img class="estados__img" src="${imagen}" alt="estados">
            </div>
            <p class="estados__user">${usuario}</p>
        </div>
        `;
        estados.appendChild(section);
    });
}
const EstadoAbierto = document.querySelectorAll(".estados__post");

EstadoAbierto.forEach((estado) => {
    estado.addEventListener("click", () => {
        estado.classList.toggle("active");
    });
});

//===== crear las publicaciones =====
crearPublicaciones();
function crearPublicaciones() {
    datos.forEach((publicacion) => {
        const {
            imagen,
            usuario,
            post,
            visualizaciones,
            texto,
            hashtags,
            comentarios,
            fecha,
            id,
        } = publicacion;
        const { uno, dos, tres, cuatro } = hashtags;
        const section = document.createElement("section");

        if (id === 1 || id === 7 || id === 8 || id === 13) {
            section.innerHTML = `
            <div class="post">
                    <div class="post__top">
                        <div class="post__usuario">
                            <div class="post__user"><img class="post__userImg" src="${imagen}" alt="user"></div>
                            <a href="#" class="post__userName">${usuario}</a>
                        </div>
                        <i class='bx bx-dots-horizontal-rounded post__userDots'></i>
                    </div>

                    <div class="post__center">
                        <iframe width="100%" height="315" class="" src="${post}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <!-- post bottom -->
                    <div class="post__bottom">
                        <div class="iconos">
                            <div class="iconos__left">
                                <div class="iconos__ico" id="heart-ico">
                                    <span class="iconos__span bx__heart"><i class='bx bx-heart iconos__i'></i></span>
                                    <span class="iconos__span bxs__heart"><i class='bx bxs-heart iconos__i'></i></span>
                                </div>

                                <div class="iconos__ico">
                                    <span class="iconos__span bx__comment"><i class='bx bx-comment iconos__i'></i></span>
                                </div>

                                <div class="iconos__ico">
                                    <span class="iconos__span bx__send"><i class='bx bx-send iconos__i'></i></span>
                                </div>
                            </div>

                            <div class="iconos__right">
                                <div class="iconos__ico" id="heart-ico">
                                    <span class="iconos__span bx__bookmark"><i class='bx bx-bookmark iconos__i'></i></span>
                                    <span class="iconos__span bxs__bookmark"><i class='bx bxs-bookmark iconos__i'></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="post__informacion">
                            <div class="post__infoContenedor">
                                <a class="post__reproducciones" href="#">${visualizaciones}</a>
                                <p class="post__description"> 
                                    <a class="post__userName" href="#">${usuario}</a>
                                    ${texto}
                                    <a class="post__hasth" href="#">${uno}</a>
                                    <a class="post__hasth" href="#">${dos}</a>
                                    <a class="post__hasth" href="#">${tres}</a>
                                    <a class="post__hasth" href="#">${cuatro}</a>
                                </p>
                                <a class="post__comentarios" href="#">${comentarios}</a>
                                <a class="post__fecha" href="#">${fecha}</a>
                            </div>
                        </div>

                    </div>
                    <div class="post__comentar">
                        <i class='bx bx-smile'></i>
                        <input class="post__input" type="text" placeholder="Añade un comentario...">
                        <a class="enlace post__linkComent" href="#">Publicar</a>
                    </div>
                </div>
        `;
        } else {
            section.innerHTML += `
            <div class="post">
                <div class="post__top">
                    <div class="post__usuario">
                        <div class="post__user"><img class="post__userImg" src="${imagen}" alt="user"></div>
                        <a href="#" class="post__userName">${usuario}</a>
                    </div>
                    <i class='bx bx-dots-horizontal-rounded post__userDots'></i>
                </div>

                <div class="post__center">
                    <img class="post__centerContenido" src="${post}" alt="post">
                </div>

                <!--- post bottom --->
                <div class="post__bottom">
                    <div class="iconos">
                        <div class="iconos__left">
                            <div class="iconos__ico" id="heart-ico">
                                <span class="iconos__span bx__heart"><i class='bx bx-heart iconos__i'></i></span>
                                <span class="iconos__span bxs__heart"><i class='bx bxs-heart iconos__i'></i></span>
                            </div>

                            <div class="iconos__ico">
                                <span class="iconos__span bx__comment"><i class='bx bx-comment iconos__i'></i></span>
                            </div>

                            <div class="iconos__ico">
                                <span class="iconos__span bx__send"><i class='bx bx-send iconos__i'></i></span>
                            </div>
                        </div>

                        <div class="iconos__right">
                            <div class="iconos__ico" id="heart-ico">
                                <span class="iconos__span bx__bookmark"><i class='bx bx-bookmark iconos__i'></i></span>
                                <span class="iconos__span bxs__bookmark"><i class='bx bxs-bookmark iconos__i'></i></span>
                            </div>
                        </div>
                    </div>

                    <div class="post__informacion">
                        <div class="post__infoContenedor">
                            <a class="post__reproducciones" href="#">${visualizaciones}</a>
                            <p class="post__description"> 
                                <a class="post__userName" href="#">${usuario}</a>
                                ${texto}
                                <a class="post__hasth" href="#">${uno}</a>
                                <a class="post__hasth" href="#">${dos}</a>
                                <a class="post__hasth" href="#">${tres}</a>
                                <a class="post__hasth" href="#">${cuatro}</a>
                            </p>

                            <a class="post__comentarios" href="#">${comentarios}</a>
                            <a class="post__fecha" href="#">${fecha}</a>
                        </div>
                    </div>

                </div>
                <div class="post__comentar">
                    <i class='bx bx-smile'></i>
                    <input class="post__input" type="text" placeholder="Añade un comentario...">
                    <a class="enlace post__linkComent" href="#">Publicar</a>
                </div>
            </div>
            `;
        }

        publicaciones.appendChild(section);
    });
}
//===== crear sugerencias top =====
crearSugerenciasTop(datos);
function crearSugerenciasTop(datos) {
    eliminaHtmlSugerencia(sugerenciaTop);
    datos.forEach((sugerencia) => {
        const { imagen, usuario, id } = sugerencia;

        const section = document.createElement("section");
        section.classList.add("sugerencias__card", "swiper-slide");

        section.innerHTML = `
                <div class="sugerencias__user"><img class="sugerencias__img" src="${imagen}" alt="user"></div>
                <i class='bx bx-x sugerencias__close' id="borrar-sugerencia" data-id="${id}"></i>
                <p class="sugerencias__userName">${usuario}</p>
                <p class="sugerencias__userSigue">Te sigue</p>
                <button class="sugerencias__userBoton" id="boton-seguir">
                    <span class="sugerencias__textBoton">Seguir</span> 
                    <span class="sugerencias__spiner"><i class='bx bx-loader-circle bx-spin' ></i></span> 
                    <span class="sugerencias__siguiendo">Siguiendo</span>
                </button>
        `;
        sugerenciaTop.appendChild(section);
    });
}
//===== filtrar sugerencias top =====
sugerenciaTop.addEventListener("click", (e) => {
    if (e.target.id == "borrar-sugerencia") {
        const dataId = parseInt(e.target.getAttribute("data-id"));

        filterTop = filterTop.filter((sugerencia) => {
            return sugerencia.id !== dataId;
        });
        crearSugerenciasTop(filterTop);
        SwiperCargar();
        EventoBtnSeguir();
    }
});
//===== resetear sugerencias top =====
verTodosTop.addEventListener("click", (e) => {
    e.preventDefault();
    filterTop = [...datos];
    crearSugerenciasTop(datos);
    SwiperCargar();
    EventoBtnSeguir();
});

//===== crear sugerencias bottom =====
crearSugerenciasBottom(datos);
function crearSugerenciasBottom(datos) {
    eliminaHtmlSugerencia(sugerenciaBottom);
    datos.forEach((sugerencia) => {
        const { imagen, usuario, id } = sugerencia;

        const section = document.createElement("section");
        section.classList.add("sugerencias__card", "swiper-slide");

        section.innerHTML = `
                <div class="sugerencias__user"><img class="sugerencias__img" src="${imagen}" alt="user"></div>
                <i class='bx bx-x sugerencias__close' id="borrar-sugerencia" data-id="${id}"></i>
                <p class="sugerencias__userName">${usuario}</p>
                <p class="sugerencias__userSigue">Te sigue</p>

                <button class="sugerencias__userBoton" id="boton-seguir">
                    <span class="sugerencias__textBoton">Seguir</span> 
                    <span class="sugerencias__spiner"><i class='bx bx-loader-circle bx-spin' ></i></span> 
                    <span class="sugerencias__siguiendo">Siguiendo</span>
                </button>
        `;
        sugerenciaBottom.appendChild(section);
    });
}

//===== filtrar sugerencias bottom =====
sugerenciaBottom.addEventListener("click", (e) => {
    if (e.target.id == "borrar-sugerencia") {
        const dataId = parseInt(e.target.getAttribute("data-id"));
        filterBottom = filterBottom.filter((sugerencia) => {
            return sugerencia.id !== dataId;
        });
        crearSugerenciasBottom(filterBottom);
        SwiperCargar();
        EventoBtnSeguir();
    }
});
//===== resetear sugerencias bottom =====
verTodosBottom.addEventListener("click", (e) => {
    e.preventDefault();
    filterBottom = [...datos];
    crearSugerenciasBottom(datos);
    SwiperCargar();
    EventoBtnSeguir();
});
//===== limpiar html de sugerencias =====
function eliminaHtmlSugerencia(contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

////////// boton toggle seguir //////////
EventoBtnSeguir();
function EventoBtnSeguir() {
    const botonSeguir = document.querySelectorAll("#boton-seguir");
    botonSeguir.forEach((boton) => {
        boton.addEventListener("click", () => {
            boton.classList.add("active");
            setTimeout(() => {
                boton.classList.remove("active");
                boton.classList.add("siguiendo");
            }, 2000);
            boton.addEventListener("click", () => {
                if (boton.classList.contains("active")) {
                    boton.classList.remove("active");
                }
                if (boton.classList.contains("siguiendo")) {
                    boton.classList.remove("siguiendo");
                }
                return;
            });
            return;
        });
    });
}
////////// heart toggle //////////
const buscador = document.querySelector("#buscador");
const navegacion = document.querySelectorAll(".navegacion .ico");
const user = document.querySelector("#user");

//===== evento de input header =====
buscador.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        e.target.parentElement.classList.add("active");
    }
    if (e.target.id === "buscador-close") {
        e.target.parentElement.querySelector(".buscador__input").value = "";
        e.target.parentElement.classList.remove("active");
    }
});

//===== evento de toggle iconos header =====
navegacion.forEach((item) => {
    item.addEventListener("click", () => {
        navegacion.forEach((active) => {
            active.classList.remove("active");
            item.classList.add("active");
        });
        if (item.id === "user-toggle") {
            item.classList.contains("active");
            user.classList.toggle("active");
        }
    });
});

/////////// posts toggle //////////
const iconosIco = document.querySelectorAll("#heart-ico");
const postComentar = document.querySelectorAll(".post__input");

//===== evento de iconos =====
iconosIco.forEach((ico) => {
    ico.addEventListener("click", () => {
        ico.classList.toggle("active");
    });
});
////////// toggle enlace item seguir aside //////////
const enlaceItem = document.querySelectorAll(".enlace__item");
enlaceItem.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
//===== evento del input comentar =====
postComentar.forEach((input) => {
    input.addEventListener("input", (e) => {
        if (e.target.value !== "") {
            e.target.parentElement
                .querySelector(".post__linkComent")
                .classList.add("active");
        } else {
            e.target.parentElement
                .querySelector(".post__linkComent")
                .classList.remove("active");
        }
    });
});

/////////// footer close aplication //////////
const aplicationClose = document.querySelector("#aplication-close");
//===== evento de icono close =====
aplicationClose.addEventListener("click", () => {
    aplicationClose.parentElement.classList.add("active");
});
