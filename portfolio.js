(function () {
  const header = document.querySelector(".componente-header");
  compenenteHeader(header);
  const footer = document.querySelector(".componente-footer");
  componenteFooter(footer);

  function getWorks() {
    return fetch(
      "https://cdn.contentful.com/spaces/1nvnrsg149bu/environments/master/entries?access_token=F2XY51GA8g6LjxYvMgk8BfVK2FFUkq0nkNyTB1l1X3E&content_type=work"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const fieldsCollections = data.items.map((item) => {
          return {
            title: item.fields.titulo,
            description: item.fields.descripcion,
            link: item.fields.url,
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
    template.content.querySelector(".portfolio__trabajo-link").href =
      params.link;
    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }

  getWorks().then(function (trabajos) {
    for (const w of trabajos) {
      addServiceCard(w);
    }
  });
})();
