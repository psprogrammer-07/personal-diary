import './style.css';
import { globalConfig } from './config.js';

const { appName, contactEmail, effectiveDate, lastUpdated } = globalConfig;

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
      <li><a href="privacy-policy.html" aria-current="page">Privacy Policy</a></li>
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
      <li><a href="mailto:${contactEmail}" id="footer-contact-link">Contact</a></li>
    </ul>
  </div>
</footer>`;
}

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `
      <p>Welcome to <strong>${appName}</strong> ("we," "us," or "our"). We built ${appName} as a private, encrypted personal diary application. This Privacy Policy explains what information we collect, how we use it, and what rights you have.</p>
      <p>By using ${appName}, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use the application.</p>
      <div class="info-box">
        <strong>Our Core Principle:</strong> ${appName} is designed so that we <em>cannot</em> read your diary entries. All content is encrypted on your device before any data is transmitted or stored. Your diary belongs only to you.
      </div>
    `
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: `
      <p>We collect the minimum information necessary to operate the app:</p>
      <h3 style="font-family:var(--font-display);font-size:0.9rem;letter-spacing:0.5px;margin:1rem 0 0.5rem;">a) Information You Provide</h3>
      <ul>
        <li><strong>Account credentials:</strong> A username/email and a master password (stored only as a secure cryptographic hash — we never store your plaintext password).</li>
        <li><strong>Google Account access:</strong> When you connect Google Drive, we receive an OAuth token to write and read encrypted backup files to your Google Drive.</li>
      </ul>
      <h3 style="font-family:var(--font-display);font-size:0.9rem;letter-spacing:0.5px;margin:1rem 0 0.5rem;">b) Diary Content</h3>
      <ul>
        <li>All diary entries — including text, photos, videos, and location data — are <strong>encrypted on your device</strong> before being stored locally or backed up to Google Drive.</li>
        <li><strong>We cannot access your diary content.</strong> The encryption keys are derived from your password and never leave your device in unencrypted form.</li>
      </ul>
      <h3 style="font-family:var(--font-display);font-size:0.9rem;letter-spacing:0.5px;margin:1rem 0 0.5rem;">c) Device & Usage Information</h3>
      <ul>
        <li>Basic device information (OS version, device model) for crash reporting and compatibility.</li>
        <li>Anonymized usage analytics (e.g., feature usage counts) with no personally identifiable information and no diary content.</li>
      </ul>
      <div class="info-box sepia">
        <strong>Location Data:</strong> If you attach location tags to diary entries, this data is encrypted with your entry and only accessible to you. We do not collect raw location data on our servers.
      </div>
    `
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: `
      <p>We use the information we collect to:</p>
      <ul>
        <li>Operate and maintain the ${appName} application.</li>
        <li>Authenticate your identity when you log in.</li>
        <li>Facilitate encrypted backup and restore of your diary to and from your Google Drive.</li>
        <li>Respond to your support requests and communications.</li>
        <li>Send important service notifications (e.g., security updates).</li>
        <li>Improve performance and features using anonymized analytics.</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>
      <p>We do <strong>not</strong> use your information for advertising, we do not sell your data, and we do not share your data with third parties except as described in this policy.</p>
    `
  },
  {
    id: 'google-drive',
    title: 'Google Drive Integration & OAuth',
    content: `
      <p>${appName} integrates with Google Drive to provide encrypted cloud backup. We use Google's OAuth 2.0 authorization framework.</p>
      <p>When you authorize ${appName} to access your Google Drive:</p>
      <ul>
        <li>We request only the permissions needed to read and write encrypted backup files in a dedicated ${appName} folder in your Drive.</li>
        <li>All files written to your Google Drive are <strong>fully encrypted</strong> before they leave your device. Google cannot read your diary content, and neither can we.</li>
        <li>You can revoke ${appName}'s access at any time via your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account security settings</a>.</li>
        <li>Revoking access does not delete your locally stored diary or your encrypted Drive backups.</li>
      </ul>
      <div class="info-box">
        <strong>Google API Disclosure:</strong> ${appName}'s use of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.
      </div>
    `
  },
  {
    id: 'data-storage',
    title: 'Data Storage & Security',
    content: `
      <p><strong>Local Storage:</strong> Your diary data is stored locally in an encrypted database. The encryption key is derived from your master password. Without your password, the data is unreadable.</p>
      <p><strong>Cloud Storage:</strong> Encrypted backups are stored in your own Google Drive account. We do not maintain a separate copy on our servers.</p>
      <p><strong>Security Measures:</strong></p>
      <ul>
        <li>AES-256-GCM symmetric encryption for diary content.</li>
        <li>Argon2/PBKDF2-based key derivation to protect your master password.</li>
        <li>Secure enclave / Keystore-backed key storage where supported by your device.</li>
        <li>Emergency Recovery Kit — a printable encrypted key backup to regain access if you forget your password.</li>
      </ul>
      <p>Despite these measures, no system is perfectly secure. Please use a strong, unique master password and keep your Recovery Kit safe.</p>
    `
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing & Third Parties',
    content: `
      <p>We do not sell, trade, or rent your personal information. We may share limited information only in these circumstances:</p>
      <ul>
        <li><strong>Service Providers:</strong> Third-party providers (e.g., crash reporting, anonymous analytics) who act as data processors under strict confidentiality agreements. They cannot access your encrypted diary content.</li>
        <li><strong>Legal Requirements:</strong> We may disclose information if required by law or court order. Since your diary content is encrypted and inaccessible to us, we cannot disclose diary content even under such circumstances.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, we will notify you before your information becomes subject to a different privacy policy.</li>
      </ul>
    `
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Choices',
    content: `
      <p>You have the following rights regarding your personal information:</p>
      <ul>
        <li><strong>Access:</strong> You can view all data stored locally on your device at any time within the app.</li>
        <li><strong>Deletion:</strong> Delete individual entries, all diary data, or your entire account from within the app. Your encrypted Drive backups remain in your Google Drive and must be deleted manually.</li>
        <li><strong>Portability:</strong> Your encrypted backup files in Google Drive belong to you. Download or delete them directly from Google Drive at any time.</li>
        <li><strong>Correction:</strong> Update your account information (e.g., email address) from within app settings.</li>
        <li><strong>Withdraw Consent:</strong> Revoke Google Drive access anytime via your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account settings</a>. This disables cloud backup but won't affect your local diary.</li>
      </ul>
    `
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: `
      <p>${appName} is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately and we will take steps to delete such information.</p>
    `
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: `
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you through the app or by email at least 30 days before changes take effect.</p>
      <p>The "Last Updated" date at the top of this page indicates when this policy was last revised. Your continued use of ${appName} after changes become effective constitutes acceptance of the revised policy.</p>
    `
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: `
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out:</p>
      <div class="contact-card">
        <div class="contact-icon">✉️</div>
        <p>
          <strong>${appName} Privacy Team</strong><br>
          Email: <a href="mailto:${contactEmail}" id="privacy-contact-email">${contactEmail}</a>
        </p>
      </div>
      <p style="margin-top:1rem;font-style:italic;color:var(--faded-ink);">We aim to respond to all privacy-related inquiries within 5 business days.</p>
    `
  },
];

function buildLegalHero() {
  return `
<section class="legal-hero" aria-label="Privacy Policy header">
  <div class="container legal-hero-inner">
    <p class="legal-badge">📜 Legal Document</p>
    <h1>Privacy Policy</h1>
    <p>${appName} is committed to protecting your privacy. This policy explains exactly what data we collect, why, and how it is kept safe.</p>
    <div class="legal-meta">
      <span>Effective: ${effectiveDate}</span>
      <span>·</span>
      <span>Last Updated: ${lastUpdated}</span>
    </div>
  </div>
</section>`;
}

function buildLegalBody() {
  const toc = sections.map((s, i) => `
    <li><a href="#pp-${s.id}" class="toc-link">${i + 1}. ${s.title}</a></li>
  `).join('');

  const content = sections.map((s, i) => `
    <div class="legal-section" id="pp-${s.id}">
      <h2><span class="section-num">${i + 1}.</span> ${s.title}</h2>
      ${s.content}
    </div>
  `).join('');

  return `
<div class="legal-body container">
  <aside class="legal-toc" aria-label="Table of contents">
    <p class="toc-title">Contents</p>
    <ul class="toc-list" role="list">${toc}</ul>
  </aside>
  <article class="legal-content">${content}</article>
</div>`;
}

// ── Mount ──
document.querySelector('#app').innerHTML = [
  buildNavbar(),
  '<main>',
  buildLegalHero(),
  buildLegalBody(),
  '</main>',
  buildFooter(),
].join('');

document.title = `Privacy Policy — ${appName}`;

// TOC active highlight
const tocLinks = document.querySelectorAll('.toc-link');
const sectionEls = document.querySelectorAll('.legal-section');
const tocObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.toc-link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-20% 0px -70% 0px' }
);
sectionEls.forEach(el => tocObserver.observe(el));
