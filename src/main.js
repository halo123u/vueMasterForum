// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBuZehmn-867W2kGI_3NrS2GdjHkhFGKSw',
  authDomain: 'vue-school-forum-489c0.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-489c0.firebaseio.com',
  projectId: 'vue-school-forum-489c0',
  storageBucket: 'vue-school-forum-489c0.appspot.com',
  messagingSenderId: '656544070548',
  appId: '1:656544070548:web:2add62faeb414e837eed81',
  measurementId: 'G-3XJF0XSQDQ'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
