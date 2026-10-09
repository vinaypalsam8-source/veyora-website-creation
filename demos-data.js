/**
 * Veyora Portfolio - Demos Data & Interactive Preview Mockups
 * 5 Rich Website Demos with Interactive Components
 */

const DEMO_PROJECTS = [
  {
    id: "lumina-pay",
    title: "Lumina Pay",
    tagline: "Next-Gen Cross-Border Web3 & Fintech Banking Platform",
    category: "saas",
    categoryLabel: "Fintech & SaaS",
    badge: "Featured SaaS",
    accentColor: "#3B82F6",
    client: "Lumina Financial Inc. (San Francisco)",
    deliveryTime: "3.5 Weeks",
    metrics: [
      { label: "Conversion Rate", val: "+182%", change: "up" },
      { label: "Speed Score", val: "99/100", change: "perf" },
      { label: "Monthly Volume", val: "$4.2M+", change: "scale" }
    ],
    tags: ["Next.js 14", "Tailwind CSS", "Web3 / Stripe API", "Framer Motion"],
    shortDesc: "Ultra-sleek modern fintech web application featuring multi-currency instant payments, real-time analytics, and biometric authentication UI.",
    fullOverview: "Lumina Pay needed a high-trust, blisteringly fast web presence to convert enterprise clients and crypto-native users. Veyora engineered an interactive web application with sub-second page loads, real-time FX rate converters, and interactive payment simulator widgets.",
    highlights: [
      "Real-time live multi-currency currency converter",
      "Interactive analytics dashboard widget with live simulated chart",
      "Instant checkout / transaction simulation flow",
      "Adaptive dark/light neon sapphire interface"
    ],
    // Embeddable Interactive Mock HTML
    renderInteractivePreview: function () {
      return `
        <div class="demo-lumina-wrap">
          <!-- Mini Demo Nav -->
          <div class="demo-sub-nav">
            <div class="demo-sub-logo">
              <span class="sub-dot"></span> <strong>Lumina</strong>Pay
            </div>
            <div class="demo-sub-links">
              <span>Personal</span>
              <span>Business</span>
              <span>Developers</span>
              <span>Company</span>
            </div>
            <button class="demo-btn-primary">Open Account →</button>
          </div>

          <!-- Hero Area -->
          <div class="demo-lumina-hero">
            <div class="demo-lumina-left">
              <span class="lumina-badge">⚡ Instant 0.05s Global Settlement</span>
              <h2>Money without borders, fees, or friction.</h2>
              <p>Send, receive, and spend 40+ currencies at real mid-market exchange rates with zero markup.</p>
              
              <!-- Interactive Live Converter -->
              <div class="interactive-calc-card">
                <div class="calc-row">
                  <label>You Send</label>
                  <div class="input-wrap">
                    <input type="number" id="lumina-send-input" value="1000" min="10" />
                    <select id="lumina-send-curr">
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
                <div class="calc-divider">
                  <span>⇄ 1 USD = 0.92 EUR (Guaranteed 48h)</span>
                </div>
                <div class="calc-row">
                  <label>Recipient Gets</label>
                  <div class="input-wrap">
                    <input type="text" id="lumina-receive-input" value="920.00" readonly />
                    <select id="lumina-receive-curr">
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
                <button class="lumina-action-btn" onclick="triggerLuminaTransferDemo()">Simulate Transfer Now</button>
                <div id="lumina-status-msg" class="lumina-status"></div>
              </div>
            </div>

            <div class="demo-lumina-right">
              <!-- Live Card Widget -->
              <div class="virtual-card-glass">
                <div class="card-chip"></div>
                <div class="card-brand">Lumina Black Platinum</div>
                <div class="card-num">•••• •••• •••• 4920</div>
                <div class="card-footer">
                  <div><span>CARDHOLDER</span><br><strong>ALEXANDER VANCE</strong></div>
                  <div><span>EXPIRES</span><br><strong>08/29</strong></div>
                </div>
              </div>

              <!-- Mini Stats Dashboard -->
              <div class="mini-stats-grid">
                <div class="mini-stat-card">
                  <span class="m-label">24h Volume</span>
                  <span class="m-val">$14,892,100</span>
                  <span class="m-trend green">↑ +14.2%</span>
                </div>
                <div class="mini-stat-card">
                  <span class="m-label">Avg Speed</span>
                  <span class="m-val">0.048 sec</span>
                  <span class="m-trend blue">⚡ Ultra-Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  {
    id: "aura-wellness",
    title: "Aura Dental & Holistic Wellness",
    tagline: "Ultra-Luxury Medical Clinic & Instant Online Appointment Portal",
    category: "healthcare",
    categoryLabel: "Healthcare & Booking",
    badge: "Medical Boutique",
    accentColor: "#0284C7",
    client: "Aura Health Studio (Beverly Hills / London)",
    deliveryTime: "2.5 Weeks",
    metrics: [
      { label: "Booking Growth", val: "+240%", change: "up" },
      { label: "Mobile Conversions", val: "68%", change: "scale" },
      { label: "SEO #1 Rankings", val: "14 Terms", change: "perf" }
    ],
    tags: ["Astro / SSR", "Tailwind CSS", "Interactive Calendar", "HIPAA Ready"],
    shortDesc: "High-end aesthetic clinic website featuring calming minimalist porcelain visuals, custom treatment interactive selector, and a 30-second booking flow.",
    fullOverview: "Aura needed a digital flagship that reflects its 5-star clinical excellence. Veyora built a serene, luxury experience with instant consultation scheduling, physician profile showcases, and transparent treatment plan estimators.",
    highlights: [
      "Instant 3-step consultation booking flow with live time picker",
      "Interactive treatment cost estimator with transparent pricing",
      "Doctor credentials and before/after smile preview gallery",
      "Optimized for local Beverly Hills & London private clinic SEO"
    ],
    renderInteractivePreview: function () {
      return `
        <div class="demo-aura-wrap">
          <div class="demo-sub-nav aura-nav">
            <div class="demo-sub-logo">
              <span class="aura-icon">✦</span> <strong>AURA</strong> CLINICAL STUDIO
            </div>
            <div class="demo-sub-links">
              <span>Treatments</span>
              <span>Physicians</span>
              <span>Before & After</span>
              <span>Locations</span>
            </div>
            <button class="aura-btn-outline">Book Consultation</button>
          </div>

          <div class="demo-aura-hero">
            <div class="aura-hero-content">
              <span class="aura-tagline">Excellence in Restorative & Aesthetic Care</span>
              <h2>Where clinical precision meets architectural serenity.</h2>
              <p>Experience concierge dental & wellness treatments tailored to your natural facial geometry.</p>

              <!-- Interactive Booking Widget -->
              <div class="aura-booking-box">
                <h4>Book Your Private Assessment</h4>
                <div class="aura-step-grid">
                  <div class="aura-field">
                    <label>Select Treatment</label>
                    <select id="aura-service-sel">
                      <option value="veneers">Porcelain Veneers (Cosmetic)</option>
                      <option value="invisalign">Orthodontic Invisalign</option>
                      <option value="whitening">Laser Whitening Spa</option>
                      <option value="holistic">Complete Bio-Dental Exam</option>
                    </select>
                  </div>
                  <div class="aura-field">
                    <label>Preferred Date</label>
                    <input type="date" id="aura-date-input" value="2026-10-15" />
                  </div>
                  <div class="aura-field">
                    <label>Time Slot</label>
                    <select id="aura-time-sel">
                      <option>10:00 AM (Dr. Reynolds)</option>
                      <option>02:30 PM (Dr. Reynolds)</option>
                      <option>04:00 PM (Dr. Chen)</option>
                    </select>
                  </div>
                </div>
                <button class="aura-confirm-btn" onclick="triggerAuraBooking()">Confirm Consultation Appointment</button>
                <div id="aura-booking-success" class="aura-booking-success"></div>
              </div>
            </div>

            <div class="aura-visual-side">
              <div class="aura-doctor-badge">
                <div class="dr-avatar">DR</div>
                <div>
                  <strong>Dr. Vivienne Chen, DDS</strong>
                  <p>Chief Aesthetic Surgeon • 15+ Yrs Exp</p>
                </div>
                <span class="star-rating">★★★★★ 5.0</span>
              </div>
              <div class="aura-feature-pills">
                <div class="pill-item">✓ Pain-Free Laser Technology</div>
                <div class="pill-item">✓ 3D Digital Facial Scanning</div>
                <div class="pill-item">✓ Private Recovery Suite</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  {
    id: "novaforge-ai",
    title: "NovaForge AI",
    tagline: "Enterprise AI Agent Orchestration & Developer Workflow Engine",
    category: "saas",
    categoryLabel: "Developer Tools & AI",
    badge: "AI Platform",
    accentColor: "#2563EB",
    client: "NovaForge Labs (Austin, TX)",
    deliveryTime: "3 Weeks",
    metrics: [
      { label: "Waitlist Signups", val: "42,000+", change: "up" },
      { label: "Lighthouse Score", val: "100/100", change: "perf" },
      { label: "GitHub Stars", val: "8.4k", change: "scale" }
    ],
    tags: ["React", "WebGL Canvas", "Tailwind CSS", "Live Terminal"],
    shortDesc: "High-tech developer tool website featuring real-time node animation, interactive prompt playground, and instantaneous code export.",
    fullOverview: "NovaForge needed a developer-first website that showcases the power of their multi-agent orchestration API. Veyora delivered an interactive canvas experience with dark sapphire glow aesthetics and an interactive live prompt test console.",
    highlights: [
      "Interactive live prompt testing sandbox with instant streaming responses",
      "Visual pipeline architecture viewer with simulated node pulses",
      "Interactive code snippet switcher (Python, TypeScript, cURL)",
      "Developer documentation integration with instant keyboard search"
    ],
    renderInteractivePreview: function () {
      return `
        <div class="demo-nova-wrap">
          <div class="demo-sub-nav nova-nav">
            <div class="demo-sub-logo">
              <span class="nova-glyph">⬡</span> <strong>NovaForge</strong>.ai
            </div>
            <div class="demo-sub-links">
              <span>Agent Graph</span>
              <span>SDK & Docs</span>
              <span>Benchmarks</span>
              <span>Pricing</span>
            </div>
            <button class="nova-btn-terminal">Deploy Agent ⚡</button>
          </div>

          <div class="demo-nova-hero">
            <div class="nova-hero-header">
              <span class="nova-code-tag">v3.4 Release • Sub-10ms Inference</span>
              <h2>Orchestrate Autonomous Agents at Scale.</h2>
              <p>Chain multimodal models, vector stores, and custom tools with zero latency bottlenecks.</p>
            </div>

            <!-- Interactive Terminal & Prompt Playground -->
            <div class="nova-interactive-terminal">
              <div class="terminal-bar">
                <span class="t-dot red"></span>
                <span class="t-dot yellow"></span>
                <span class="t-dot green"></span>
                <span class="t-title">agent_graph_executor.ts — Live Sandbox</span>
                <span class="t-badge">ACTIVE</span>
              </div>
              <div class="terminal-body">
                <div class="terminal-nodes">
                  <div class="agent-node node-active">
                    <span class="node-icon">🤖</span>
                    <div><strong>Research Agent</strong><p>Deep Search & Synthesize</p></div>
                  </div>
                  <div class="node-arrow">⟶</div>
                  <div class="agent-node">
                    <span class="node-icon">⚖️</span>
                    <div><strong>Validator Agent</strong><p>Fact-check & Hallucination Guard</p></div>
                  </div>
                  <div class="node-arrow">⟶</div>
                  <div class="agent-node">
                    <span class="node-icon">🚀</span>
                    <div><strong>Code Generator</strong><p>Executes Sandboxed Code</p></div>
                  </div>
                </div>

                <div class="terminal-interactive-input">
                  <label>$ novaforge run --prompt</label>
                  <div class="terminal-input-row">
                    <input type="text" id="nova-prompt-input" value="Build a real-time web crawler for market trends" />
                    <button class="nova-run-btn" onclick="triggerNovaRun()">Execute Graph ↵</button>
                  </div>
                </div>

                <div id="nova-output-stream" class="terminal-output">
                  <span class="out-dim">// Output stream will appear here...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  {
    id: "elysian-bloom",
    title: "Elysian Bloom",
    tagline: "Haute Parfumerie & Botanical Luxury E-Commerce Experience",
    category: "ecommerce",
    categoryLabel: "Luxury E-Commerce",
    badge: "E-Commerce",
    accentColor: "#1D4ED8",
    client: "Elysian Maison de Parfum (Paris)",
    deliveryTime: "4 Weeks",
    metrics: [
      { label: "Avg Order Value", val: "$280", change: "scale" },
      { label: "Checkout Conversion", val: "+64%", change: "up" },
      { label: "Page Speed", val: "0.42s", change: "perf" }
    ],
    tags: ["Shopify Headless", "Next.js", "Tailwind CSS", "Micro-animations"],
    shortDesc: "Ultra-luxury fragrance maison e-commerce store with olfactory note visualizer, interactive bottle customizer, and 1-click cart drawer.",
    fullOverview: "Elysian required a high-converting luxury storefront that evokes emotion and rarity. Veyora engineered a bespoke headless Shopify experience with olfactory pyramid visualizations, interactive scent profiler, and friction-free micro-checkout.",
    highlights: [
      "Interactive Olfactory Pyramid (Top, Heart, and Base note explorer)",
      "Live interactive bottle size & custom engraving selector",
      "Instant slide-out cart drawer with dynamic free shipping progress",
      "Editorial storytelling layout with high-impact typography"
    ],
    renderInteractivePreview: function () {
      return `
        <div class="demo-elysian-wrap">
          <div class="demo-sub-nav elysian-nav">
            <div class="demo-sub-logo">
              <strong>ELYSIAN</strong> PARIS
            </div>
            <div class="demo-sub-links">
              <span>Collection Rare</span>
              <span>Fragrance Finder</span>
              <span>The Atelier</span>
              <span>Gifting</span>
            </div>
            <div class="elysian-cart-badge" id="elysian-cart-count" onclick="alert('Cart opened: 1 Item')">
              Bag (1)
            </div>
          </div>

          <div class="demo-elysian-hero">
            <div class="elysian-product-stage">
              <div class="elysian-bottle-card">
                <div class="bottle-glow"></div>
                <div class="bottle-mockup">
                  <div class="bottle-cap"></div>
                  <div class="bottle-body">
                    <span class="label-brand">ELYSIAN</span>
                    <span class="label-name" id="elysian-scent-name">CYAN NÉROLI NO. 09</span>
                    <span class="label-notes">Bergamot • Blue Iris • White Amber</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="elysian-details-stage">
              <span class="elysian-badge">Haute Parfumerie Extrait</span>
              <h2 id="elysian-product-title">Cyan Néroli No. 09</h2>
              <p class="elysian-desc">An intoxicating whisper of Mediterranean citrus infused with nocturnal blue iris, wild sage, and crystalline mineral amber.</p>
              
              <div class="scent-swatches">
                <label>Select Scent Edition:</label>
                <div class="swatch-row">
                  <button class="swatch-btn active" onclick="switchElysianScent('Cyan Néroli No. 09', 'Bergamot • Blue Iris • White Amber', '$240')">Cyan Néroli</button>
                  <button class="swatch-btn" onclick="switchElysianScent('Midnight Sapphire', 'Dark Oud • Moroccan Rose • Leather', '$290')">Midnight Sapphire</button>
                  <button class="swatch-btn" onclick="switchElysianScent('Solar Vetiver', 'White Cedar • Sicilian Lemon • Musk', '$215')">Solar Vetiver</button>
                </div>
              </div>

              <div class="size-selector">
                <label>Bottle Volume:</label>
                <div class="size-buttons">
                  <button class="size-btn active">50ml Extrait</button>
                  <button class="size-btn">100ml Flacon</button>
                </div>
              </div>

              <div class="elysian-purchase-row">
                <div class="price-tag" id="elysian-price">$240.00</div>
                <button class="elysian-add-btn" onclick="triggerElysianCart()">Add to Luxury Bag ✦</button>
              </div>
              <div id="elysian-cart-toast" class="elysian-toast"></div>
            </div>
          </div>
        </div>
      `;
    }
  },

  {
    id: "horizon-living",
    title: "Horizon Living Real Estate",
    tagline: "Architectural Ultra-Prime Estates & Interactive Property Showcase",
    category: "realestate",
    categoryLabel: "Prime Real Estate",
    badge: "Architectural Portfolio",
    accentColor: "#0284C7",
    client: "Horizon Capital Real Estate (Miami / Dubai)",
    deliveryTime: "3.5 Weeks",
    metrics: [
      { label: "Inquiries Generated", val: "$120M+", change: "scale" },
      { label: "Avg Time on Site", val: "5m 42s", change: "up" },
      { label: "Load Time", val: "0.36s", change: "perf" }
    ],
    tags: ["Next.js", "Mapbox GL", "Interactive Floorplans", "Video CDN"],
    shortDesc: "Architectural real estate portal with interactive floorplan switchers, live mortgage & yield calculator, and VIP virtual tour scheduler.",
    fullOverview: "Horizon Living represents ultra-high-net-worth real estate developments. Veyora crafted an immersive architectural digital experience featuring virtual tour previews, interactive neighborhood maps, and instantaneous VIP showing bookings.",
    highlights: [
      "Interactive mortgage & investment yield calculator",
      "Dynamic floor plan viewer with interactive room metrics",
      "Private VIP VIP helicopter / private showing scheduler",
      "Curated high-resolution architectural photography showcase"
    ],
    renderInteractivePreview: function () {
      return `
        <div class="demo-horizon-wrap">
          <div class="demo-sub-nav horizon-nav">
            <div class="demo-sub-logo">
              <strong>HORIZON</strong> PRIME PROPERTIES
            </div>
            <div class="demo-sub-links">
              <span>Penthouse Collection</span>
              <span>Waterfront Villas</span>
              <span>Developments</span>
              <span>Private Office</span>
            </div>
            <button class="horizon-btn">Private Viewing</button>
          </div>

          <div class="demo-horizon-hero">
            <div class="horizon-property-card">
              <div class="property-tag">Featured Waterfront Estate</div>
              <h3>The Azure Coastline Residence</h3>
              <p class="location-pin">📍 Star Island, Miami Beach • 14,200 sq.ft</p>
              
              <div class="property-spec-chips">
                <span>🛏️ 6 Bedrooms</span>
                <span>🛁 8.5 Baths</span>
                <span>⛵ 120ft Deep-Water Dock</span>
                <span>🏊 Infinity Ocean Pool</span>
              </div>

              <!-- Interactive Mortgage & Investment Yield Calculator -->
              <div class="horizon-calc-box">
                <div class="calc-head">
                  <h5>Interactive Investment & Mortgage Estimator</h5>
                  <span class="prop-price" id="horizon-prop-price">$24,500,000</span>
                </div>
                <div class="calc-inputs-grid">
                  <div>
                    <label>Down Payment (20%)</label>
                    <input type="text" value="$4,900,000" readonly />
                  </div>
                  <div>
                    <label>Interest Rate</label>
                    <select id="horizon-rate-sel" onchange="calculateHorizonMortgage()">
                      <option value="6.2">6.2% (30-Yr Fixed)</option>
                      <option value="5.8">5.8% (15-Yr Fixed)</option>
                      <option value="5.2">5.2% (Jumbo ARM)</option>
                    </select>
                  </div>
                  <div>
                    <label>Est. Monthly Payment</label>
                    <div class="calc-monthly" id="horizon-monthly-val">$120,380 / mo</div>
                  </div>
                </div>
                <button class="horizon-action-btn" onclick="triggerHorizonInquiry()">Request Confidential Offering Memorandum</button>
                <div id="horizon-inquiry-toast" class="horizon-toast"></div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
];

// Interactive functions attached to window for prototype interactions
window.triggerLuminaTransferDemo = function () {
  const sendAmt = document.getElementById('lumina-send-input')?.value || 1000;
  const sendCurr = document.getElementById('lumina-send-curr')?.value || 'USD';
  const recCurr = document.getElementById('lumina-receive-curr')?.value || 'EUR';
  const statusEl = document.getElementById('lumina-status-msg');
  if (!statusEl) return;

  statusEl.innerHTML = `<span class="spinner-dot"></span> Processing $${sendAmt} ${sendCurr} via Lightning Liquidity Pool...`;
  statusEl.style.display = 'block';

  setTimeout(() => {
    statusEl.innerHTML = `✅ <strong>Transfer Complete!</strong> Delivered $${(sendAmt * 0.92).toFixed(2)} ${recCurr} in <strong>0.038 seconds</strong>. Zero gas fees applied.`;
  }, 1200);
};

window.triggerAuraBooking = function () {
  const service = document.getElementById('aura-service-sel')?.selectedOptions[0]?.text || 'Consultation';
  const date = document.getElementById('aura-date-input')?.value || 'Upcoming';
  const time = document.getElementById('aura-time-sel')?.value || '10:00 AM';
  const box = document.getElementById('aura-booking-success');
  if (!box) return;

  box.innerHTML = `✨ <strong>Appointment Reserved:</strong> ${service} on ${date} at ${time}. Confirmation email & calendar invite dispatched!`;
  box.style.display = 'block';
};

window.triggerNovaRun = function () {
  const prompt = document.getElementById('nova-prompt-input')?.value || 'Sample Prompt';
  const out = document.getElementById('nova-output-stream');
  if (!out) return;

  out.innerHTML = `<span class="terminal-green">⚙️ Initializing Agent Graph Pipeline...</span>\n[1/3] Parsing task intent: "${prompt}"\n[2/3] Calling vector search index (34ms)...\n[3/3] Synthesizing parallel workers...\n\n✅ <strong>Pipeline Executed Successfully in 118ms</strong>\nOutput: 4 Micro-services deployed, 12 APIs validated, 0 errors logged.`;
};

window.switchElysianScent = function (name, notes, price) {
  const nameEl = document.getElementById('elysian-scent-name');
  const titleEl = document.getElementById('elysian-product-title');
  const priceEl = document.getElementById('elysian-price');
  if (nameEl) nameEl.textContent = name.toUpperCase();
  if (titleEl) titleEl.textContent = name;
  if (priceEl) priceEl.textContent = price + '.00';

  // Toggle active swatch button
  document.querySelectorAll('.swatch-btn').forEach(b => {
    if (b.textContent.includes(name.split(' ')[0])) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
};

window.triggerElysianCart = function () {
  const toast = document.getElementById('elysian-cart-toast');
  const cartBadge = document.getElementById('elysian-cart-count');
  if (toast) {
    toast.innerHTML = `🛍️ Added <strong>${document.getElementById('elysian-product-title')?.textContent || 'Fragrance'}</strong> to your Luxury Bag. Free insured international shipping applied!`;
    toast.style.display = 'block';
  }
  if (cartBadge) {
    cartBadge.textContent = 'Bag (2)';
    cartBadge.style.background = '#2563EB';
    cartBadge.style.color = '#fff';
  }
  setTimeout(() => {
    if (toast) toast.style.display = 'none';
  }, 4000);
};

window.calculateHorizonMortgage = function () {
  const rate = parseFloat(document.getElementById('horizon-rate-sel')?.value || '6.2');
  const principal = 24500000 * 0.8; // 80% LTV
  const monthlyRate = (rate / 100) / 12;
  const numPayments = 30 * 12;
  const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  const monthlyEl = document.getElementById('horizon-monthly-val');
  if (monthlyEl) {
    monthlyEl.textContent = `$${Math.round(monthly).toLocaleString()} / mo`;
  }
};

window.triggerHorizonInquiry = function () {
  const toast = document.getElementById('horizon-inquiry-toast');
  if (toast) {
    toast.innerHTML = `🏛️ <strong>Private Dossier Sent!</strong> Check your email for full architectural CAD files, floor plans, and tax advisory pack.`;
    toast.style.display = 'block';
  }
  setTimeout(() => {
    if (toast) toast.style.display = 'none';
  }, 4500);
};
