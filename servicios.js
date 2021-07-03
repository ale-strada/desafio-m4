(function () {
  const header = document.querySelector(".componente-header");
  compenenteHeader(header);
  const footer = document.querySelector(".componente-footer");
  componenteFooter(footer);

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
    const template = document.querySelector("#portfolio__card-template");
    const container = document.querySelector(".portfolio__trabajos-container");

    template.content.querySelector(".portfolio__trabajo-titulo").textContent =
      params.title;
    template.content.querySelector(
      ".portfolio__trabajo-descripcion"
    ).textContent = params.description;
    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }

  getServices().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
})();
