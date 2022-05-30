module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,jpg}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      cardBackground:'#3D3E43',
      nameColor:'#FFBD14',
      clickedColor:'#ff9700',
      whiteColor:'#FFFFFF',
      lightGrayColor:'#535355',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  images: {

    domains:['upload.wikimedia.org'],
  },
};
