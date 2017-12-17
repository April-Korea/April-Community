const Auth = {
  state: {
    id: '',
    passwd: '',
    isLogin: false
  },
  mutations: {
    login (state) {
      console.log(state.id);
      console.log(state.passwd);
      console.log(state.isLogin);
    }
  },
  actions: {
    login(context) {
      context.commit('login')
    }
  },
  getters: {}
}

export default Auth;