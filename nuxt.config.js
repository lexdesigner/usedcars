export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#eb6441" },
  /*
   ** Global CSS
   */
  css: ["@/sass/element-variables.sass"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", { src: "@/plugins/owl.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/firebase"],
  firebase: {
    config: {
      apiKey: "AIzaSyBBGwPHxJ3wGVxT8AXApm-5SBsX-fJ2yMU",
      authDomain: "usedcars-genser.firebaseapp.com",
      databaseURL: "https://usedcars-genser-default-rtdb.firebaseio.com",
      projectId: "usedcars-genser",
      storageBucket: "usedcars-genser.appspot.com",
      messagingSenderId: "98025860148",
      appId: "1:98025860148:web:11e13a1e5397f43b6b2e61"
    },
    services: {
      database: true // Just as example. Can be any other service.
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
