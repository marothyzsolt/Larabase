import * as types from '../mutation-types'

/**
 * Initial state
 */
export const state = {
  mini: false
}

/**
 * Mutations
 */
export const mutations = {
  [types.NAV_MINI_TOGGLE](state) {
    state.mini = ! state.mini;
  },
  [types.NAV_MINI_HIDE](state) {
    state.mini = true;
  },
  [types.NAV_MINI_SHOW](state) {
    state.mini = false;
  },
}

/**
 * Actions
 */
export const actions = {
  toggleNav({ commit }) {
    commit(types.NAV_MINI_TOGGLE)
  },
  hideNav({ commit }) {
    commit(types.NAV_MINI_HIDE)
  },
  showNav({ commit }) {
    commit(types.NAV_MINI_SHOW)
  },
}

/**
 * Getters
 */
export const getters = {
  mini: state => state.mini,
}
