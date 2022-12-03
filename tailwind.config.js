/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
      './src/components/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/ui/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
      extend: {
          width:{
              "13":"13%",
              "17.5":"17.5%"
          },
          colors: {
              darkPrimary: '#282c34',
              // darkSecondary: "#292929",
              secPurple:"#BD00FF",
              secBlue: "#5D2BE9",
              prevBg: "#422246",
              darkBorder: "#525252"
          },
          boxShadow: {
              'prevBox': '-2px -2px 4px rgba(107, 107, 107, 0.25)',
              'editBox':  '0 1px 6px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23)',
              'sideBar': '4px 4px 4px rgba(216, 215, 215, 0.25)'
            },
          keyframes: {
              leftToRight: {
                  '0%': { opacity: 0, left: '-100px' },
                  '70%': { left: '30px' },
                  '100%': { opacity: 1, left: '0px' }
              },
              leftToRightFadeOut: {
                  '0%': {},
                  '100%': { opacity: 0, left: '100px' }
              },
              topToBottom: {
                  '0%': { opacity: 0, top: '-30px' },
                  '70%': { top: '30px' },
                  '100%': { opacity: 1, top: '0px' }
              },
              fadeIn: {
                  '0%': { opacity: 0, transform: 'scale(0.5, 0.5)' },
                  '70%': { transform: 'scale(1.1, 1.1)' },
                  '100%': { opacity: 1, transform: 'scale(1, 1)' }
              },
              fadeOut: {
                  '100%': { opacity: 0, transform: 'scale(0.5, 0.5)' },
                  '70%': { transform: 'scale(1.1, 1.1)' },
                  '0%': { opacity: 1, transform: 'scale(1, 1)' }
              }
          },
          animation: {
              leftToRight: 'leftToRight 500ms ease-in-out',
              leftToRightFadeOut: 'leftToRightFadeOut 300ms ease-in-out',
              topToBottom: 'topToBottom 500ms ease-in-out',
              fadeIn: 'fadeIn 500ms ease-in-out',
              fadeOut: 'fadeOut 500ms ease-in-out'
          }
      }
  },
  plugins: []
};
