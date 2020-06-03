import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag:'',
    openid:'',
    terminalid:'',
    takeArr:[],
    userphone:'',
  },
  mutations: {  //同步
    constant(state,obj){
        state.flag=obj.flag;
        state.openid=obj.openid;
        state.terminalid=obj.terminalid;
        console.log(obj)
    },
    takeData(state,arr){
        state.takeArr=arr
    },
    userPhone(state,userphone){
        state.userphone=userphone;
    },
   
  },
  actions: {  //异步操作
      // asyncPhone(context,phone){ //改mutations中的函数
      //     context.commit("userPhone",phone)
      // },
      asyncPhone({commit},phone){ //改mutations中的函数
        commit("userPhone",phone);
      }
  },
  modules: {
  }
})
