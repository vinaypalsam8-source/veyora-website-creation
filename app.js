/**
 * Veyora Portfolio - Core Application Logic
 * Interactive Demos, Cost Calculator, Theme Switcher & Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProjectCards('all');
  initFilterControls();
  initEstimatorEngine();
  initScrollEffects();
  initMobileMenu();
  initNumberCounters();
});

/* ==========================================================================
   1. THEME SWITCHER (LIGHT & DARK MODE)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('veyora_theme') || 'dark';

  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('veyora_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/* ==========================================================================
   2. DEMO CARDS RENDERING & FILTERING
   ========================================================================== */
function renderProjectCards(filterCategory = 'all') {
  const container = document.getElementById('demos-grid-container');
  if (!container || typeof DEMO_PROJECTS === 'undefined') return;

  const filteredProjects = filterCategory === 'all'
    ? DEMO_PROJECTS
    : DEMO_PROJECTS.filter(p => p.category === filterCategory);

  container.innerHTML = filteredProjects.map((project, idx) => {
    const isFirst = idx === 0 && filterCategory === 'all';
    const cardClass = isFirst ? 'demo-card featured-wide' : 'demo-card';

    return `
      <div class="${cardClass}" data-project-id="${project.id}">
        
        <!-- Visual Mockup Stage -->
        <div class="demo-card-stage">
          <div class="card-device-mockup">
            <div class="device-header-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span style="font-size: 0.65rem; color: #94A3B8; margin-left: 8px; font-family: monospace;">https://${project.id}.veyora.app</span>
            </div>
            <div class="mock-content-snippet">
              <div class="mock-title-row">
                <strong style="font-size: 0.95rem; color: #fff;">${project.title}</strong>
                <span class="mock-tag">${project.badge}</span>
              </div>
              <p style="font-size: 0.78rem; color: #94A3B8; margin-top: 4px;">${project.tagline}</p>
            </div>
          </div>
        </div>

        <!-- Content Details -->
        <div class="demo-card-body">
          <div class="demo-category-badge">${project.categoryLabel}</div>
          <h3 class="demo-card-title">${project.title}</h3>
          <p class="demo-card-desc">${project.shortDesc}</p>

          <div class="demo-tags-wrap">
            ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="demo-metrics-row">
            ${project.metrics.map(m => `
              <div class="demo-metric-cell">
                <span class="metric-val">${m.val}</span>
                <span class="metric-tag">${m.label}</span>
              </div>
            `).join('')}
          </div>

          <div class="demo-actions">
            <button class="preview-btn" onclick="openDemoModalById('${project.id}')">
              <span>Launch Live Interactive Sandbox</span> ⚡
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

function initFilterControls() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjectCards(category);
    });
  });
}

/* ==========================================================================
   3. INTERACTIVE DEMO DEVICE MODAL (DESKTOP / TABLET / MOBILE)
   ========================================================================== */
window.openDemoModalById = function (projectId) {
  const modal = document.getElementById('demo-modal');
  const titleEl = document.getElementById('modal-project-title');
  const contentEl = document.getElementById('device-screen-content');

  const project = DEMO_PROJECTS.find(p => p.id === projectId);
  if (!project || !modal) return;

  titleEl.textContent = `${project.title} — Interactive Prototype`;
  contentEl.innerHTML = project.renderInteractivePreview();

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Default to desktop view
  setDeviceView('desktop');
};

window.closeDemoModal = function () {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.setDeviceView = function (viewMode) {
  const frame = document.getElementById('device-frame');
  const buttons = document.querySelectorAll('.viewport-btn');

  buttons.forEach(b => {
    if (b.getAttribute('data-view') === viewMode) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  if (frame) {
    frame.className = `device-frame-wrapper view-${viewMode}`;
  }
};

// Close modal when pressing ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDemoModal();
  }
});

/* ==========================================================================
   4. INTERACTIVE PROJECT COST & TIMELINE ESTIMATOR
   ========================================================================== */
function initEstimatorEngine() {
  const scopePills = document.querySelectorAll('.calc-pill[data-type="scope"]');
  const speedPills = document.querySelectorAll('.calc-pill[data-type="speed"]');
  const featureCheckboxes = document.querySelectorAll('.feature-check-card input');

  scopePills.forEach(pill => {
    pill.addEventListener('click', () => {
      scopePills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      recalculateEstimate();
    });
  });

  speedPills.forEach(pill => {
    pill.addEventListener('click', () => {
      speedPills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      recalculateEstimate();
    });
  });

  featureCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const parentLabel = cb.closest('.feature-check-card');
      if (cb.checked) {
        parentLabel.classList.add('checked');
      } else {
        parentLabel.classList.remove('checked');
      }
      recalculateEstimate();
    });
  });

  recalculateEstimate();
}

function recalculateEstimate() {
  const selectedScope = document.querySelector('.calc-pill[data-type="scope"].selected');
  const selectedSpeed = document.querySelector('.calc-pill[data-type="speed"].selected');
  const featureCheckboxes = document.querySelectorAll('.feature-check-card input:checked');

  const basePrice = parseInt(selectedScope?.getAttribute('data-price') || '2800', 10);
  const baseDays = parseInt(selectedScope?.getAttribute('data-days') || '14', 10);
  const multiplier = parseFloat(selectedSpeed?.getAttribute('data-multiplier') || '1.0');

  let featuresTotal = 0;
  let featuresDays = 0;

  featureCheckboxes.forEach(cb => {
    featuresTotal += parseInt(cb.getAttribute('data-feature-price') || '0', 10);
    featuresDays += parseInt(cb.getAttribute('data-feature-days') || '0', 10);
  });

  const rawTotal = (basePrice + featuresTotal) * multiplier;
  const finalPrice = Math.round(rawTotal / 50) * 50; // rounded nicely

  let finalDaysMin = Math.round((baseDays + featuresDays) / (multiplier > 1.0 ? 1.4 : 1.0));
  let finalDaysMax = finalDaysMin + 4;

  const priceEl = document.getElementById('summary-price');
  const timelineEl = document.getElementById('summary-timeline');

  if (priceEl) priceEl.textContent = `$${finalPrice.toLocaleString()}`;
  if (timelineEl) timelineEl.textContent = `${finalDaysMin} - ${finalDaysMax} Business Days`;
}

window.prefillContactWithQuote = function () {
  const selectedScope = document.querySelector('.calc-pill[data-type="scope"].selected span')?.textContent || 'Custom Web Project';
  const price = document.getElementById('summary-price')?.textContent || '$4,750';
  const timeline = document.getElementById('summary-timeline')?.textContent || '2-3 Weeks';

  const notesInput = document.getElementById('client-notes');
  const budgetSelect = document.getElementById('client-budget');

  if (notesInput) {
    notesInput.value = `I am interested in the ${selectedScope.trim()} package estimated at ${price} with a timeline of ${timeline}. Please send the proposal!`;
  }

  if (budgetSelect) {
    const rawVal = parseInt(price.replace(/[^0-9]/g, ''), 10);
    if (rawVal < 5000) budgetSelect.value = '3k-5k';
    else if (rawVal <= 10000) budgetSelect.value = '5k-10k';
    else if (rawVal <= 25000) budgetSelect.value = '10k-25k';
    else budgetSelect.value = '25k+';
  }

  // Smooth scroll to contact form
  const contactSec = document.getElementById('contact');
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('client-name')?.focus();
  }
};

/* ==========================================================================
   5. CONTACT FORM SUBMISSION
   ========================================================================== */
window.handleFormSubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById('client-name')?.value;
  const toast = document.getElementById('contact-toast');

  if (toast) {
    toast.innerHTML = `🎉 <strong>Thank you ${name || 'there'}!</strong> Your inquiry has been logged. Our lead designer will prepare your custom proposal and reach out within 24 hours.`;
    toast.style.display = 'block';
  }

  const form = document.getElementById('consultation-form');
  if (form) form.reset();

  setTimeout(() => {
    if (toast) toast.style.display = 'none';
  }, 7000);
};

/* ==========================================================================
   6. SCROLL EFFECTS & NAVBAR
   ========================================================================== */
function initScrollEffects() {
  const header = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close when clicking link
    navMenu.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   7. ANIMATED NUMBER COUNTERS
   ========================================================================== */
function initNumberCounters() {
  const metricNumbers = document.querySelectorAll('.metric-number[data-target]');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        metricNumbers.forEach(numEl => {
          const target = parseFloat(numEl.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          let count = 0;
          const duration = 1200;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            if (isDecimal) {
              numEl.textContent = count.toFixed(1) + (numEl.getAttribute('data-target').includes('%') ? '%' : 'x');
            } else {
              numEl.textContent = Math.floor(count) + '+';
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsStrip = document.querySelector('.hero-metrics-strip');
  if (metricsStrip) {
    observer.observe(metricsStrip);
  }
}
