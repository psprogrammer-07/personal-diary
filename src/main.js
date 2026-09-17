import './style.css';
import { globalConfig } from './config.js';

const { appName, contactEmail } = globalConfig;

// ── Calendar helper ──────────────────────────────────────────────────────────
function buildCalendarMockup() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const monthName = now.toLocaleString('en-US', { month: 'long' }).toUpperCase();

  // Days with fake entries
  const entryDays = new Set([2, 5, 7, 11, 14, 16, 19, 22, 25, today]);
  const selectedDay = today;

  // First day of month (0=Sun, adjust to Mon-start)
  let firstDow = new Date(year, month, 1).getDay();
  firstDow = firstDow === 0 ? 6 : firstDow - 1; // Mon=0

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const dows = ['M','T','W','T','F','S','S'];
  const weekendIdx = [5, 6]; // Sat, Sun (0-indexed)

  let cells = '';
  // Leading empty days from prev month
  for (let i = 0; i < firstDow; i++) {
    const d = daysInPrev - firstDow + 1 + i;
    cells += `<span class="cal-day outside">${d}</span>`;
  }
  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    let cls = 'cal-day';
    if (d === today) cls += ' today';
    if (d === selectedDay && d !== today) cls += ' selected';
    if (entryDays.has(d) && d !== today) cls += ' has-entry';
    if (d === today && entryDays.has(d)) cls += ' has-entry';
    cells += `<span class="${cls}">${d}</span>`;
  }
  // Trailing days
  const total = firstDow + daysInMonth;
  const trailing = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= trailing; d++) {
    cells += `<span class="cal-day outside">${d}</span>`;
  }

  return `
<div class="paper-card calendar-mockup" style="animation: floatY 5s ease-in-out infinite;">
  <div class="cal-header">
    <span class="cal-chevron">‹</span>
    <span class="cal-title">${monthName}  ${year}</span>
    <span class="cal-chevron">›</span>
  </div>
  <div class="cal-grid">
    ${dows.map((d, i) => `<span class="cal-dow${weekendIdx.includes(i) ? ' weekend' : ''}">${d}</span>`).join('')}
    ${cells}
  </div>
  <div style="display:flex;align-items:center;justify-content:center;gap:16px;padding:10px 0 4px;border-top:1px solid var(--divider);margin-top:8px;">
    <span style="display:flex;align-items:center;gap:5px;font-size:0.75rem;font-style:italic;color:var(--faded-ink);">
      <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:rgba(158,42,43,0.18);"></span>Today
    </span>
    <span style="display:flex;align-items:center;gap:5px;font-size:0.75rem;font-style:italic;color:var(--faded-ink);">
      <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--accent-red);"></span>Has memory
    </span>
  </div>
</div>`;
}

// ── Entry card (matching _RecentEntryCard) ───────────────────────────────────
function buildEntryCard({ day, weekday, note, location }) {
  return `
<div class="paper-card" style="animation: floatY 5s ease-in-out infinite 0.3s;">
  <div class="entry-card-row">
    <div class="entry-date-col">
      <span class="entry-date-day">${day}</span>
      <span class="entry-date-weekday">${weekday}</span>
    </div>
    <div class="entry-divider"></div>
    <div class="entry-body">
      <p class="entry-note">${note}</p>
      ${location ? `<span class="entry-location">📍 ${location}</span>` : ''}
    </div>
    <span class="entry-chevron">›</span>
  </div>
</div>`;
}

// ── Compose card (full entry view) ───────────────────────────────────────────
function buildComposeCard() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return `
<div class="paper-card compose-card" style="animation: floatY 5s ease-in-out infinite 0.6s;">
  <div class="paper-card-inner">
    <div class="compose-card-header">
      <span class="compose-card-date">${dateStr}</span>
      <span class="compose-card-time">${timeStr}</span>
    </div>
    <p class="compose-card-text">Started the morning with a long walk by the lake. The mist was still settling over the water — one of those rare quiet moments where everything feels perfectly still...</p>
    <div class="compose-card-media">
      <div class="media-thumb">🌅</div>
      <div class="media-thumb">🌿</div>
      <div class="media-thumb">☁️</div>
    </div>
    <div class="compose-card-meta">
      <span>📸 3 photos</span>
      <span>📍 Lake Park</span>
      <span>🔒 Encrypted</span>
    </div>
  </div>
</div>`;
}

// ── Navbar ───────────────────────────────────────────────────────────────────
function buildNavbar() {
  return `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="container navbar-inner">
    <a href="/" class="navbar-brand" id="brand-logo">
      <span class="brand-icon">📖</span>
      ${appName}
    </a>
    <ul class="navbar-links" role="list">
      <li><a href="#features">Features</a></li>
      <li><a href="#how-it-works">How It Works</a></li>
      <li><a href="#privacy">Privacy</a></li>
      <li><a href="privacy-policy.html">Privacy Policy</a></li>
      <li><a href="terms.html">Terms</a></li>
    </ul>
  </div>
</nav>`;
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function buildHero() {
  const today = new Date();
  const day = today.getDate();
  const weekday = today.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

  return `
<section class="hero" id="home" aria-label="Hero">
  <div class="hero-content container" style="padding-left:var(--sp-lg);">
    <p class="hero-eyebrow">Your Private Life Journal</p>
    <h1>Every moment<br>deserves to be<br><em>remembered.</em></h1>
    <p class="hero-desc">
      A beautifully designed, end-to-end encrypted diary. Write freely, attach photos, 
      pin your location — all safely backed up to your own Google Drive.
    </p>
    <div class="hero-actions">
      <a href="#download" class="btn-ink red" id="hero-download-btn">
        Download Free
      </a>
      <a href="#features" class="btn-outline" id="hero-features-btn">
        Explore Features
      </a>
    </div>
  </div>

  <div class="hero-visual" aria-hidden="true">
    ${buildCalendarMockup()}
    ${buildEntryCard({
      day,
      weekday,
      note: 'Walked by the lake at dawn. The mist was still settling — one of those rare quiet moments…',
      location: 'Lake Park, Morning Trail'
    })}
    ${buildComposeCard()}
  </div>
</section>`;
}

// ── Features ─────────────────────────────────────────────────────────────────
function buildFeatures() {
  const features = [
    { icon: '🔐', title: 'End-to-End Encryption', desc: 'Every entry is encrypted on your device before it ever leaves. Only you hold the key — not even us.' },
    { icon: '☁️', title: 'Your Drive, Your Data', desc: 'Encrypted backups go straight to your personal Google Drive. We never store your diary content.' },
    { icon: '📸', title: 'Photos & Videos', desc: 'Attach photos and videos to any entry. All media is encrypted and stored securely with your notes.' },
    { icon: '📅', title: 'Calendar Timeline', desc: 'Browse your life story through a beautiful calendar. Tap any date to see the memories from that day.' },
    { icon: '🗺️', title: 'Location Memories', desc: 'Pin entries to a place on the map. Relive the exact spot where a moment happened.' },
    { icon: '🆘', title: 'Emergency Recovery Kit', desc: 'Generate a printable recovery kit so you never permanently lose access to your diary.' },
  ];

  return `
<section class="section features-bg" id="features" aria-label="Features">
  <div class="container">
    <div class="text-center" style="margin-bottom:var(--sp-xl);">
      <p class="section-label">Everything You Need</p>
      <h2 class="section-heading">Built for the way you actually live</h2>
      <p class="section-subtext">
        ${appName} combines beautiful vintage design with serious privacy — a diary that truly feels like yours.
      </p>
    </div>
    <div class="features-grid">
      ${features.map(f => `
        <article class="feature-card" tabindex="0">
          <div class="feature-card-inner">
            <div class="feature-icon">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
          </div>
        </article>
      `).join('')}
    </div>
  </div>
</section>`;
}

// ── How It Works ─────────────────────────────────────────────────────────────
function buildHowItWorks() {
  const steps = [
    { n: 'I',   title: 'Create Your Vault',       desc: 'Sign up and set a master password. Your diary vault is created — fully encrypted, only accessible to you.' },
    { n: 'II',  title: 'Connect Google Drive',    desc: `Authorize ${appName} to back up encrypted files to your own Google Drive. You can revoke access anytime.` },
    { n: 'III', title: 'Write & Capture',          desc: 'Add entries with text, photos, videos, and location pins. Each entry encrypts on your device before saving.' },
    { n: 'IV',  title: 'Sync Across Devices',      desc: 'Your encrypted diary syncs automatically via Google Drive. Sign in on any device to restore your memories.' },
  ];

  return `
<section class="section" id="how-it-works" aria-label="How It Works">
  <div class="container">
    <div class="text-center" style="margin-bottom:var(--sp-xl);">
      <p class="section-label">Simple & Secure</p>
      <h2 class="section-heading">How ${appName} works</h2>
      <p class="section-subtext">
        Get started in minutes. Privacy is protected at every single step.
      </p>
    </div>
    <div class="steps-list">
      ${steps.map(s => `
        <div class="step-row">
          <span class="step-num">${s.n}</span>
          <div class="step-content">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>`;
}

// ── Privacy Block ─────────────────────────────────────────────────────────────
function buildPrivacy() {
  return `
<section class="section features-bg" id="privacy" aria-label="Privacy commitment">
  <div class="container">
    <div class="privacy-block">
      <div class="privacy-block-inner">
        <div class="privacy-seal" aria-hidden="true">🛡️</div>
        <div class="privacy-text">
          <h2>Your privacy is our foundation</h2>
          <p>
            ${appName} is built on one principle: <strong>your diary is yours alone.</strong>
            All content is encrypted on your device before any data leaves it. 
            We cannot read your entries — not even if we wanted to.
          </p>
          <p>
            When you connect Google Drive, your encrypted files are stored in <em>your</em> account.
            We only request the minimum permissions needed to back up and restore your data.
          </p>
          <div class="privacy-links">
            <a href="privacy-policy.html" class="btn-outline" id="home-privacy-link" style="font-size:0.78rem;padding:9px 20px;">
              Read Privacy Policy
            </a>
            <a href="terms.html" class="btn-outline" id="home-terms-link" style="font-size:0.78rem;padding:9px 20px;">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function buildCTA() {
  return `
<section class="section" id="download" aria-label="Download">
  <div class="container">
    <div class="cta-block">
      <p class="section-label" style="justify-content:center;margin-bottom:var(--sp-sm);">Begin Your Story</p>
      <h2 class="section-heading" style="margin-bottom:var(--sp-xs);">Start capturing memories today</h2>
      <p>Join thousands who trust ${appName} to document what matters most.</p>
      <a href="#" class="btn-ink red" id="cta-download-btn">
        Download ${appName} — It's Free
      </a>
    </div>
  </div>
</section>`;
}

// ── Footer ────────────────────────────────────────────────────────────────────
function buildFooter() {
  const year = new Date().getFullYear();
  return `
<footer class="footer" role="contentinfo">
  <div class="container footer-inner">
    <p class="footer-brand">© ${year} ${appName}. All rights reserved.</p>
    <ul class="footer-links" role="list">
      <li><a href="privacy-policy.html" id="footer-privacy-link">Privacy Policy</a></li>
      <li><a href="terms.html" id="footer-terms-link">Terms of Service</a></li>
      <li><a href="mailto:${contactEmail}" id="footer-contact-link">Contact</a></li>
    </ul>
  </div>
</footer>`;
}

// ── Floating animation style ──────────────────────────────────────────────────
const floatStyle = document.createElement('style');
floatStyle.textContent = `
@keyframes floatY {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}
`;
document.head.appendChild(floatStyle);

// ── Mount ─────────────────────────────────────────────────────────────────────
document.querySelector('#app').innerHTML = [
  buildNavbar(),
  '<main>',
  buildHero(),
  buildFeatures(),
  buildHowItWorks(),
  buildPrivacy(),
  buildCTA(),
  '</main>',
  buildFooter(),
].join('');

// Update page meta
document.title = `${appName} — Your Private Life Journal`;

// ── Scroll-reveal: simple, no stagger bugs ────────────────────────────────────
// Mark elements immediately visible if already in viewport
function initReveal() {
  const items = document.querySelectorAll(
    '.feature-card, .step-row, .privacy-block, .cta-block, .hero-content, .hero-visual'
  );
  items.forEach(el => el.classList.add('fade-up'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach(el => io.observe(el));
}

// Stagger feature cards
function staggerGrid(selector, delayMs = 70) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * delayMs}ms`;
  });
}

initReveal();
staggerGrid('.feature-card', 70);
staggerGrid('.step-row', 90);
