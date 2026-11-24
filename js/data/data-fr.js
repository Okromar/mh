/* data-fr.js — contenu du CV en français (meta, libellés des lettres, sections M A R K O) */
window.contentData = window.contentData || {};
contentData.fr = {
  meta: {
    status: "Disponible · Bruxelles / Alternance & Stage",
    role: "CV PRODUIT & PORTFOLIO INTERACTIF",
    quote: "L'ingénierie comme un produit pensé pour performer avec rigueur et précision.",
    hint: "Cliquez sur une lettre de MARCO pour explorer les sections",
    location: "Schaerbeek, Bruxelles, Belgique",
    printBtn: "PDF / A4",
    contactBtn: "Me contacter",
    prev: "Précédent",
    next: "Suivant",
  },
  letters: {
    M: "Profil",
    A: "Automatismes",
    R: "Réalisations",
    K: "Cours & Études",
    O: "Ouvertures"
  },
  sections: {
    M: {
      number: "01",
      title: "Profil & Positionnement Produit",
      subtitle: "Fiche d'identité, proposition de valeur & photo optimisée",
      html: `
        <div class="space-y-6">
          <!-- Photo with zero distortion & HDR toggle -->
          <div class="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-white border border-neutral-200">
            <div class="relative group">
              <div class="w-32 h-32 rounded-2xl overflow-hidden bg-neutral-100 border-2 border-neutral-800 shadow-md">
                <img id="avatar-img" 
                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                     alt="Portrait Marco Kordi" 
                     class="w-full h-full object-cover object-top transition duration-300 filter contrast-105"
                     style="aspect-ratio: 1/1;"
                />
              </div>
              <span class="absolute bottom-1 right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-white" title="Actif"></span>
            </div>
            <div class="space-y-2 text-center sm:text-left">
              <span class="px-2.5 py-1 text-[11px] font-mono uppercase bg-neutral-100 border border-neutral-300 rounded-md">Spécialité Mécatronique & Automatisme</span>
              <h4 class="text-xl font-serif font-bold text-neutral-900">Marco Kordi</h4>
              <p class="text-xs text-neutral-500 font-mono">Bruxelles (Schaerbeek) · Permis B</p>
              <div class="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
                <button onclick="toggleHdrPhoto()" class="text-[11px] font-mono px-2.5 py-1 border border-neutral-300 rounded hover:bg-neutral-100 transition flex items-center">
                  ✨ Basculer Effet HDR / Clean-cut
                </button>
              </div>
            </div>
          </div>

          <div class="prose text-neutral-700 leading-relaxed text-sm space-y-3">
            <h5 class="text-base font-bold font-serif text-neutral-900">Le Candidat conçu comme un Produit</h5>
            <p>
              Tout comme un équipement industriel de haute précision, un collaborateur apporte une valeur concrète, un temps d'adaptation réduit et une tolérance zéro pour les erreurs évitables.
            </p>
            <p>
              Mon profil combine l'électrotechnique, les automates programmables et les interfaces de simulation numériques pour offrir un travail rigoureux et immédiatement opérationnel.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <div class="p-3 bg-white border border-neutral-200 rounded-lg">
              <span class="text-xs font-mono text-neutral-400 block">OBJECTIF</span>
              <strong class="text-sm text-neutral-800">Stage ou Alternance en Automatisation</strong>
            </div>
            <div class="p-3 bg-white border border-neutral-200 rounded-lg">
              <span class="text-xs font-mono text-neutral-400 block">VALEUR AJOUTÉE</span>
              <strong class="text-sm text-neutral-800">Rigueur technique & zéro compromis</strong>
            </div>
          </div>
        </div>
      `
    },
    A: {
      number: "02",
      title: "Automatismes & Compétences Techniques",
      subtitle: "Hard Skills & Capacités d'ingénierie",
      html: `
        <div class="space-y-5">
          <p class="text-sm text-neutral-600">
            Des bases solides éprouvées en séances de laboratoire et simulations industrielles :
          </p>

          <div class="space-y-3">
            <div class="p-4 bg-white border border-neutral-200 rounded-xl space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-bold text-sm text-neutral-900">Automates PLC (Siemens TIA Portal)</span>
                <span class="text-xs font-mono px-2 py-0.5 bg-neutral-100 rounded">Avancé</span>
              </div>
              <p class="text-xs text-neutral-600">Programmation en Grafcet normalisé, Ladder, Structured Text, gestion des entrées/sorties analogiques et sécurité machine.</p>
            </div>

            <div class="p-4 bg-white border border-neutral-200 rounded-xl space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-bold text-sm text-neutral-900">Électrotechnique & Circuits (RC, RL, Transitoires)</span>
                <span class="text-xs font-mono px-2 py-0.5 bg-neutral-100 rounded">Maîtrise</span>
              </div>
              <p class="text-xs text-neutral-600">Calculs d'impédance, constante de temps tau, filtres analogiques, dimensionnement et schémas sous EPLAN.</p>
            </div>

            <div class="p-4 bg-white border border-neutral-200 rounded-xl space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-bold text-sm text-neutral-900">Outils & Logiciels</span>
                <span class="text-xs font-mono px-2 py-0.5 bg-neutral-100 rounded">Opérationnel</span>
              </div>
              <p class="text-xs text-neutral-600">SolidWorks (pièces/assemblages), FluidSIM pneumatique/hydraulique, JavaScript & HTML5 pour outils de test.</p>
            </div>
          </div>
        </div>
      `
    },
    R: {
      number: "03",
      title: "Réalisations & Projets Concrets",
      subtitle: "Démonstrateurs tangibles et bancs d'essai",
      html: `
        <div class="space-y-4">
          <div class="p-5 bg-white border border-neutral-200 rounded-xl space-y-3">
            <div class="flex justify-between items-start">
              <div>
                <span class="text-xs font-mono text-neutral-400">PROJET 01 · SIMULATION</span>
                <h4 class="font-bold text-base text-neutral-900">Simulateur Interactif de Circuits RC</h4>
              </div>
              <span class="px-2 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold rounded">Interactif</span>
            </div>
            <p class="text-xs text-neutral-600 leading-relaxed">
              Développement d'un outil visuel reproduisant fidèlement les courbes exponentielles de charge/décharge d'un condensateur selon la constante de temps (tau = R·C).
            </p>
          </div>

          <div class="p-5 bg-white border border-neutral-200 rounded-xl space-y-3">
            <div class="flex justify-between items-start">
              <div>
                <span class="text-xs font-mono text-neutral-400">PROJET 02 · ATELIER</span>
                <h4 class="font-bold text-base text-neutral-900">Câblage d'Armoire de Commande & Sécurité</h4>
              </div>
              <span class="px-2 py-1 bg-neutral-100 text-neutral-800 text-[10px] font-mono font-bold rounded">Atelier</span>
            </div>
            <p class="text-xs text-neutral-600 leading-relaxed">
              Schématisation EPLAN, intégration de relais de sécurité, arrêt d'urgence canal double et raccordement de moteurs triphasés conformément aux directives européennes.
            </p>
          </div>
        </div>
      `
    },
    K: {
      number: "04",
      title: "Cours, Formation & Certification Voltaire",
      subtitle: "Bases théoriques et excellence rédactionnelle",
      html: `
        <div class="space-y-6">
          <!-- Voltaire spotlight box -->
          <div class="p-5 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
            <div class="flex items-center space-x-2 text-amber-900 font-bold text-sm">
              <i data-lucide="award" class="w-5 h-5 text-amber-700"></i>
              <span>Certification Projet Voltaire : Zéro Faute</span>
            </div>
            <p class="text-xs text-amber-950 leading-relaxed">
              Un CV ou un rapport comportant des fautes est éliminé dans 80 % des sélections. La rigueur technique passe d'abord par la précision de la langue et le soin du détail.
            </p>
          </div>

          <!-- Academic background -->
          <div class="border-l-2 border-neutral-300 pl-4 space-y-4 ml-1">
            <div>
              <span class="text-xs font-mono text-neutral-400">2023 — EN COURS</span>
              <h4 class="text-sm font-bold text-neutral-900">Bachelier en Électromécanique & Automatisation</h4>
              <p class="text-xs text-neutral-600 font-mono">Enseignement Supérieur Technique · Bruxelles</p>
            </div>
            <div>
              <span class="text-xs font-mono text-neutral-400">2020 — 2023</span>
              <h4 class="text-sm font-bold text-neutral-900">CESS Sciences & Techniques</h4>
              <p class="text-xs text-neutral-600 font-mono">Bruxelles, Belgique</p>
            </div>
          </div>

          <!-- Languages -->
          <div class="space-y-2">
            <h5 class="text-xs font-mono uppercase tracking-wider text-neutral-500">Compétences Linguistiques</h5>
            <div class="p-2.5 bg-white border border-neutral-200 rounded-lg flex justify-between text-xs">
              <span><strong>Français :</strong> Langue maternelle</span>
              <span class="font-mono font-bold">C2</span>
            </div>
            <div class="p-2.5 bg-white border border-neutral-200 rounded-lg flex justify-between text-xs">
              <span><strong>Néerlandais :</strong> Technique & pro</span>
              <span class="font-mono font-bold">B1 / B2</span>
            </div>
            <div class="p-2.5 bg-white border border-neutral-200 rounded-lg flex justify-between text-xs">
              <span><strong>Anglais :</strong> Technique</span>
              <span class="font-mono font-bold">B2</span>
            </div>
          </div>
        </div>
      `
    },
    O: {
      number: "05",
      title: "Ouvertures, Liens & Actions Directes",
      subtitle: "Actions interactives & Téléchargement PDF",
      html: `
        <div class="space-y-4">
          <p class="text-xs text-neutral-600 leading-relaxed">
            Chaque lien ci-dessous déclenche une action réelle :
          </p>

          <!-- Phone -->
          <a href="tel:+32470000000" class="flex items-center justify-between p-3.5 bg-white border border-neutral-200 hover:border-neutral-800 rounded-xl transition group">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-neutral-100 rounded-lg group-hover:bg-ink group-hover:text-white transition">
                <i data-lucide="phone-call" class="w-4 h-4"></i>
              </div>
              <div>
                <span class="text-[10px] font-mono text-neutral-400 block">APPEL DIRECT</span>
                <strong class="text-xs text-neutral-900">+32 470 00 00 00</strong>
              </div>
            </div>
            <span class="text-xs font-mono text-neutral-500 group-hover:translate-x-1 transition-transform">Appeler →</span>
          </a>

          <!-- Email -->
          <a href="mailto:marco.kordi@example.com?subject=Contact%20Recrutement%20-%20Marco%20Kordi" class="flex items-center justify-between p-3.5 bg-white border border-neutral-200 hover:border-neutral-800 rounded-xl transition group">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-neutral-100 rounded-lg group-hover:bg-ink group-hover:text-white transition">
                <i data-lucide="send" class="w-4 h-4"></i>
              </div>
              <div>
                <span class="text-[10px] font-mono text-neutral-400 block">EMAIL PRÉREMPLI</span>
                <strong class="text-xs text-neutral-900">marco.kordi@example.com</strong>
              </div>
            </div>
            <span class="text-xs font-mono text-neutral-500 group-hover:translate-x-1 transition-transform">Écrire →</span>
          </a>

          <!-- Google Maps -->
          <a href="https://maps.google.com/?q=Schaerbeek,Brussels" target="_blank" rel="noopener" class="flex items-center justify-between p-3.5 bg-white border border-neutral-200 hover:border-neutral-800 rounded-xl transition group">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-neutral-100 rounded-lg group-hover:bg-ink group-hover:text-white transition">
                <i data-lucide="map-pin" class="w-4 h-4"></i>
              </div>
              <div>
                <span class="text-[10px] font-mono text-neutral-400 block">LOCALISATION</span>
                <strong class="text-xs text-neutral-900">Schaerbeek, Bruxelles</strong>
              </div>
            </div>
            <span class="text-xs font-mono text-neutral-500 group-hover:translate-x-1 transition-transform">Maps →</span>
          </a>

          <!-- PDF direct button -->
          <div class="pt-2">
            <button onclick="printCVInLang(currentLang)" class="w-full py-2.5 bg-ink text-white text-xs font-bold rounded-lg hover:bg-neutral-800 transition flex items-center justify-center">
              <i data-lucide="printer" class="w-4 h-4 mr-2"></i> Télécharger le PDF A4 officiel
            </button>
          </div>
        </div>
      `
    }
  }
};
