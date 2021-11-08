class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="FooterPage" class="footer-page">
        <div class="container">
          <div class="footer-inner-wrapper">
            <div class="footer-menu-wrapper">
              <li><a href="#">About</a></li>
              <li><a href="#">Our Service</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Find Us</a></li>
              <div class="footer-menu-social-wrapper">
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
              </div>
            </div>
            <div class="footer-copyright-wrapper">
              <span>© Copyright 2021|Aesthetics Architects Co.,Ltd.|All Rights Reserved.|Designed by Belong-to</span></a>
            </div>
            <div class="footer-messenger-btn">
              <a href="#"><i class="fab fa-facebook-messenger"></i></a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-page', Footer);
