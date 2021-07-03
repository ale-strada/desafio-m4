function contacto(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<section class="contacto__container">
<div class="contacto__title-container">
    <h2 class="contacto__title">Escribime</h2>
</div>
<form class="contacto__formulario-container">
    <div class="contacto__container-input">
        <label class="contacto__label" for="nombre" name="nombre">Nombre</label>
        <input type="text" class="contacto__input" id="nombre">
    </div>
    <div class="contacto__container-input">
        <label class="contacto__label" for="email" name="email">Email</label>
        <input type="email" class="contacto__input" id="email">
    </div>
    <div class="contacto__container-input">
        <label class="contacto__label" for="mensaje" name="mensaje">Mensaje</label>
        <textarea cols="30" rows="10" class="contacto__input textarea" id="mensaje"></textarea>
    </div>
    <button class="contacto__boton contacto__input">Enviar</button>
</form>

</section>`;

  const formEl = componentEl.querySelector(".contacto__formulario-container");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const objeto = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value,
    };
    fetch("https://apx-api.vercel.app/api/utils/dwf ", {
      method: "POST",
      body: JSON.stringify({
        to: objeto.email,
        message: objeto.mensaje,
      }),
      headers: { "content-type": "application/json" },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
  });

  el.appendChild(componentEl);
}
