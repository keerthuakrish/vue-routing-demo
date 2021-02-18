import Vue from "vue";
import Vuex from "vuex";
import degreeModule from "./modules/degreePrograms";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    degreeModule
  }
});
