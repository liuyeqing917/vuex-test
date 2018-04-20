import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
 // 定义状态
 state: {
    author: 'liuyeqing',
    count:1
 },
 mutations: {
    add(state){
        state.count+=1;
    },
    reduce(state){
        state.count-=1;
    }
 }
})
export default store