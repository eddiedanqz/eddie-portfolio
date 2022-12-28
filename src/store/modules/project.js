import { createStore } from "vuex";
//import axios from "axios";

const state = {
    projets: [],
  };
  
  const getters = {
    allPosts: (state) => state.posts,
  };
  
  // Makes a request, get a response and call a mutation
 const actions = {
    addPost ({commit},title) {
        commit('newPost',{id:new Date().getMinutes, title})
      }
 }
 const mutations = {
    newPost: (state, post) => state.posts.unshift(post),
 }

export default{
  state,
  mutations,
  getters,
  actions,
};
