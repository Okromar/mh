/* data-nl.js — contenu du CV en néerlandais (meta, libellés des lettres, sections M A R K O) */
window.contentData = window.contentData || {};
contentData.nl = {
  meta: {
    status: "Beschikbaar · Brussel / Stage & Werkplekleren",
    role: "PRODUCT-CV & INTERACTIEF PORTFOLIO",
    quote: "Engineering ontworpen als een product: met uiterste precisie, discipline en betrouwbaarheid.",
    hint: "Klik op een letter van MARCO om een sectie te bekijken",
    location: "Schaarbeek, Brussel, België",
    printBtn: "PDF / A4",
    contactBtn: "Contacteer mij",
    prev: "Vorige",
    next: "Volgende",
  },
  letters: {
    M: "Profiel",
    A: "Automatisering",
    R: "Realisaties",
    K: "Cursussen & Studie",
    O: "Openingen & Contact"
  },
  sections: {
    M: {
      number: "01",
      title: "Profiel & Productvisie",
      subtitle: "Waardepropositie en foto zonder vervorming",
      html: `
        <div class="space-y-4">
          <div class="p-4 bg-white border border-neutral-200 rounded-xl">
            <h4 class="font-serif font-bold text-lg text-neutral-900">Marco Kordi</h4>
            <p class="text-xs text-neutral-500 font-mono">Brussel (Schaarbeek) · Rijbewijs B</p>
            <p class="text-xs text-neutral-700 mt-2 leading-relaxed">
              Elektromechanica en automatisering benaderd als een betrouwbaar product: foutloze uitvoering, PLC-kennis en directe operationele inzetbaarheid.
            </p>
          </div>
        </div>
      `
    },
    A: {
      number: "02",
      title: "Automatisering & Technische Vaardigheden",
      subtitle: "Hard skills en industriële standaarden",
      html: `
        <div class="space-y-3">
          <div class="p-4 bg-white border border-neutral-200 rounded-xl text-xs space-y-1">
            <strong>Siemens TIA Portal & PLC :</strong> Ladder, Grafcet (IEC 60848) en gestructureerde programmatie.
          </div>
          <div class="p-4 bg-white border border-neutral-200 rounded-xl text-xs space-y-1">
            <strong>Elektrotechniek :</strong> Transiënte RC- en RL-kringen, dimensionering en EPLAN schema's.
          </div>
        </div>
      `
    },
    R: {
      number: "03",
      title: "Realisaties & Projecten",
      subtitle: "Toegepaste projecten en labo's",
      html: `
        <div class="p-4 bg-white border border-neutral-200 rounded-xl text-xs space-y-2">
          <strong>RC-Kring Simulator :</strong> Realtime dynamische interface voor laad/ontlaadcurves van condensatoren.
        </div>
      `
    },
    K: {
      number: "04",
      title: "Cursussen, Opleiding & Taalnorm",
      subtitle: "Opleiding en spelling zonder fouten",
      html: `
        <div class="space-y-3 text-xs">
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-950">
            <strong>Strikte Spelling :</strong> Foutloze communicatie als eerste professionele vereiste.
          </div>
          <p><strong>Bachelor Elektromechanica</strong> · Brussel (2023 — heden)</p>
        </div>
      `
    },
    O: {
      number: "05",
      title: "Openingen, Links & Contact",
      subtitle: "Directe actieknoppen",
      html: `
        <div class="space-y-3">
          <a href="tel:+32470000000" class="block p-3 bg-white border border-neutral-200 rounded-lg text-xs font-bold">
            Bellen : +32 470 00 00 00
          </a>
          <a href="mailto:marco.kordi@example.com" class="block p-3 bg-white border border-neutral-200 rounded-lg text-xs font-bold">
            Email : marco.kordi@example.com
          </a>
          <button onclick="printCVInLang('nl')" class="w-full py-2 bg-neutral-900 text-white rounded text-xs font-bold">
            PDF A4 Afdrukken (NL)
          </button>
        </div>
      `
    }
  }
};
