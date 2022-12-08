import axios from "axios" ;
import store from '../store';

export default {
    namespaced: true,
    state: {
        user : {
            loaded: false,
            loaded_lines: false,
            loaded_sponsors: false,
            /* ---DATA---- */
            id: '',
            name: '',
            last_name: '',
            id_card: '0',
            primary_phone: '',
            secondary_phone: '',
            whatsapp: '',
            city_id: '',
            city_name: '',
            department: '',
            country: '',
            country_name: '',
            email: '',
            adress: '',
            lines: {},
            sponsor_user : '',
            num_paid: 0,
            current_money: 0,
            sponsors: {},
            total_sp: 0,
            num_sponsors: 0,
            active_lines: 0,
        },
        wallet: {
            loaded: false,
            money: 0,
            paid_money: 0,
            num_paid: 0,
            current_money: 0,
        }
    },
    mutations: {
        async loadUser(state, id){
            function clearData(){
                state.user.loaded = false;
                state.user.loaded_lines = false;
                state.user.loaded_sponsors = false;
                /* --DATA--- */
                state.user.id = '';
                state.user.name = '';
                state.user.last_name = '';
                state.user.id_card = '';
                state.user.lines = {};
                state.user.total_sp = 0,
                state.user.num_sponsors = 0,
                state.user.active_lines = 0,
                state.user.sponsor_user = 0
            }
            clearData();
            let url = store.state.api_url + `/api/users/list/${id}`;
            return await axios.get(url, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                state.user.id = res.data.id;
                state.user.name = res.data.name;
                state.user.last_name = res.data.last_name;
                state.user.id_card = res.data.id_card;
                state.user.phone = res.data.phone;
                state.user.city_id = res.data.city_id;
                state.user.city_name = res.data.city.city_name;
                state.user.department = res.data.city.department;
                state.user.country = res.data.city.country_code;
                state.user.country_name = res.data.city.country_name;
                state.user.login = res.data.login;
                state.user.sponsor_user = res.data.sponsor_user;
                state.user.num_paid = res.data.num_paid;
                state.user.count_type = res.data.count_type;
                state.user.count_number = res.data.count_number;
                state.user.state = res.data.state;
                state.user.created_at =  res.data.created_at.substr(0, 19);
                state.user.loaded = true;
            }).catch(err => {
                clearData();
                console.log(err.response)
                if(err.response.status == 404) state.user.loaded = true;
            });
        },
        async loadLines(state, id){
            let url = store.state.api_url + `/api/users/${id}/lines`;
            return await axios.get(url, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                state.user.loaded_lines = true;
                state.user.lines = {
                    1: res.data.line_1,
                    2: res.data.line_2,
                    3: res.data.line_3,
                    4: res.data.line_4,
                    5: res.data.line_5,
                }

                state.user.total_sp = 
                    parseInt(res.data.line_1) + 
                    parseInt(res.data.line_2) + 
                    parseInt(res.data.line_3) +
                    parseInt(res.data.line_4) + 
                    parseInt(res.data.line_5);

                if(state.user.lines[1] > 0) state.user.active_lines=1;
                if(state.user.lines[2] > 0) state.user.active_lines++;
                if(state.user.lines[3] > 0) state.user.active_lines++;
                if(state.user.lines[4] > 0) state.user.active_lines++;
                if(state.user.lines[5] > 0) state.user.active_lines++;
            })
        },
        async loadSponsors(state, id){
            let url = store.state.api_url + `/api/users/${id}/sponsors`;
            return await axios.get(url, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                state.user.loaded_sponsors = true;
                state.user.sponsors = {
                    1: {code: res.data.sp_user_1, name: res.data.sp_user_1_name},
                    2: {code: res.data.sp_user_2, name: res.data.sp_user_2_name},
                    3: {code: res.data.sp_user_3, name: res.data.sp_user_3_name},
                    4: {code: res.data.sp_user_4, name: res.data.sp_user_4_name},
                    5: {code: res.data.sp_user_5, name: res.data.sp_user_5_name},
                };
                if(state.user.sponsors[1].code) state.user.num_sponsors=1;
                if(state.user.sponsors[2].code) state.user.num_sponsors++;
                if(state.user.sponsors[3].code) state.user.num_sponsors++;
                if(state.user.sponsors[4].code) state.user.num_sponsors++;
                if(state.user.sponsors[5].code) state.user.num_sponsors++;
            }).catch(err => {console.log(err.response);})
        },
        async loadWallet(state, id){
            let url = store.state.api_url + `/api/users/${id}/wallet`;
            state.wallet.loaded = false;
            return await axios.get(url, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
            .then(res => {
                state.wallet.loaded = true;
                state.wallet.money = res.data.money;
                state.wallet.paid_money = res.data.paid_money;
                state.wallet.num_paid = res.data.num_paid;
                state.wallet.current_money = res.data.current_money;
            }).catch(err => {console.log(err.response);})
        }
    },
    actions: {
        async getUsersLine ({commit}, payload){
            var line = payload.line;
            var user_id = payload.user_id;
            let url = store.state.api_url + `/api/users/${user_id}/line/${line}`;
            return await axios.get(url,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async userPayments({commit}, data){
            let url = store.state.api_url + `/api/users/${data.id}/payments`;
            return await axios.post(url,data, 
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async registerUser({commit}, data){
            let url = store.state.api_url + `/api/users/register`;
            return await axios.post(url, data,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async updateUser({commit}, data){
            let url = store.state.api_url + `/api/users/update/${data.id}`;
            return await axios.post(url, data,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async loadFiles({commit}, data){
            let url = store.state.api_url + `/api/users/${data.id}/loadConsignmentFile`;
            return await axios.post(url, data.form,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async showFile({commit}, data){
            let url = store.state.api_url + `/api/users/file/consignment/${data.id}`;
            return axios.get(url,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },

        async changePassword({commit}, data){
            let url = store.state.api_url + `/api/users/change_password/${data.id}`;
            return await axios.post(url, data.password,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        },
        async resetePassword({commit}, data){
            let url = store.state.api_url + `/api/users/reset_password/${data.id}`;
            return await axios.post(url, null,
            { headers: { "Authorization": "Bearer " + store.state.token}})
        }
    }
}