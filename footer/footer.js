function componenteFooter(el) {
  const componentFooterEl = document.createElement("div");
  componentFooterEl.innerHTML = `
  <section class="footer">
        <img src="./imagenes/logo-para-ale.png" alt="logo ale" class="footer__logo">
        <div class="footer__redes-container">
            <div class="footer__redes-box">
                <label for="" class="footer__redes">Instagram</label>
                <img src="./imagenes/logo-insta.png" alt="" class="footer__redes-logo">
            </div>
            <div class="footer__redes-box">
               <label for="" class="footer__redes">Linkedin</label>
                <img src="./imagenes/logo-linkedin.png" alt="" class="footer__redes-logo"> 
            </div>
            <div class="footer__redes-box">
                <label for="" class="footer__redes">Github</label>
                 <img src="./imagenes/github-transparente.png" alt="" class="footer__redes-logo">
            </div>
        </div>
    </section>
  `;
  el.appendChild(componentFooterEl);
}
