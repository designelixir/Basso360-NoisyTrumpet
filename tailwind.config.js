/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#36444D",
        "brand-gray": "#5F6F75",
        "brand-dark-gray": "#36444D",
        "brand-brown": "#763C3E",
        "brand-light-brown": "#7A4747",
        "brand-red": "#945045",
        "brand-dark-red": "#824445",
        "brand-light-red": "#A5645A",
        "brand-white": "#F3F3F3",
        "brand-orange": "#DF6F1D",
        "brand-blue": "#3687BA",
        "brand-green": "#799F4B",
      },
      aspectRatio: {
        "16/9": [16, 9],
        "4/3": [4, 3],
        "21/9": [21, 9],
      },
      fontFamily: {
        sans: ["var(--font-heading)"],
        serif: ["var(--font-body)"],
        body: ["var(--font-text)"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      minWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    ({ addVariant }) => {
      [
        // Positional
        ["first", ":first-child"],
        ["last", ":last-child"],
        ["only", ":only-child"],
        ["odd", ":nth-child(odd)"],
        ["even", ":nth-child(even)"],
        "first-of-type",
        "last-of-type",
        "only-of-type",

        // State
        "visited",
        "target",
        ["open", "[open]"],

        // Forms
        "default",
        "checked",
        "indeterminate",
        "placeholder-shown",
        "autofill",
        "required",
        "valid",
        "invalid",
        "in-range",
        "out-of-range",
        "read-only",

        // Content
        "empty",

        // Interactive
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled",
      ]
        .map((variant) =>
          Array.isArray(variant) ? variant : [variant, `:${variant}`]
        )
        .forEach(([variantName, state]) => {
          addVariant(`parent-${variantName}`, `:merge(.parent)${state} > &`);
        });
      addVariant("invalid", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`;
        });
      });
    },
  ],
  safelist: [
    "bg-brand-orange",
    "bg-brand-blue",
    "bg-brand-green",
    "bg-brand-gray",
    "bg-brand-dark-gray",
    "bg-brand-brown",
    "bg-brand-red",
    "bg-brand-dark-red",
    "bg-brand-light-red",
    "bg-brand-white",
    "text-brand-orange",
    "text-brand-blue",
    "text-brand-green",
    "hover:bg-brand-orange",
    "hover:bg-brand-blue",
    "hover:bg-brand-green",
    "hover:text-brand-orange",
    "hover:text-brand-blue",
    "hover:text-brand-green",
    "border-brand-orange",
    "border-brand-blue",
    "border-brand-green",
    `w-1/2`,
    `w-full`,
    `col-span-1`,
    `col-span-2`,
    `col-span-3`,
    `col-span-4`,
  ],
};
