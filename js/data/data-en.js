/* data-en.js — contenu du CV en anglais (meta, libellés des lettres, sections M A R K O) */
window.contentData = window.contentData || {};
contentData.en = {
  meta: {
    status: "Available · Brussels / Apprenticeship & Internship",
    role: "PRODUCT CV & INTERACTIVE EDITORIAL RESUME",
    quote: "Engineering conceived as a high-performing product: built with precision, rigor, and zero defects.",
    hint: "Click on any letter of MARCO to explore sections",
    location: "Schaerbeek, Brussels, Belgium",
    printBtn: "PDF / A4",
    contactBtn: "Contact me",
    prev: "Previous",
    next: "Next",
  },
  letters: {
    M: "Mission",
    A: "Automation",
    R: "Realizations",
    K: "Courses",
    O: "Openings"
  },
  sections: {
    M: {
      number: "01",
      title: "Mission & Value Proposition",
      subtitle: "Product mindset applied to engineering talent",
      html: `
        <div class="p-4 bg-white border border-neutral-200 rounded-xl space-y-2 text-xs">
          <h4 class="font-serif font-bold text-base text-neutral-900">Marco Kordi</h4>
          <p class="text-neutral-500 font-mono">Brussels, Belgium · Driver's License B</p>
          <p class="text-neutral-700 leading-relaxed">
            Conceiving the candidate profile as a reliable, high-yield product with zero-defect execution in electromechanics and PLC automation.
          </p>
        </div>
      `
    },
    A: {
      number: "02",
      title: "Automation & Technical Competencies",
      subtitle: "Hard skills and engineering standards",
      html: `
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-white border border-neutral-200 rounded-lg">
            <strong>Siemens TIA Portal :</strong> Ladder, Grafcet (IEC 60848) and machine safety loops.
          </div>
          <div class="p-3 bg-white border border-neutral-200 rounded-lg">
            <strong>Circuit Physics :</strong> RC and RL transient state response, EPLAN design.
          </div>
        </div>
      `
    },
    R: {
      number: "03",
      title: "Realizations & Key Projects",
      subtitle: "Applied prototypes and test benches",
      html: `
        <div class="p-4 bg-white border border-neutral-200 rounded-xl text-xs">
          <strong>RC Circuit Interactive Simulator :</strong> Real-time waveform computation and visualization for capacitor charge/discharge curves.
        </div>
      `
    },
    K: {
      number: "04",
      title: "Courses, Curriculum & Spelling Standard",
      subtitle: "Academic track and impeccable writing",
      html: `
        <div class="space-y-3 text-xs">
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-950">
            <strong>Zero-Spelling-Mistake Standard :</strong> Strict proofreading adhering to professional hiring expectations.
          </div>
          <p><strong>Bachelor in Electromechanics & Automation</strong> · Brussels (2023 — Present)</p>
        </div>
      `
    },
    O: {
      number: "05",
      title: "Openings & Interactive Contact",
      subtitle: "Direct action links and PDF generation",
      html: `
        <div class="space-y-3">
          <a href="tel:+32470000000" class="block p-3 bg-white border border-neutral-200 rounded-lg text-xs font-bold">
            Call directly : +32 470 00 00 00
          </a>
          <a href="mailto:marco.kordi@example.com" class="block p-3 bg-white border border-neutral-200 rounded-lg text-xs font-bold">
            Email : marco.kordi@example.com
          </a>
          <button onclick="printCVInLang('en')" class="w-full py-2 bg-neutral-900 text-white rounded text-xs font-bold">
            Print / Export English PDF (A4)
          </button>
        </div>
      `
    }
  }
};
