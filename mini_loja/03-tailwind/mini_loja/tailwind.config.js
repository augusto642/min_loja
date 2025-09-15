export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        primary: "var(--color-primary)",
        "primary-contrast": "var(--color-primary-contrast)",
        border: "var(--color-border)",
        "tag-bg": "var(--color-tag-bg)",
      }
    },
  },
  plugins: [],
}
