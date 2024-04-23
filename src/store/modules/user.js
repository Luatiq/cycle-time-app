const user = {
    namespaced: true,
    state: () => ({
        user: {
            username: null,
            token: null
        }
    }),
    mutations: {
        setUsername (state, username) {
            state.user.username = username;
        },
        setToken (state, token) {
            state.user.token = token;
        }
    },
    getters: {
        username (state) {
            return state.user.username;
        },
        token (state) {
            return state.user.token;
        }
    }
}

export default user;
