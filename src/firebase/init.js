import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAsZYuxNp-2YRCM9ualTvBFZuK4MdI5ZM",
  authDomain: "coffees-vue.firebaseapp.com",
  databaseURL: "https://coffees-vue.firebaseio.com",
  projectId: "coffees-vue",
  storageBucket: "coffees-vue.appspot.com",
  messagingSenderId: "460759109090",
  appId: "1:460759109090:web:5cba16df1822f838413dbb",
  measurementId: "G-HPRC3RPLPJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db }