import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {
        user: {
            logged: false,
            data: null
        }
    },

    getters: {
        user(state) {
            return state.user
        }
    },

    mutations: {
        SET_LOGGED(state, value) {
            state.user.logged = value
        },

        SET_USERS(state, value) {
            state.user.data = value
        }
    },

    actions: {
        getUser({ commit }, user) {
            commit('SET_LOGGED', user !== null)

            if(user) {
                commit('SET_USERS', {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                })
            }
        },

    }
});