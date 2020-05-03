import * as types from '../mutation-types'

/**
 * Initial state
 */
export const state = {
    errors: {},
};


/**
 * Mutations
 */
export const mutations = {
    [types.ERRORS_SET](state, data) {
        state.errors = data;
    },
}

/**
 * Actions
 */
export const actions = {
    set({ commit }, errors) {
        commit(types.ERRORS_SET, errors);
    },
}

/**
 * Getters
 */
export const getters = {
    errors: state => state.errors,
};
