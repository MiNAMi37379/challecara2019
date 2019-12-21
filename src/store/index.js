import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const works = {
    name: '',
    min: '',
    sec: '',
}
export default new Vuex.Store({
    state: {
        works,
        names:[],
        times_min:[],
        times_sec:[],
        password: 0
    },
    getters: {
        getWorkName(state){
            return state.works.name
        },
        getWorkMin(state){
            return state.works.min
        },
        getWorkSec(state){
            return state.works.sec
        },
        getPassword(state){
            return state.password
        }
    },
    mutations: {
        setWork(state, data) {
            state.names = data.name;
            state.min = data.min;
            state.sec = data.sec;
        },
        addPassword(state, data){
            state.password = data
        }
    },
    actions: {
        updateWorkName({commit},data){
            commit('setWork',data)
        }
    }
})