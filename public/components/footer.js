class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="FooterPage" class="footer-page">
        <div class="container">
          <div class="footer-inner-wrapper">
            <div class="footer-menu-wrapper">
              <li><a href="/about.html">About</a></li>
              <li><a href="/#ServicePage">Our Service</a></li>
              <li><a href="/award.html">Awards</a></li>
              <li><a href="/work.html">Works</a></li>
              <li><a href="/#ContactPage">Find Us</a></li>
              <div class="footer-menu-social-wrapper">
                <li>
                  <a href="https://www.facebook.com/Aesthetics-Architects-134045520724930" target="_blank"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="https://instagram.com/aesarchitects" target="_blank"><i class="fab fa-instagram"></i></a>
                </li>
              </div>
            </div>
            <div class="footer-copyright-wrapper">
              <span>© Copyright 2022 | Aesthetics Architects Co., Ltd. | All Rights Reserved. | Designed by <a href="http://www.belongto.com/main/index.html" target="_blank">Belong-To</a></span></a>
            </div>
            <div class="footer-messenger-btn">
              <a><i class="fab fa-facebook-messenger"></i></a>
            </div>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-page', Footer)
