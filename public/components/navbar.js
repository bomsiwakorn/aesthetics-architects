class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="NavbarPage" class="navbar-page">
    <div class="container">
      <div class="navbar-inner-wrapper">
        <div class="navbar-logo">
          <a href="/"><img src="./asset/logo1.svg" alt="Logo" /></a>
        </div>
        <div class="navbar-menu-wrapper">
          <ul class="nav-menu-all">
            <div class="icon-close-sidebar" onclick="closeSidebar()">
              <div class="line1"><div class="line2"></div></div>
            </div>
            <li>
              <div class="navbar-menu-item-about-m" onclick="toggleSubMenu()">About <i class="fas fa-caret-down icon-arrow-sub-menu-about-m"></i></div>
              <ul class="navbar-menu-sub-items-m">

                  <li><a href="/about.html#TeamPage">Team</a></li>
                  <li><a href="/about.html#Experiences">Partner</a></li>
                </ul>
              <div id="nav-menu-item" class="navbar-menu-item-about-d" onmouseover="toggleSubMenu()" onmouseout="toggleSubMenu()">About <i class="fas fa-caret-down icon-arrow-sub-menu-about-d"></i>
                <ul class="navbar-menu-sub-items">

                <li><a href="/about.html#TeamPage">Team</a></li>
                <li><a href="/about.html#Experiences">Partner</a></li>
                </ul>
              </div>
            </li>
            <li><a href="/#ServicePage" onclick="closeSidebar()">Our Service</a></li>
            <li><a id="nav-menu-item" href="/award.html">Awards</a></li>
            <li><a id="nav-menu-item" href="/work.html">Works</a></li>
            <li><a href="/#ContactPage" onclick="closeSidebar()">Find Us</a></li>
            <div class="menu-social-wrapper-m">
              <li><a href="https://www.facebook.com/Aesthetics-Architects-134045520724930" target="_blank" onclick="closeSidebar()"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="https://instagram.com/aesarchitects" target="_blank" onclick="closeSidebar()"><i class="fab fa-instagram"></i></a></li>
            </div>
          </ul>
          <div class="navbar-menu-list" onclick="openSidebar()">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="navbar-menu-social">
            <a href="https://www.facebook.com/Aesthetics-Architects-134045520724930" target="_blank"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div class="navbar-menu-social">
            <a href="https://instagram.com/aesarchitects" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}

customElements.define('navbar-page', Navbar)
