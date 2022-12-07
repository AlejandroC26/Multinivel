import axios from "axios" ;
import store from '../store';
export default {
    namespaced: true,
    state: {
        users: [],
        roles: [],
        permissions: [],
    },
    mutations: {
        getRoles(state){
            let url = store.state.api_url+'/api/roles';
            axios.get(url,
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {state.roles = res.data;})
            .catch(e => console.log(e.response))
        },
        getUsersWithRoles(state){
            let url = store.state.api_url+`/api/roles/users`;
            axios.get(url,
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {state.users = res.data;})
            .catch(e => console.log(e.response))
        },
        getPermissions(state){
            let url = store.state.api_url+'/api/roles/permissions';
            axios.get(url,
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {state.permissions = res.data;})
            .catch(e => console.log(e))
        },
    },
    actions: {
        registerRoleToUser({commit}, data){
            let url = store.state.api_url+`/api/roles/asign_user`;
            return axios.post(url, {role_id: data.role_id, user_id: data.user_id},
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
    }
}