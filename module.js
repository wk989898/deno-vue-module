// @ts-nocheck
import template from "http://localhost:3000/pages/App.jsx"
import * as DB from "http://localhost:3000/data/dataBase.js"
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js"
const {
  data,
  methods,
  lifestyle: {
    beforeCreate,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    beforeDestory,
    destoryed,
    activated,
    deactivated,
    errorCaptured
  } } = DB;
new Vue({
  template,
  data,
  methods,
  beforeCreate,
  created,
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  beforeDestory,
  destoryed,
  activated,
  deactivated,
  errorCaptured
}).$mount('#app')