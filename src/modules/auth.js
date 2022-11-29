import axios from "axios" ;
import store from '../store';
export default {
    namespaced: true,
    state: {
        error: null
    },
    mutations: {
        setError(state, payload){
            state.error = '401';
        }
    },
    actions: {
        login({commit}, user) {
            let url = store.state.api_url + '/api/auth/login';
            console.log(user)
            return axios.post(url, user)
        },
        
        logout({commit}){
            let url = store.state.api_url + '/api/auth/logout';
            axios.post(url, null,
            { headers: { "Authorization": "Bearer " + store.state.token} })
            .then(() => {
                commit('setToken', null, {root: true});
                localStorage.removeItem('token');
                window.location.href = '/';
            })
            .catch(err => {
                commit('setError', err.response);
                localStorage.removeItem('token');
                window.location.href = '/';
            })
        }
    }
}