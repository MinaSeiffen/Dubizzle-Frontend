/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        'vh-1/100': '10vh',
        'vh-10/100': '10vh',
        'vh-11/100': '11vh',
        'vh-12/100': '12vh',
        'vh-13/100': '13vh',
        'vh-14/100': '14vh',
        'vh-15/100': '15vh',
        'vh-16/100': '16vh',
        'vh-17/100': '17vh',
        'vh-18/100': '18vh',
        'vh-19/100': '19vh',
        'vh-20/100': '20vh',
        'vh-21/100': '21vh',
        'vh-22/100': '22vh',
        'vh-23/100': '23vh',
        'vh-24/100': '24vh',
        'vh-25/100': '25vh',
        'vh-26/100': '26vh',
        'vh-27/100': '27vh',
        'vh-28/100': '28vh',
        'vh-29/100': '29vh',
        'vh-30/100': '30vh',
        'vh-31/100': '31vh',
        'vh-32/100': '32vh',
        'vh-33/100': '33vh',
        'vh-34/100': '34vh',
        'vh-35/100': '35vh',
        'vh-36/100': '36vh',
        'vh-37/100': '37vh',
        'vh-38/100': '38vh',
        'vh-39/100': '39vh',
        'vh-40/100': '40vh',
        'vh-50/100': '50vh',
        'vh-60/100': '60vh',
        'vh-70/100': '70vh',
        'vh-80/100': '80vh',
        'vh-90/100': '90vh',
        'vh-100/100': '100vh',

      },
      width: {
        'vw-1/100': '1vw',
        'vw-10/100': '10vw',
        'vw-11/100': '11vw',
        'vw-12/100': '12vw',
        'vw-13/100': '13vw',
        'vw-14/100': '14vw',
        'vw-15/100': '15vw',
        'vw-16/100': '16vw',
        'vw-17/100': '17vw',
        'vw-18/100': '18vw',
        'vw-19/100': '19vw',
        'vw-20/100': '20vw',
        'vw-21/100': '21vw',
        'vw-22/100': '22vw',
        'vw-23/100': '23vw',
        'vw-24/100': '24vw',
        'vw-25/100': '25vw',
        'vw-26/100': '26vw',
        'vw-27/100': '27vw',
        'vw-28/100': '28vw',
        'vw-29/100': '29vw',
        'vw-30/100': '30vw',
        'vw-31/100': '31vw',
        'vw-32/100': '32vw',
        'vw-33/100': '33vw',
        'vw-34/100': '34vw',
        'vw-35/100': '35vw',
        'vw-36/100': '36vw',
        'vw-37/100': '37vw',
        'vw-38/100': '38vw',
        'vw-39/100': '39vw',
        'vw-40/100': '40vw',
        'vw-50/100': '50vw',
        'vw-51/100': '51vw',
        'vw-52/100': '52vw',
        'vw-53/100': '53vw',
        'vw-54/100': '54vw',
        'vw-55/100': '55vw',
        'vw-56/100': '56vw',
        'vw-57/100': '57vw',
        'vw-58/100': '58vw',
        'vw-59/100': '59vw',
        'vw-60/100': '60vw',
        'vw-61/100': '61vw',
        'vw-62/100': '62vw',
        'vw-63/100': '63vw',
        'vw-64/100': '64vw',
        'vw-70/100': '70vw',
        'vw-74/100': '74vw',
        'vw-80/100': '80vw',
        'vw-90/100': '90vw',
        'vw-100/100': '100vw',

      }
    },
    container: {
      center: true, padding: '8px',
    },

  },
  plugins:  [
    // eslint-disable-next-line no-undef
    require("daisyui")
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

}

