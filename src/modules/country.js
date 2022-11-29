import axios from "axios" ;
import store from '../store';
export default {
    namespaced: true,
    state: {
        countries: [],
        departments: [],
        cities_department: [],
        cities: [],
    },
    mutations: {
        getAllCountries(state, data){
            let url = store.state.api_url+'/api/countries/list';
            axios.get(url, 
            { headers: { "Authorization": "Bearer " + store.state.token} }).then(res => {
                state.countries = res.data;
            })
            .catch(e=>console.log(e.response))
        },
        getCountryCities(state, country){
            let url = store.state.api_url+`/api/countries/cities/${country}`;
            axios.get(url, 
            { headers: { "Authorization": "Bearer " + store.state.token} }).then(res => {
                state.cities = res.data;
                state.departments = [];
                state.cities_department = res.data;
                res.data.forEach(element => {
                    let finder = state.departments.find(x => x.name === element.department);
                    if(finder) return;
                    state.departments.push({'name': element.department})
                });
            })
            .catch(e=>console.log(e))
        },
        filterCities(state, department) {
            state.cities_department = [];
            let cities = state.cities.filter(city => city.department === department);
            state.cities_department = cities;
        }
    },
    actions: {
        getCity({commit}, id){
            console.log(id)
        }
    }
}