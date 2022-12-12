<template>
    <div class="right">
        <div class="top">
            <button id="menu-btn">
                <span class="material-icons-sharp">menu</span>
            </button>
            <!-- <div class="theme-toggler">
                <span class="material-icons-sharp active">light_mode</span>
                <span class="material-icons-sharp">dark_mode</span>
            </div> -->
            <div class="profile">
                <div class="info">
                    <p>Bienvenido, <b>{{session_user.name + " " + session_user.last_name}}</b></p>
                    <!-- <small class="text-muted">Admin</small> -->
                </div>
            </div>
        </div>
        <div class="sales-analytics mt-3" v-if="session_lines.loaded">
            <h2>Niveles </h2>
            <div class="item" v-for="i in 9" :key="i" @click="showLine(i)">
                <div class="icon">
                    <span class="material-icons-sharp active">&#xe7fd;</span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>{{renderNumLinea(i)}}</h3>
                    </div>
                    <h3>{{ session_lines.lines[i] }}</h3>
                </div>
            </div>
        </div>
        <div v-else>
            <h2 v-if="session_lines.loaded"><p>No hay líneas activas</p></h2>
            <div v-else style="display: flex; justify-content: center">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        </div>
        <!------------MODAL------------>
        <div class="modal fade" id="modal-lines" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="active_line"></h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-if="loading_line" style="display: flex; justify-content: center">
                            <div class="lds-facebook"><div></div><div></div><div></div></div>
                        </div>
                        <div :class="{'dnone':loading_line}">
                            <table class="table table-striped" id="table-line" style="border:none">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Fecha Ingreso</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    components: {},
    data() {
        return {
            search: '',
            count_lines: 0,
            active_line: false,
            loading_line: false,
        };
    },
    methods: {
        showLine(line) {
            this.loading_line = true;
            let active_line = document.getElementById('active_line');
            active_line.innerHTML = this.renderNumLinea(line)
            $('#modal-lines').modal('show');
            this.getUsersLine({
                user_id: this.session_user.id,
                line: line,
            }).then((res)=>{
                var data = [];
                res.data.forEach((element) => {
                    var date = this.formatDate(element.created_at);
                    let array = {
                        id: element.id,
                        name: element.name,
                        date
                    }
                    data.push(array);
                });
                this.loading_line = false;
                $("#table-line").DataTable({
                    responsive: true,
                    autoWidth: false,
                    lengthChange: false,
                    info: false,
                    destroy: true,
                    data,
                    columns: [
                        {"data": "id"},
                        {"data": "name"},
                        {"data": "date"},
                    ]
                });
            });
        },
        renderNumLinea(num){
            switch (num) {
                case 1:return 'Nivel 1'
                case 2:return 'Nivel 2'
                case 3:return 'Nivel 3'
                case 4:return 'Nivel 4' 
                case 5:return 'Nivel 5'
                case 6:return 'Nivel 6' 
                case 7:return 'Nivel 7' 
                case 8:return 'Nivel 8' 
                case 9:return 'Nivel 9' 
                default:return ''
            }
        },
        formatDate(date){
            var fecha = new Date(date);
            var ano = fecha.getFullYear();
            var mes = fecha.getMonth()+1;
            var dia = fecha.getDate();
            if(mes < 10)  mes="0"+mes
            if(dia < 10 ) dia="0"+dia
            return ano+"/"+mes+"/"+dia;
        },
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations(['loadSessionLines']),
    },
    computed: {
        ...mapState(["session_user"]),
        ...mapState(["session_lines"]),
    },
    mounted() {
        let session_interval = setInterval(() => {
            if(this.session_user.id) {
                this.loadSessionLines();
                return clearInterval(session_interval);
            }
        });
    },
};
</script>
<style>
.dnone{
    display: none;
}
.right .sales-analytics .offline:hover .sub-menu-item{
    display: block;
}
.right .sales-analytics .item .sub-menu-item{
    bottom: -25px;
    position: absolute;
    width: 80%;
    display: none;
    z-index: 10;
}
.right .sales-analytics .item .sub-menu-item .triangle{
    position: absolute;
    top: -8px;
    left: 8px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 8px solid var(--color-primary);
}
.right .sales-analytics .item .sub-menu-item .buttons {
    position: relative;
    background: #f6f6f9;
    border: 1px solid var(--color-primary);
    box-shadow: 0 0 1rem #c6c7d1;
}
.right .sales-analytics .item .sub-menu-item .buttons .links a{
    width: 100%;
    display: block;
    padding: .5rem;
    text-align: center;
    transition: all .3s;
    color: var(--color-primary);
}
.right .sales-analytics .item .sub-menu-item .buttons .links a:hover{
    color: #fff;
    background: var(--color-primary);
}
</style>
