import { createStore } from "vuex";
//import axios from "axios";
import sanity from '../../client';

const state = {
    projects: [],
  };
  
  const getters = {
    allProjects: (state) => state.projects,
  };
  
  // Makes a request, get a response and call a mutation
 const actions = {
  async fetchProject({ commit }) {
    let QUERY = '*[_type == "project"]';
    // let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    // const response = await axios.get(URL);
    sanity.fetch(QUERY).then((porjects) => commit("setProjects", porjects))
  
  },
  
 }
 const mutations = {
  setProjects: (state, projects) => (state.projects = projects),

 }

export default{
  state,
  mutations,
  getters,
  actions,
};
