import * as types from '../mutation-types'

/**
 * Initial state
 */
export const state = {
  loadingDialog: 0
}

/**
 * Mutations
 */
export const mutations = {
  [types.LOADING_START](state) {
    state.loadingDialog++;
  },
  [types.LOADING_STOP](state) {
    state.loadingDialog--;
    if(state.loadingDialog < 0) {
      state.loadingDialog = 0;
    }
  }
}

/**
 * Actions
 */
export const actions = {
  loadingStart({ commit }) {
    commit(types.LOADING_START)
  },
  loadingStop({ commit }) {
    commit(types.LOADING_STOP)
  }
}

/**
 * Getters
 */
export const getters = {
  loadingDialog: state => state.loadingDialog > 0,
}
