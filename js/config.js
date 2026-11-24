/* config.js — thème Tailwind (polices, couleurs) */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      colors: {
        paper: '#FAF9F6',
        paperDark: '#121212',
        ink: '#1A1A1A',
        inkLight: '#666666',
        accent: '#8E2800',
        borderSubtle: '#E5E2DC',
      }
    }
  }
};
