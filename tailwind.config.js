module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fdfdfb",
        "beige-light": "#F3EEEA",
        beige: "#EBE3D5",
        "brown-light": "#B0A695",
        brown: "#776B5D",
        "brown-dark": "#3a2728",
        green: "#ABC4AA",
        red: "#ad253e",
      },
      fontFamily: {
        ms: ["Montserrat", "sans-serif"],
      },
      height: {
        50: "50dvh",
      },
      animation: {
        typing: "typing 3s steps(35)",
        fade: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        typing: {
          from: {
            width: 0,
          },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
