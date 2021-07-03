function compenenteHeader(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<div class="header__container">
  <img src="./imagenes/logo-para-ale.png" alt="" class ="header__logo">
<div class="header__menu-container">
  <button class="header__abrir-menu">☰</button>
  <div class="header__menu">
      <button class="header__cerrar-menu">X</button>
      <div class="header__menu-opciones-container">
       <a href="./portfolio.html" class="header__menu-opcion">Portfolio</a>
       <a href="./servicios.html" class="header__menu-opcion">Servicios</a>
       <a href="./contacto.html" class="header__menu-opcion">Contacto</a>   
      </div>   
  </div>
</div>
</div>`;

  const botonAbrirMenuEl = componentEl.querySelector(".header__abrir-menu");
  const botonCerrarMenuEl = componentEl.querySelector(".header__cerrar-menu");
  const menuEl = componentEl.querySelector(".header__menu");
  botonAbrirMenuEl.addEventListener("click", () => {
    menuEl.style.display = "inherit";
  });
  botonCerrarMenuEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });

  el.appendChild(componentEl);
}
