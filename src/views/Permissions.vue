<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1 class="mb-3">Permisos</h1>
            <div class="info-card">
                <div class="row">
                    <div class="col-sm-4">
                         <div class="add-button" @click="showNewRolModal()">
                            <div><span class="material-icons-sharp">&#xe145;</span>Nuevo Rol</div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="add-button" @click="showNewSpecialUserModal()">
                            <div><span class="material-icons-sharp">&#xe145;</span>Nuevo Usuario Especial</div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-4">
                        <h3 class="mb-1"><b>Roles</b></h3>
                        <div class="role-card mb-1" v-for="role in roles" :key="role.id">
                            <div @click="showManageRoleModal(role)">{{role.name}}</div>
                            <div v-if="role.name != 'Admin'" @click="deleteRole(role)">
                                <span class="material-icons-sharp active">&#xe872;</span>
                            </div>
                            <div v-else></div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h3 class="mb-1"><b>Usuarios Especiales</b></h3>
                        <div class="role-user-card mt-2" 
                        v-for="user in users" :key="user.id" @click="showManageRolesUser(user)">
                            <div><b style="color: var(--color-primary)">{{user.id}}.</b>  {{user.name+' '+user.last_name}}</div>
                            <div style="display: flex; justify-content: flex-end; gap: 5px;">
                                <div v-for="role in user.roles" :key="role.id"
                                class="roles-section"><span class="count">{{role.name}}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Right/>
        <!--------MODAL NEW ROLE-------->
        <div class="modal fade" id="modal-new-role" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">REGISTRAR ROL</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <p>Nombre</p>
                                <input type="text" v-model="role.name" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary"
                        @click="registerRole()">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
        <!--------MODAL NEW SPECIAL USER-------->
        <div class="modal fade" id="modal-new-special-user" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">
                            ASIGNAR ROL A USUARIO
                        </h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Seleccionar Usuario</p>
                        <UserSearch :search="resultSearch"/>
                        <hr>
                        <p>Roles</p>
                        <div class="row">
                            <div class="col-md-4" v-for="role in roles" :key="'a-'+role.id">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input"
                                    :value="role.id" :id="`role-check-${role.id}`"
                                    @change="manageUserRoles(role.id)">
                                    <label class="custom-control-label" :for="`role-check-${role.id}`">
                                        {{role.name}}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary"
                        @click="registerRoleUser()">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
        <!--------MODAL NEW SPECIAL USER-------->
        <div class="modal fade" id="modal-update-special-user" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">
                            ROLES DE USUARIO
                        </h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Usuario</p>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-control">{{this.user.id}}</div>
                            </div>
                            <div class="col-md-8">
                                <div class="form-control">{{this.user.name}} {{this.user.last_name}}</div>
                            </div>
                        </div>
                        <hr>
                        <p>Roles</p>
                        <div class="row">
                            <div class="col-md-4" v-for="role in user.roles" :key="role.id">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" 
                                    disabled="disabled"
                                    :checked="true">
                                    <label class="custom-control-label">
                                        {{role.name}}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger"
                        v-if="userIsAdmin()" 
                        @click="removeAllRoleOfUser()">
                            <span style="font-size: 1rem;">Eliminar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--------MODAL MANAGE ROLE-------->
        <div class="modal fade" id="modal-manage-role" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">
                            {{role.name.toUpperCase()}} - ROLE
                        </h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" style="max-height: 450px; overflow-y: scroll;">
                        <div class="row" style="margin-right:0;">
                            <div class="col-md-12">
                                <h3><b>Permisos</b></h3>
                            </div>
                            <div class="col-sm-6" v-for="permission in permissions" :key="permission.id">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input"
                                    :value="permission.id" :id="`permission-check-${permission.id}`"
                                    :checked="validateRolePermission(permission.id)"
                                    @change="manageRolePermissions(permission.id)">
                                    <label class="custom-control-label" :for="`permission-check-${permission.id}`"> 
                                        {{permission.name}}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';
import UserSearch from '../components/UserSearch.vue';
export default {
    name: 'Permissions',
    components: {
        Aside,
        Right,
        UserSearch
    },
    data: function(){
        return {
            role: {
                id: '',
                name: '',
                permissions: []
            },
            user_search: '',
            user: {
                id: '',
                name: '',
                last_name: '',
                roles: [],
            },
            selected_roles: [],
        }
    },
    methods: {
        // RESULTADO DEL COMPONENTE
        resultSearch(code) {this.user_search = code;},
        //------------------------------
        userIsAdmin(){
            let find = this.user.roles.find(role => role.name == 'Admin');
            if(find) return false;
            return true;
        },
        removeAllRoleOfUser(){
            this.$swal.fire({
                title: '¿Estás seguro que deseas eliminar este usuario especial?',
                html: `Al eliminar el usuario especial perderá acceso a las páginas asignadas`,
                showDenyButton: true,
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.user.roles.forEach(role => {
                        if(role.id == 1) return;
                        console.log(role)
                        this.removeRoleUser(role.id);
                    })
                    this.getUsersWithRoles();
                    $('#modal-update-special-user').modal('hide');
                    return this.launchAlert({type: 'success', title: 'Usuario especial removido exitosamente'});
                }
            })
        },
        registerRoleUser(){
            if(!this.user_search) return this.launchAlert({type: 'warning', title: 'Selecciona un usuairo válido'});
            if(this.selected_roles.length <= 0) return this.launchAlert({type: 'warning', title: 'Selecciona al menos un rol'});
            this.selected_roles.forEach(element => {
                this.registerRoleToUser({role_id: element, user_id: this.user_search})
                .then(res => {
                    if(res.status == 201){
                        this.getUsersWithRoles();
                        $('#modal-new-special-user').modal('hide');
                        this.launchAlert({type: 'success', title: 'Usuario especial registrado exitosamente'});
                    }
                }).catch(e => console.log(e));
            });
        },
        removeRoleUser(id){
            let url = this.api_url+'/api/roles/remove_user'
            axios.post(url, {role_id: id, user_id: this.user.id},
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(() => {this.getUsersWithRoles()})
            .catch(e => {
                console.log(e)
            })
        },
        // VALIDA Y CHECKEA EL BOX
        validateuserRoles(id){
            let find = this.user.roles.find(role => role.id == id);
            if(find) return true;
            return false;
        },
        validateRolePermission(id){
            let find = this.role.permissions.find(permission => permission.id == id);
            if(find) return true;
            return false;
        },
        // MANEJO DE CHECKBOX
        manageUserRoles(id){
            let find = this.selected_roles.find(element => element == id);
            if(find) this.selected_roles = this.selected_roles.filter(element => element != id)
            else this.selected_roles.push(id);
        },
        manageRolePermissions(id){
            let checkbox = document.getElementById(`permission-check-${id}`)
            if(this.role.id == 1) {
                checkbox.checked = true;
                return this.launchAlert({type: 'warning', title: 'No está permitido editar permisos del administrador'});
            }
            if(checkbox.checked) this.addRolePermission(id);
            else this.removeRolePermission(id);
        },
        // MANEJO DE ROLES
        registerRole(){
            if(!this.role.name.trim()) return this.launchAlert({type: 'warning', title: 'Registra un nombre válido'});
            let url = this.api_url+'/api/roles/create';
            axios.post(url, {name: this.role.name.trim()},
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                if(res.status == 201){
                    this.role.id = '';
                    this.role.name = '';
                    this.getRoles();
                    $('#modal-new-role').modal('hide')
                    return this.launchAlert({type: 'success', title: 'Rol registrado exitosamente'});
                }
            }).catch(e => {
                console.log(e.response)
                if(e.response.status == 400){
                    return this.launchAlert({type: 'error', title: 'Digita un nombre de rol válido o que no se encuentre repetido'});
                }
            });
        },
        deleteRole(role){
            this.$swal.fire({
                title: '¿Estás seguro que deseas eliminar este rol?',
                html: `Se debe en cuenta que si eliminas este rol muchos usuarios podrán perder acceso a partes importantes del sistema`,
                showDenyButton: true,
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    let url = this.api_url+`/api/roles/${role.id}`
                    axios.delete(url, 
                    { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
                    .then(res => {
                        if(res.status == 200){
                            this.getRoles();
                            return this.launchAlert({type: 'success', title: 'Rol eliminado exitosamente'});
                        }
                    }).catch(e => {
                        console.log(e.response);
                    })
                }
            })
        },
        //----------------------
        addRolePermission(id){
            let json = {
                role_id: this.role.id,
                permission_id: id,
            }
            let url = this.api_url+'/api/roles/add_permission';
            axios.post(url, json, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
        },
        removeRolePermission(id){
            let json = {
                role_id: this.role.id,
                permission_id: id,
            }
            let url = this.api_url+'/api/roles/remove_permission';
            axios.post(url, json, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
        },
        //----------------------
        showNewRolModal(){
            this.user = {roles:[]}
            this.role.name = ''; 
            $('#modal-new-role').modal('show')
        },
        showManageRolesUser(user){
            this.user.roles = [],
            this.user.id = user.id;
            this.user.name = user.name;
            this.user.last_name = user.last_name;
            this.user.roles = user.roles;
            $('#modal-update-special-user').modal('show');
        },
        showNewSpecialUserModal(){this.role.name = ''; $('#modal-new-special-user').modal('show')},
        showManageRoleModal(role){
            this.role.id = role.id;
            this.role.name = role.name;
            this.getRolePermissions(role.id);
            $('#modal-manage-role').modal('show')
        },
        getRolePermissions(id){
            let url = this.api_url+`/api/roles/${id}`;
            axios.get(url,
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {this.role.permissions = res.data.permissions;})
            .catch(e => console.log(e.response))
        },
        launchAlert(config){
            if(!config.timeout) config.timeout = 2500;
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: config.timeout,
            })
            Toast.fire({
                icon: config.type,
                title: config.title,
                text: config.message,
            })
        },
        ...mapActions("user", ["getUsersLine"]),
        ...mapActions("permission", ["registerRoleToUser"]),
        ...mapMutations("permission", ["getRoles"]),
        ...mapMutations("permission", ["getPermissions"]),
        ...mapMutations("permission", ["getUsersWithRoles"]),
        ...mapMutations(['loadSessionUser']),
    },
    mounted: function(){
        $('.modal-backdrop').remove();
        this.getRoles();
        this.getPermissions();
        this.getUsersWithRoles();
        this.loadSessionUser();
    },
    computed: {
        ...mapState(['api_url']),
        ...mapState(['session_user']),
        ...mapState("permission", ['users']),
        ...mapState("permission", ['roles']),
        ...mapState("permission", ['permissions']),
    }
}
</script>
<style>

.role-user-card,
.role-card{
    display: grid;
    cursor: pointer;
    color: var(--color-primary);
    padding: 2px 10px;
    font-size: .8rem;
    border-radius: var(--border-radius-1);
    transition: all .3s;
    border: solid 1px var(--color-primary);   
}
.role-card{
    grid-template-columns: 1fr auto;
}
.role-card div:last-child{
    display: flex;
    gap: 5px;
    justify-self: flex-end;
    align-items: center;
    color: var(--color-danger);
}
.role-card div:last-child .material-icons-sharp{
    font-size: 1.3rem;
}
.role-user-card{
    border-top: 0;
    border-right: 0;
    border-left: 0;
    grid-template-columns: auto 1fr;
}
.role-user-card:first-child{
    display: flex;
    align-items: flex-end;
}
.role-user-card .roles-section{
    display: flex;
    gap: 5px;
    justify-self: flex-end;
}
.role-card:hover,
.role-user-card:hover{
    background: var(--color-primary);
    color: var(--color-white);
}
.role-card:hover div:last-child{
    color: #fff;
}
.role-user-card:hover .roles-section span{
    background: var(--color-white);
    color: var(--color-primary);
}
.count {
    background: var(--color-danger);
    color: var(--color-white);
    padding: 2px 10px;
    font-size: 11px;
    border-radius: var(--border-radius-1);
}
</style>
