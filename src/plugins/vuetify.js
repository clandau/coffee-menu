import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "md",
  },
  options: {
    customProperties: true,
  },
  theme: {
    themes: {
      light: {
        background: "#bedbbb", // lighter green
        lightest: "#eff6ee", // lighter green
        primary: "#92817a", // lighter brown
        accent: "#8DB596", // the darker green
        secondary: "#707070", // darker brown
      },
    },
  },
};

export default new Vuetify(opts);
