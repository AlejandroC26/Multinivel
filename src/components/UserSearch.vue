<template>
    <div class="row">
        <div class="col-md-4 mb-2">
            <input type="number" v-model="search_code" class="form-control" placeholder="Buscar código...">
        </div>
        <div class="col-md-8">
            <select class="form-control" v-model="selected_user"
            @change="changeSelectedUser(selected_user)">
                <option value="" selected disabled v-if="users.length <= 0 && search_code">Usuario no encontrado</option>
                <option v-for="user in users" :key="user.id" :value="user.id">{{user.id +' | '+ user.name + ' '}}</option>
            </select>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
    props: ['search'],
    data: function (){
        return {
            search_code: '',
            selected_user: '',
            users: [],
        }
    },
    methods: {
        searchUser(search){
            let url = this.api_url + '/api/search/public/users';
            axios.post(url, search, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                this.users = res.data;
                if(res.data.length > 0) this.selected_user = res.data[0].id;
                else this.selected_user = '';
                this.search(this.selected_user);
            }).catch(e=> console.log(e.response))
        },
        changeSelectedUser(id){
            this.search(id);
        }
    },
    mounted: function(){
        this.searchUser({search: '', order: 'DESC', limit: 20});
    },
    computed: {
        ...mapState(['api_url']),
    },
    watch: {
        search_code: function (){
            this.searchUser({search : this.search_code, order: 'ASC', limit: 20});
        }
    }
}
</script>