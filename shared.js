// ================================================
// SNOW TECH — shared.js  (Enhanced Navbar v2)
// Icons + dropdown banner images on every page.
// ================================================

const NAV_HTML = `
<header class="main-header" id="mainHeader">
  <div class="header-blob blob-4"></div>
  <div class="header-blob blob-5"></div>

  <!-- Utility Left -->
  <div class="utility-left">
    <div class="contact-info">
      <span><i class="fas fa-map-marker-alt"></i> Castro Palace, Tirunelveli, TN</span>
      <span><i class="fas fa-phone"></i> <a href="tel:+919876543210" style="color:inherit;text-decoration:none;">+91 98765 43210</a></span>
      <span><i class="fas fa-envelope"></i> <a href="mailto:hello@snowtech.in" style="color:inherit;text-decoration:none;">hello@snowtech.in</a></span>
    </div>
    <div class="social-icons">
      <a href="https://facebook.com/snowtech" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://instagram.com/snowtech" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://youtube.com/snowtech" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      <a href="https://pinterest.com/snowtech" target="_blank" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
      <a href="https://linkedin.com/company/snowtech" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </div>

  <!-- Main Nav (Desktop) -->
  <div class="main-nav-bar">
    <nav class="main-nav">
      <ul>
        <li><a href="index.html"><i class="fas fa-home nav-icon"></i><span>Home</span></a></li>
        <li>
          <a href="about.html"><i class="fas fa-snowflake nav-icon"></i><span>About Us</span><i class="fas fa-chevron-down v-arrow"></i></a>
          <ul class="dropdown">
            <img class="dropdown-banner" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=420&h=90&fit=crop&q=70" alt="About Snow Tech" loading="lazy"/>
            <li><a href="about.html#overview"><i class="fas fa-building"></i><span>Academy Overview</span></a></li>
            <li><a href="about.html#mission"><i class="fas fa-bullseye"></i><span>Mission &amp; Vision</span></a></li>
            <li><a href="about.html#pillars"><i class="fas fa-columns"></i><span>Pillars</span></a></li>
            <li><a href="about.html#gallery"><i class="fas fa-images"></i><span>Gallery</span></a></li>
            <li><a href="about.html#reviews"><i class="fas fa-star"></i><span>Reviews</span></a></li>
          </ul>
        </li>
        <li>
          <a href="courses.html"><i class="fas fa-graduation-cap nav-icon"></i><span>Courses</span><i class="fas fa-chevron-down v-arrow"></i></a>
          <ul class="dropdown">
            <img class="dropdown-banner" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=420&h=90&fit=crop&q=70" alt="Courses" loading="lazy"/>
            <li><a href="courses.html#design"><i class="fas fa-palette"></i><span style="font-weight:700;color:#FFD700;">&#127912; Design</span></a></li>
            <li><a href="courses.html#digital-art"><i class="fas fa-pen-nib"></i><span>Digital Art Fundamentals</span></a></li>
            <li><a href="courses.html#ui-ux"><i class="fas fa-object-group"></i><span>UI/UX Design</span></a></li>
            <li><a href="courses.html#design"><i class="fas fa-layer-group"></i><span>Graphic Design Pro</span></a></li>
            <li><a href="courses.html#animation"><i class="fas fa-film"></i><span style="font-weight:700;color:#FFD700;">&#127916; Animation</span></a></li>
            <li><a href="courses.html#3d"><i class="fas fa-cube"></i><span>3D Animation &amp; Rigging</span></a></li>
            <li><a href="courses.html#motion"><i class="fas fa-magic"></i><span>Motion Graphics</span></a></li>
            <li><a href="courses.html#animation"><i class="fas fa-draw-polygon"></i><span>Cartoon Creation</span></a></li>
            <li><a href="courses.html#tech"><i class="fas fa-laptop-code"></i><span style="font-weight:700;color:#FFD700;">&#128187; Technology</span></a></li>
            <li><a href="courses.html#webdev"><i class="fas fa-code"></i><span>Full-Stack Web Dev</span></a></li>
            <li><a href="courses.html#game"><i class="fas fa-gamepad"></i><span>Game Design &amp; Dev</span></a></li>
            <li><a href="courses.html#tech"><i class="fas fa-shield-alt"></i><span>Cyber Security Essentials</span></a></li>
          </ul>
        </li>
        <li>
          <a href="contact.html"><i class="fas fa-map-marked-alt nav-icon"></i><span>Contact Us</span><i class="fas fa-chevron-down v-arrow"></i></a>
          <ul class="dropdown">
            <img class="dropdown-banner" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=420&h=90&fit=crop&q=70" alt="Our Branches" loading="lazy"/>
            <li><a href="contact.html#tirunelveli"><i class="fas fa-location-arrow"></i><span>Tirunelveli</span></a></li>
            <li><a href="contact.html#madurai"><i class="fas fa-location-arrow"></i><span>Madurai</span></a></li>
            <li><a href="contact.html#chennai"><i class="fas fa-location-arrow"></i><span>Chennai &ndash; CIT Nagar</span></a></li>
            <li><a href="contact.html#coimbatore"><i class="fas fa-location-arrow"></i><span>Coimbatore</span></a></li>
            <li><a href="contact.html#trichy"><i class="fas fa-location-arrow"></i><span>Trichy</span></a></li>
            <li><a href="contact.html"><i class="fas fa-headset"></i><span>Get In Touch</span></a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Hamburger (mobile) -->
  <div class="hamburger-menu"><i class="fas fa-bars"></i></div>
  <div class="mobile-logo-center">Snow Tech</div>

  <!-- Utility Right -->
  <div class="utility-right">
    <div class="logo-area"><div class="logo-desktop">Snow Tech</div></div>
    <div class="search-container">
      <i class="fas fa-search search-icon"></i>
      <input type="text" class="search-box" placeholder="Search courses..."/>
    </div>
    <div id="dm-switch">
      <a href="#" class="buttonNub"></a>
      <div class="buttonGlow"></div>
      <div class="buttonClouds"></div>
      <div class="buttonStars">&#10024; &#10024; &#10024;<br>&#10024; &#10024;</div>
      <div class="buttonBackground"></div>
    </div>
  </div>
</header>

<!-- Mobile Nav Overlay -->
<div class="mobile-nav-overlay" id="mobileNav">
  <div class="close-btn">x</div>
  <nav class="mobile-nav-content">
    <ul>
      <li><a href="index.html"><i class="fas fa-home" style="margin-right:10px;color:#ADD8E6;"></i><span>Home</span></a></li>
      <li>
        <a href="about.html" class="mobile-dropdown-toggle">
          <span><i class="fas fa-snowflake" style="margin-right:10px;color:#ADD8E6;"></i>About Us</span>
          <i class="fas fa-chevron-down v-arrow"></i>
        </a>
        <ul class="mobile-dropdown">
          <li><a href="about.html#overview"><i class="fas fa-building"></i> Academy Overview</a></li>
          <li><a href="about.html#mission"><i class="fas fa-bullseye"></i> Mission &amp; Vision</a></li>
          <li><a href="about.html#pillars"><i class="fas fa-columns"></i> Pillars</a></li>
          <li><a href="about.html#gallery"><i class="fas fa-images"></i> Gallery</a></li>
          <li><a href="about.html#reviews"><i class="fas fa-star"></i> Reviews</a></li>
        </ul>
      </li>
      <li>
        <a href="courses.html" class="mobile-dropdown-toggle">
          <span><i class="fas fa-graduation-cap" style="margin-right:10px;color:#ADD8E6;"></i>Courses</span>
          <i class="fas fa-chevron-down v-arrow"></i>
        </a>
        <ul class="mobile-dropdown">
          <li><a href="courses.html#digital-art"><i class="fas fa-pen-nib"></i> Digital Art</a></li>
          <li><a href="courses.html#ui-ux"><i class="fas fa-object-group"></i> UI/UX Design</a></li>
          <li><a href="courses.html#design"><i class="fas fa-layer-group"></i> Graphic Design</a></li>
          <li><a href="courses.html#3d"><i class="fas fa-cube"></i> 3D Animation</a></li>
          <li><a href="courses.html#motion"><i class="fas fa-magic"></i> Motion Graphics</a></li>
          <li><a href="courses.html#animation"><i class="fas fa-draw-polygon"></i> Cartoon Creation</a></li>
          <li><a href="courses.html#webdev"><i class="fas fa-code"></i> Full-Stack Web Dev</a></li>
          <li><a href="courses.html#game"><i class="fas fa-gamepad"></i> Game Design</a></li>
          <li><a href="courses.html#tech"><i class="fas fa-shield-alt"></i> Cyber Security</a></li>
        </ul>
      </li>
      <li>
        <a href="contact.html" class="mobile-dropdown-toggle">
          <span><i class="fas fa-map-marked-alt" style="margin-right:10px;color:#ADD8E6;"></i>Contact Us</span>
          <i class="fas fa-chevron-down v-arrow"></i>
        </a>
        <ul class="mobile-dropdown">
          <li><a href="contact.html#tirunelveli"><i class="fas fa-location-arrow"></i> Tirunelveli</a></li>
          <li><a href="contact.html#madurai"><i class="fas fa-location-arrow"></i> Madurai</a></li>
          <li><a href="contact.html#chennai"><i class="fas fa-location-arrow"></i> Chennai</a></li>
          <li><a href="contact.html#coimbatore"><i class="fas fa-location-arrow"></i> Coimbatore</a></li>
          <li><a href="contact.html#trichy"><i class="fas fa-location-arrow"></i> Trichy</a></li>
        </ul>
      </li>
      <li>
        <div class="social-icons" style="display:flex;justify-content:center;gap:15px;padding:20px 0;">
          <a href="https://facebook.com/snowtech" target="_blank" style="color:#fff;font-size:1.8em;"><i class="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com/snowtech" target="_blank" style="color:#fff;font-size:1.8em;"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com/snowtech" target="_blank" style="color:#fff;font-size:1.8em;"><i class="fab fa-youtube"></i></a>
          <a href="https://linkedin.com/company/snowtech" target="_blank" style="color:#fff;font-size:1.8em;"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </li>
    </ul>
  </nav>
</div>
`;

const FOOTER_HTML = `
<footer>
  <p>&copy; 2025 Snow Tech. All rights reserved. Designed with <i class="fas fa-heart"></i> for creative minds. <i class="fas fa-feather-alt"></i></p>
</footer>
`;

// ── INJECT ──
document.addEventListener('DOMContentLoaded', () => {
  const hp = document.getElementById('header-placeholder');
  const fp = document.getElementById('footer-placeholder');
  if (hp) hp.outerHTML = NAV_HTML;
  if (fp) fp.outerHTML = FOOTER_HTML;
  init();
});

function init() {
  const dmSwitch = document.getElementById('dm-switch');
  const body = document.body;
  const saved = localStorage.getItem('snowtech-theme') || 'light';
  applyTheme(saved);

  dmSwitch && dmSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    const next = body.classList.contains('dark-theme') ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('snowtech-theme', next);
  });

  function applyTheme(t) {
    if (t === 'dark') { body.classList.add('dark-theme'); dmSwitch && dmSwitch.classList.add('active'); }
    else { body.classList.remove('dark-theme'); dmSwitch && dmSwitch.classList.remove('active'); }
  }

  // Sparkle
  document.addEventListener('click', (e) => {
    const s = document.createElement('div');
    s.className = 'click-sparkle';
    s.style.left = e.clientX + 'px';
    s.style.top  = e.clientY + 'px';
    document.body.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  });

  // Search
  const searchIcon = document.querySelector('.search-icon');
  const searchBox  = document.querySelector('.search-box');
  const searchCont = document.querySelector('.search-container');
  searchIcon && searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) searchBox.focus();
  });
  document.addEventListener('click', (e) => {
    if (searchCont && !searchCont.contains(e.target)) searchBox && searchBox.classList.remove('active');
  });

  // Hamburger
  const ham = document.querySelector('.hamburger-menu');
  const mob = document.getElementById('mobileNav');
  const cls = document.querySelector('.close-btn');
  ham && ham.addEventListener('click', () => mob && mob.classList.add('active'));
  cls && cls.addEventListener('click', () => mob && mob.classList.remove('active'));

  document.querySelectorAll('.mobile-nav-content ul > li > a:not(.mobile-dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => mob && mob.classList.remove('active'));
  });

  // Mobile dropdowns
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dd = toggle.closest('li').querySelector('.mobile-dropdown');
      if (!dd) return;
      document.querySelectorAll('.mobile-dropdown.active').forEach(open => {
        if (open !== dd) { open.classList.remove('active'); open.previousElementSibling && open.previousElementSibling.classList.remove('active'); }
      });
      dd.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  });
}
