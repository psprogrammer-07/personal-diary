import './style.css';
import { globalConfig } from './config.js';

const { appName, contactEmail } = globalConfig;

function buildNavbar() {
  return `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="container navbar-inner">
    <a href="/" class="navbar-brand" id="brand-logo">
      <span class="brand-icon">📖</span>
      ${appName}
    </a>
    <ul class="navbar-links" role="list">
      <li><a href="/#features">Features</a></li>
      <li><a href="/#privacy">Privacy</a></li>
      <li><a href="privacy-policy.html">Privacy Policy</a></li>
      <li><a href="terms.html">Terms</a></li>
    </ul>
  </div>
</nav>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
<footer class="footer" role="contentinfo">
  <div class="container footer-inner">
    <p class="footer-brand">© ${year} ${appName}. All rights reserved.</p>
    <ul class="footer-links" role="list">
      <li><a href="privacy-policy.html" id="footer-privacy-link">Privacy Policy</a></li>
      <li><a href="terms.html" id="footer-terms-link">Terms of Service</a></li>
      <li><a href="delete-account.html" id="footer-delete-link">Delete Account</a></li>
      <li><a href="mailto:${contactEmail}" id="footer-contact-link">Contact</a></li>
    </ul>
  </div>
</footer>`;
}

function buildPage() {
  return `
<section class="legal-hero" aria-label="Delete Account header">
  <div class="container legal-hero-inner">
    <p class="legal-badge" style="color:var(--accent-red);border-color:var(--red-border);background:rgba(158,42,43,0.06);">
      ⚠️ Account Deletion
    </p>
    <h1>Account &amp; Data Deletion</h1>
    <p>
      ${appName} uses a zero-knowledge architecture with no central developer servers.
      Your account and data are stored entirely on your local device and inside your
      personal Google Drive account.
    </p>
    <div class="legal-meta">
      <span>This action is permanent and cannot be undone.</span>
    </div>
  </div>
</section>

<main>
  <div class="container" style="padding-block: var(--sp-2xl); max-width: 760px;">

    <!-- Zero-knowledge notice -->
    <div class="info-box" style="margin-bottom: var(--sp-xl); font-size: 1rem;">
      <strong>Why no in-app delete button?</strong><br>
      Because ${appName} never stores your data on our servers, there is nothing for us
      to delete on your behalf. All your entries and credentials live in two places only:
      your device and your own Google Drive. Follow the steps below to permanently
      remove everything.
    </div>

    <!-- Step 1 — Google Drive -->
    <div class="paper-card" style="margin-bottom: var(--sp-md);">
      <div class="paper-card-inner" style="padding: var(--sp-md) var(--sp-md) var(--sp-md) var(--sp-md);">
        <div style="display:flex; align-items:baseline; gap:var(--sp-sm); margin-bottom:var(--sp-md); padding-bottom:var(--sp-sm); border-bottom:1px solid var(--divider);">
          <span style="font-family:var(--font-dates); font-size:1.8rem; font-weight:700; color:var(--accent-red); line-height:1; flex-shrink:0;">1</span>
          <div>
            <h2 style="font-size:1.05rem; letter-spacing:0.5px; margin-bottom:2px;">Delete Cloud Data (Google Drive)</h2>
            <p style="font-size:0.88rem; font-style:italic; color:var(--faded-ink); margin:0;">Removes all encrypted diary backups from your Google account.</p>
          </div>
        </div>
        <ol style="padding-left: 1.25rem; display:flex; flex-direction:column; gap:12px;">
          <li>
            Open <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Google Drive</a>
            (<code style="font-size:0.85rem; background:rgba(205,184,150,0.4); padding:1px 6px; border-radius:3px; border:1px solid var(--divider);">drive.google.com</code>)
            on a computer or browser.
          </li>
          <li>
            Click on <strong>Settings</strong> (gear icon ⚙️) → <strong>Settings</strong>.
          </li>
          <li>
            Select <strong>"Managing Apps"</strong> from the left sidebar.
          </li>
          <li>
            Scroll down to find <strong>${appName}</strong> in the list.
          </li>
          <li>
            Click <strong>"Options"</strong> and select <strong>"Delete hidden app data"</strong>.
            <div class="info-box sepia" style="margin-top:10px; font-size:0.88rem;">
              This permanently deletes all your encrypted diary entries backed up to Drive.
            </div>
          </li>
          <li>
            Click <strong>"Options"</strong> again and select <strong>"Disconnect from Drive"</strong>
            to revoke ${appName}'s authorization.
          </li>
        </ol>
      </div>
    </div>

    <!-- Step 2 — Device -->
    <div class="paper-card" style="margin-bottom: var(--sp-md);">
      <div class="paper-card-inner" style="padding: var(--sp-md) var(--sp-md) var(--sp-md) var(--sp-md);">
        <div style="display:flex; align-items:baseline; gap:var(--sp-sm); margin-bottom:var(--sp-md); padding-bottom:var(--sp-sm); border-bottom:1px solid var(--divider);">
          <span style="font-family:var(--font-dates); font-size:1.8rem; font-weight:700; color:var(--accent-red); line-height:1; flex-shrink:0;">2</span>
          <div>
            <h2 style="font-size:1.05rem; letter-spacing:0.5px; margin-bottom:2px;">Delete Local Device Data</h2>
            <p style="font-size:0.88rem; font-style:italic; color:var(--faded-ink); margin:0;">Removes the encrypted diary database and all keys stored on your phone.</p>
          </div>
        </div>
        <p style="font-size:0.95rem; margin-bottom:var(--sp-sm);">
          Choose either method below:
        </p>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; align-items:flex-start; gap:10px;">
            <span style="font-family:var(--font-display); font-size:0.75rem; letter-spacing:1px; color:var(--accent-red); flex-shrink:0; padding-top:3px;">Option A</span>
            <p style="margin:0; font-size:0.95rem;">
              <strong>Uninstall ${appName}</strong> from your device.
              This removes the app and all locally stored diary data.
            </p>
          </div>
          <div style="height:1px; background:var(--divider); opacity:0.5;"></div>
          <div style="display:flex; align-items:flex-start; gap:10px;">
            <span style="font-family:var(--font-display); font-size:0.75rem; letter-spacing:1px; color:var(--accent-red); flex-shrink:0; padding-top:3px;">Option B</span>
            <p style="margin:0; font-size:0.95rem;">
              Go to your phone's <strong>Settings → Apps → ${appName} → Storage → Clear Data</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- What is retained -->
    <div class="paper-card" style="margin-bottom: var(--sp-xl);">
      <div class="paper-card-inner" style="padding: var(--sp-md);">
        <div style="display:flex; align-items:center; gap:var(--sp-sm); margin-bottom:var(--sp-md); padding-bottom:var(--sp-sm); border-bottom:1px solid var(--divider);">
          <span style="font-size:1.4rem; line-height:1; flex-shrink:0;">📋</span>
          <h2 style="font-size:1.05rem; letter-spacing:0.5px; margin:0;">What Data Is Retained After Deletion?</h2>
        </div>
        <div class="info-box" style="font-size:1rem; margin:0;">
          <strong>None.</strong><br><br>
          Because ${appName} does not operate developer servers, deleting your hidden
          Google Drive app data permanently deletes <strong>100% of your entries and
          account credentials</strong>. There is no backup copy anywhere else.
          This action is <em>irreversible</em>.
        </div>
      </div>
    </div>

    
    

  </div>
</main>`;
}

// ── Mount ──────────────────────────────────────────────────────────────────────
document.querySelector('#app').innerHTML = [
  buildNavbar(),
  buildPage(),
  buildFooter(),
].join('');

document.title = `Delete Account — ${appName}`;
