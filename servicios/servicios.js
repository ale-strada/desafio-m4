function componenteServicios(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <section class="servicios">
    <h2 class="servicios__title">Mis servicios</h2>
      <div class="servicios__container"></div> 
  </section>
  <template id="servicios-card-template">
  <div class="servicios__box">
      <img src="./imagenes/ICONO-PC.png" alt="FOTO SERVICE" class="servicios__icono">
      <h3 class="servicios__titulo-servicio">Un servicio</h3>
      <p class="servicios__descripcion-servicio">algun servicio ejemplo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim obcaecati nemo dolorem excepturi quo, unde architecto voluptatibus! Maxime officiis cumque veritatis, ullam esse nostrum velit. Veritatis dolorem vero quis!</p>
  </div>
  </template>
    `;
  function getServices() {
    return fetch(
      "https://cdn.contentful.com/spaces/1nvnrsg149bu/environments/master/entries?access_token=F2XY51GA8g6LjxYvMgk8BfVK2FFUkq0nkNyTB1l1X3E&content_type=service"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const fieldsCollections = data.items.map((item) => {
          return {
            title: item.fields.tituloServicio,
            description: item.fields.descripcionServicio,
          };
        });

        return fieldsCollections;
      });
  }

  function addServiceCard(params = {}) {
    const template = componentEl.querySelector("#servicios-card-template");
    const container = componentEl.querySelector(".servicios__container");

    template.content.querySelector(".servicios__titulo-servicio").textContent =
      params.title;
    template.content.querySelector(
      ".servicios__descripcion-servicio"
    ).textContent = params.description;
    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }

  getServices().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
  el.appendChild(componentEl);
}
