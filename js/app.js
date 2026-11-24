/* app.js — logique d'origine : langue, impression PDF, photo HDR (le tiroir est remplacé par whiteboard.js) */
// Current Active Language
let currentLang = 'fr';
let currentSectionKey = 'M';

// Sequence of letters for MARKO
const letterOrder = ['M', 'A', 'R', 'K', 'O'];

// Initialize UI on load
window.onload = function() {
  lucide.createIcons();
  setLanguage('fr');

  // Setup Keyboard shortcuts (ESC to close modal/drawer)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeDrawer();
      closePrintModal();
    }
  });
};

// Language Switcher Function
function setLanguage(lang) {
  currentLang = lang;

  // Update toggle buttons styling
  ['fr', 'nl', 'en'].forEach(l => {
    const btn = document.getElementById(`lang-${l}`);
    if (l === lang) {
      btn.className = "px-3 py-1 rounded-full text-xs font-semibold transition-all bg-ink text-white";
    } else {
      btn.className = "px-3 py-1 rounded-full text-xs font-semibold transition-all text-inkLight hover:text-ink";
    }
  });

  const currentPack = contentData[lang];

  // Update static hero and nav i18n
  document.getElementById('status-badge').textContent = currentPack.meta.status;
  document.querySelector('[data-i18n="hero.role"]').textContent = currentPack.meta.role;
  document.querySelector('[data-i18n="hero.quote"]').textContent = currentPack.meta.quote;
  document.querySelector('[data-i18n="hero.hint"]').textContent = currentPack.meta.hint;
  document.querySelector('[data-i18n="footer.location"]').textContent = currentPack.meta.location;
  document.querySelector('[data-i18n="nav.print"]').textContent = currentPack.meta.printBtn;
  document.querySelector('[data-i18n="nav.contactMe"]').textContent = currentPack.meta.contactBtn;
  document.querySelector('[data-i18n="drawer.prev"]').textContent = currentPack.meta.prev;
  document.querySelector('[data-i18n="drawer.next"]').textContent = currentPack.meta.next;

  // Update letter sub-labels for M, A, R, K, O
  letterOrder.forEach(k => {
    const el = document.querySelector(`[data-i18n="letters.${k}"]`);
    if (el && currentPack.letters[k]) {
      el.textContent = currentPack.letters[k];
    }
  });

  // Update print container labels
  updatePrintTemplateText(lang);

  // If drawer is open, refresh its content in the new language
  const drawer = document.getElementById('section-drawer');
  if (drawer.classList.contains('opacity-100')) {
    renderDrawerContent(currentSectionKey);
  }
}

// Open a specific Section Drawer
function openSection(letterKey) {
  currentSectionKey = letterKey;

  // Highlight active letter in the hero & in the drawer
  letterOrder.forEach(key => {
    const btn = document.getElementById(`btn-${key}`);
    const dBtn = document.getElementById(`drawer-btn-${key}`);
    if (btn) {
      if (key === letterKey) {
        btn.classList.add('active-letter');
      } else {
        btn.classList.remove('active-letter');
      }
    }
    if (dBtn) {
      if (key === letterKey) {
        dBtn.classList.add('bg-neutral-900', 'text-white');
      } else {
        dBtn.classList.remove('bg-neutral-900', 'text-white');
      }
    }
  });

  renderDrawerContent(letterKey);

  // Open Drawer Animation
  const drawer = document.getElementById('section-drawer');
  const panel = document.getElementById('drawer-panel');

  drawer.classList.remove('pointer-events-none', 'opacity-0');
  drawer.classList.add('pointer-events-auto', 'opacity-100');
  panel.classList.remove('translate-x-full');
  panel.classList.add('translate-x-0');

  lucide.createIcons();
}

// Render the content inside the drawer
function renderDrawerContent(letterKey) {
  const sectionInfo = contentData[currentLang].sections[letterKey];
  if (!sectionInfo) return;

  document.getElementById('drawer-letter-badge').textContent = letterKey;
  document.getElementById('drawer-subtitle').textContent = `Section ${sectionInfo.number} · ${sectionInfo.subtitle}`;
  document.getElementById('drawer-title').textContent = sectionInfo.title;
  document.getElementById('drawer-content').innerHTML = sectionInfo.html;

  lucide.createIcons();
}

// Close Section Drawer
function closeDrawer() {
  const drawer = document.getElementById('section-drawer');
  const panel = document.getElementById('drawer-panel');

  panel.classList.remove('translate-x-0');
  panel.classList.add('translate-x-full');
  drawer.classList.remove('opacity-100');
  drawer.classList.add('opacity-0');

  setTimeout(() => {
    drawer.classList.remove('pointer-events-auto');
    drawer.classList.add('pointer-events-none');
    // Clear active letter styles
    letterOrder.forEach(key => {
      const btn = document.getElementById(`btn-${key}`);
      if (btn) btn.classList.remove('active-letter');
    });
  }, 300);
}

// Previous & Next navigation inside drawer
function prevLetter() {
  const idx = letterOrder.indexOf(currentSectionKey);
  const newIdx = (idx - 1 + letterOrder.length) % letterOrder.length;
  openSection(letterOrder[newIdx]);
}

function nextLetter() {
  const idx = letterOrder.indexOf(currentSectionKey);
  const newIdx = (idx + 1) % letterOrder.length;
  openSection(letterOrder[newIdx]);
}

// HDR Photo Toggle Feature (anti-anamorphosis safe)
let isHdr = false;
function toggleHdrPhoto() {
  const img = document.getElementById('avatar-img');
  if (!img) return;
  isHdr = !isHdr;
  if (isHdr) {
    img.classList.add('brightness-110', 'saturate-125', 'contrast-115');
  } else {
    img.classList.remove('brightness-110', 'saturate-125', 'contrast-115');
  }
}

// Print Modal Helpers
function openPrintModal() {
  document.getElementById('print-modal').classList.remove('hidden');
  lucide.createIcons();
}

function closePrintModal() {
  document.getElementById('print-modal').classList.add('hidden');
}

// Print CV in specific language
function printCVInLang(targetLang) {
  setLanguage(targetLang);
  closePrintModal();
  setTimeout(() => {
    window.print();
  }, 150);
}

function triggerDirectPrint() {
  closePrintModal();
  window.print();
}

// Update Print Template texts based on language
function updatePrintTemplateText(lang) {
  const roleEl = document.getElementById('print-role');
  const pitchEl = document.getElementById('print-pitch');
  const hSkills = document.getElementById('print-h-skills');
  const hLangs = document.getElementById('print-h-langs');
  const hSoft = document.getElementById('print-h-soft');
  const hExp = document.getElementById('print-h-exp');
  const hEdu = document.getElementById('print-h-edu');

  if (lang === 'nl') {
    roleEl.textContent = "Student Automatisering · EPHEC · Brussel";
    pitchEl.textContent = "Nieuwsgierig, zelfstandig en veelzijdig: even thuis op een proefbord (schakelingen, digitale logica, zendamateurisme ON3) als achter een scherm (Python, interactief web, simulaties). Ik koppel wetenschappelijke theorie graag aan concrete realisaties.";
    hSkills.textContent = "Kernvaardigheden";
    hLangs.textContent = "Talen";
    hSoft.textContent = "Certificering";
    hExp.textContent = "Praktijkervaring";
    hEdu.textContent = "Opleiding";
  } else if (lang === 'en') {
    roleEl.textContent = "Automation student · EPHEC · Brussels";
    pitchEl.textContent = "Curious, self-reliant and versatile: equally at home on a breadboard (circuits, digital logic, ON3 amateur radio) and behind a screen (Python, interactive web, simulations). I like linking scientific theory to hands-on projects.";
    hSkills.textContent = "Core Competencies";
    hLangs.textContent = "Languages";
    hSoft.textContent = "Certification";
    hExp.textContent = "Field experience";
    hEdu.textContent = "Education";
  } else {
    roleEl.textContent = "Étudiant en Automatisation · EPHEC · Bruxelles";
    pitchEl.textContent = "Curieux, autonome et polyvalent : à l’aise sur une platine d’essai (circuits, logique numérique, radio-amateurisme ON3) comme derrière un écran (Python, web interactif, simulations). Je relie la théorie scientifique à des réalisations concrètes.";
    hSkills.textContent = "Compétences Clés";
    hLangs.textContent = "Langues";
    hSoft.textContent = "Certification";
    hExp.textContent = "Expériences de terrain";
    hEdu.textContent = "Formation";
  }
}
