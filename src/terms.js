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
      <li><a href="privacy-policy.html">Privacy Policy</a></li>
      <li><a href="terms.html" aria-current="page">Terms</a></li>
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
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: `
      <p>By downloading, installing, or using <strong>${appName}</strong> (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the App.</p>
      <p>We reserve the right to update these Terms at any time. We will notify you of material changes through the App or via email at least 30 days before changes take effect. Continued use constitutes acceptance.</p>
      <div class="info-box">
        <strong>Summary:</strong> These Terms are a legal agreement between you and ${appName}. They govern your use of the app and outline your rights and ours.
      </div>
    `
  },
  {
    id: 'description',
    title: 'Description of Service',
    content: `
      <p>${appName} is a personal diary application that allows you to:</p>
      <ul>
        <li>Create, edit, and organize encrypted personal diary entries.</li>
        <li>Attach photos, videos, and location data to your entries.</li>
        <li>Securely back up your encrypted diary to your personal Google Drive account.</li>
        <li>Access your diary using biometric authentication or a master password.</li>
        <li>Generate a Recovery Kit for account recovery.</li>
      </ul>
      <p>The core feature of ${appName} is <strong>client-side encryption</strong>. Your entries are encrypted on your device before any data is stored or transmitted. ${appName} cannot read your diary content.</p>
    `
  },
  {
    id: 'account',
    title: 'Account Registration & Security',
    content: `
      <p>To use ${appName}, you must create an account with a secure master password. You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your master password.</li>
        <li>All activity that occurs under your account.</li>
        <li>Safely storing your Recovery Kit — losing both your password and Recovery Kit means permanent loss of access to your encrypted diary data.</li>
        <li>Keeping your device secure to prevent unauthorized access.</li>
      </ul>
      <div class="info-box">
        <strong>Important:</strong> Because ${appName} uses end-to-end encryption and we do not have access to your encryption keys, we <em>cannot</em> recover your diary data if you lose your password and Recovery Kit. Please keep these safe.
      </div>
      <p>You must not use ${appName} for any unlawful purpose or share your account with others. You must be at least 13 years old to create an account.</p>
    `
  },
  {
    id: 'google-drive',
    title: 'Google Drive Integration',
    content: `
      <p>When you choose to enable Google Drive backup, you authorize ${appName} to access your Google Drive using Google's OAuth 2.0 framework. By enabling this integration:</p>
      <ul>
        <li>You grant ${appName} permission to create, read, update, and delete encrypted backup files within a dedicated ${appName} folder in your Google Drive.</li>
        <li>You acknowledge that all files stored in your Drive by ${appName} are encrypted and only accessible with your master password.</li>
        <li>You understand that your use of Google Drive is additionally governed by <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google's Terms of Service</a>.</li>
        <li>You can revoke ${appName}'s Google Drive access at any time via your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account settings</a>.</li>
      </ul>
      <p>${appName} is not affiliated with, endorsed by, or sponsored by Google LLC.</p>
    `
  },
  {
    id: 'user-content',
    title: 'Your Content & License',
    content: `
      <p><strong>Ownership:</strong> You retain full ownership of all content you create in ${appName}, including diary entries, photos, videos, and any other media ("Your Content").</p>
      <p><strong>License to Operate:</strong> You grant ${appName} a limited, non-exclusive, royalty-free license to process and transmit Your Content solely for the purpose of providing the service (e.g., encrypting and backing up data to your Google Drive). This does not permit us to read, analyze, or share your content.</p>
      <p><strong>Responsibility:</strong> You agree not to use ${appName} to store or distribute:</p>
      <ul>
        <li>Content that violates any applicable law or regulation.</li>
        <li>Content that infringes on the intellectual property rights of others.</li>
        <li>Child sexual abuse material or any illegal content involving minors.</li>
        <li>Malware, viruses, or other harmful code.</li>
      </ul>
    `
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use Policy',
    content: `
      <p>You agree to use ${appName} only for lawful personal purposes. You must not:</p>
      <ul>
        <li>Attempt to reverse engineer, decompile, or tamper with the App's encryption or security mechanisms.</li>
        <li>Use the App to harass, threaten, or harm others.</li>
        <li>Attempt to gain unauthorized access to the App's systems or other users' accounts.</li>
        <li>Use the App in any way that could disable, damage, or overburden our services.</li>
        <li>Violate any applicable local, state, national, or international law or regulation.</li>
      </ul>
    `
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: `
      <p>The ${appName} application — including its design, code, trademarks, logos, and all content not provided by you — is the intellectual property of ${appName} and is protected by applicable copyright, trademark, and other intellectual property laws.</p>
      <p>You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes. This license does not include the right to copy, modify, distribute, sell, or sublicense any portion of the App.</p>
    `
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers & Limitations of Liability',
    content: `
      <p><strong>No Warranty:</strong> ${appName} is provided "as is" and "as available" without warranties of any kind, express or implied.</p>
      <p><strong>Data Loss:</strong> We are not responsible for any loss of data resulting from:</p>
      <ul>
        <li>Loss of your master password and Recovery Kit.</li>
        <li>Deletion of your Google Drive backup files.</li>
        <li>Device failure, damage, or theft.</li>
        <li>Bugs, errors, or interruptions in the App.</li>
      </ul>
      <div class="info-box sepia">
        <strong>Backup Responsibility:</strong> Because all your data is encrypted with keys only you hold, ${appName} cannot restore your data if you lose access. Always keep your Recovery Kit in a safe place.
      </div>
      <p><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, ${appName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the App.</p>
    `
  },
  {
    id: 'termination',
    title: 'Termination',
    content: `
      <p>You may stop using ${appName} and delete your account at any time from within the App settings. Upon account deletion:</p>
      <ul>
        <li>All account-level data will be removed from our systems.</li>
        <li>Encrypted diary data stored locally on your device will be deleted.</li>
        <li>Encrypted backup files in your Google Drive are <strong>not automatically deleted</strong> — you must remove these from Google Drive manually.</li>
      </ul>
      <p>We reserve the right to suspend or terminate your account if you violate these Terms.</p>
    `
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: `
      <p>These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
      <p>Any disputes that cannot be resolved informally shall be resolved through binding arbitration, except where prohibited by law. If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
    `
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: `
      <p>If you have any questions about these Terms of Service, please contact us:</p>
      <div class="contact-card">
        <div class="contact-icon">✉️</div>
        <p>
          <strong>${appName} Support Team</strong><br>
          Email: <a href="mailto:${contactEmail}" id="terms-contact-email">${contactEmail}</a>
        </p>
      </div>
      <p style="margin-top:1rem;font-style:italic;color:var(--faded-ink);">We aim to respond to all inquiries within 5 business days.</p>
    `
  },
];

function buildLegalHero() {
  return `
<section class="legal-hero" aria-label="Terms of Service header">
  <div class="container legal-hero-inner">
    <p class="legal-badge">📜 Legal Document</p>
    <h1>Terms of Service</h1>
    <p>Please read these terms carefully before using ${appName}. They govern your rights and responsibilities when using our app.</p>
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
    <li><a href="#tos-${s.id}" class="toc-link">${i + 1}. ${s.title}</a></li>
  `).join('');

  const content = sections.map((s, i) => `
    <div class="legal-section" id="tos-${s.id}">
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

document.title = `Terms of Service — ${appName}`;

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
