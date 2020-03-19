const state = {
  menuOpen:true
};

const mutations = {
  TOGGLE_MENU(state){
    state.menuOpen = !state.menuOpen;
  }
}

const actions = {
  collapseMenu({commit}){
    commit('TOGGLE_MENU')
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}