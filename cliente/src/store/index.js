import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

import user from '../modules/user';
import auth from '../modules/auth';
import country from '../modules/country';
import permission from '../modules/permission';

export default new Vuex.Store({
    modules: {
        user,
        auth,
        country,
        permission,
    },
    state: {
        token: null,
        api_url: 'http://127.0.0.1:8000',
        session_user: {
            id: '',
            name: '',
            last_name: '',
            city_id: '',
            sp_user_code: '',
            sp_user_name: '',
            root_file: '',
            card_file: '',
            sponsors: {},
            permissions: {},
            pages: {},
            total_sp: 0,
            num_sponsors: 0,
        },
        session_lines: {
            loaded: false,
            lines: {},
            total_users: 0,
            active_lines: 0,
        },
        session_wallet: {
            money: 0,
            paid_money: 0,
            num_paid: 0,
            current_money: 0,
        },
        session_sponsors: {
            loaded: false,
            num_sponsors: 0,
            sponsors: {}
        },
        alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"],
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        loadSessionUser(state, config) {
            if(!state.session_user.id && state.token || config && config.reload){
                let url = state.api_url + '/api/auth/me';
                axios.post(url, '',
                { headers: { "Authorization": "Bearer " + state.token} })
                .then((res)=>{
                    state.session_user = res.data.user;
                    state.session_user.pages = {}
                    res.data.user.permissions.forEach(element => {
                        switch (element.name) {
                            case 'users.show':
                                state.session_user.pages.user_list = true;
                                state.session_user.pages.user_view = true;
                                break;
                            case 'users.edit_sponsor':
                                state.session_user.pages.user_sp_edit = true;
                                break;
                            case 'users.edit':
                                state.session_user.pages.user_edit = true;
                                break;
                            case 'salepoint.show':
                                state.session_user.pages.aliance = true;
                                break;
                            case 'salepoint.create':
                                state.session_user.pages.aliance_create = true;
                                break;
                            case 'salepoint.edit':
                                state.session_user.pages.aliance_edit = true;
                                break;
                            case 'salepoint.asignuser':
                                state.session_user.pages.aliance_asignuser = true;
                                break;
                            case 'salepoint.removeuser':
                                state.session_user.pages.aliance_removeuser = true;
                                break;
                            case 'salepoint.payment':
                                state.session_user.pages.aliance_payment = true;
                                break;
                            case 'salepoint.create.payment':
                                state.session_user.pages.aliance_createpayment = true;
                                break;
                            case 'commission.show':
                                state.session_user.pages.commision = true;
                                break;
                            case 'commission.payment':
                                state.session_user.pages.commision_payment = true;
                                break;
                            case 'commission.create_many':
                                state.session_user.pages.commision_many = true;
                                break;
                            case 'payment.show':
                                state.session_user.pages.payment = true;
                                break;
                            case 'role.manage':
                                state.session_user.pages.role = true;
                                break;
                        }
                    })
                    state.loaded_user = 0;
                }).catch(err=>{
                    console.log(err.response)
                    if(err.response.status == 401) {
                        let url = state.api_url+'/api/auth/logout';
                        axios.post(url, '',
                        { headers: { "Authorization": "Bearer " + state.token} })
                        .then(() => {
                            state.token = null;
                            localStorage.removeItem('token');
                            window.location.href = '/';
                        }).catch(err => {
                            localStorage.removeItem('token');
                            window.location.href = '/';
                        })
                    }
                });
            } else {
                state.loaded_user ++;
            }
        },
        loadSessionLines(state, config){
            if(!state.session_sponsors.loaded || config && config.reload){
                state.session_lines.loaded = false;
                let url = state.api_url + `/api/users/${state.session_user.id}/lines`
                return axios.get(url, 
                {headers: { "Authorization": "Bearer " + state.token}})
                .then(res => {
                    state.session_lines.total_users = parseInt(res.data.total)
                    state.session_lines.active_lines = 8;
                    state.session_lines.loaded = true;
                }).catch(err => {console.log(err.response);})
            }
        },
        loadSessionSponsors(state){
            if(!state.session_sponsors.loaded){
                let url = state.api_url + `/api/users/${state.session_user.id}/sponsors`;
                return axios.get(url, 
                { headers: { "Authorization": "Bearer " + state.token}})
                .then(res => {
                    state.session_sponsors.sponsors = {
                        1: {code: res.data.sp_user_1, name: res.data.sp_user_1_name},
                        2: {code: res.data.sp_user_2, name: res.data.sp_user_2_name},
                        3: {code: res.data.sp_user_3, name: res.data.sp_user_3_name},
                        4: {code: res.data.sp_user_4, name: res.data.sp_user_4_name},
                        5: {code: res.data.sp_user_5, name: res.data.sp_user_5_name},
                    };
                    
                    if(state.session_sponsors.sponsors[1].code) state.session_sponsors.num_sponsors=1;
                    if(state.session_sponsors.sponsors[2].code) state.session_sponsors.num_sponsors++;
                    if(state.session_sponsors.sponsors[3].code) state.session_sponsors.num_sponsors++;
                    if(state.session_sponsors.sponsors[4].code) state.session_sponsors.num_sponsors++;
                    if(state.session_sponsors.sponsors[5].code) state.session_sponsors.num_sponsors++;
                    state.session_sponsors.loaded = true;             
                }).catch(err => console.log(err));
            }
        },
    },
    actions: {
        readToken({commit}){
            if(localStorage.getItem('token')){
                commit('setToken', localStorage.getItem('token'));
            } else {
                commit('setToken', null);
            }
        },
    },
})