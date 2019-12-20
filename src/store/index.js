import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const works = {
    name: '',
    time: ''
}
export default new Vuex.Store({
    state: {
        works,
        names:[],
        times:[],
        password: 0
    },
    getters: {
        getWorkName(state){
            return state.works.name
        },
        getWorkTime(state){
            return state.works.time
        },
        getPassword(state){
            return state.password
        }
    },
    mutations: {
        setWork(state, data) {
            state.names = data.name;
            state.times = data.time;
        },
        addPassword(state, data){
            state.password = data
        }
    },
    actions: {
        updateWorkName({commit},data){
            commit('setWorkName',data)
        }
    }
})