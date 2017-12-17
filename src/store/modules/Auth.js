const Auth = {
  state: {
    email: '',
    passwd: '',
    isLogin: false
  },
  mutations: {
    login (state) {
      console.log(state.email);
      console.log(state.passwd);
      console.log(state.isLogin);
    }
  },
  actions: {
    login(context) {
      context.commit('login')
    },
    socialLogin(context, type) {
      console.log(context, type);
      alert(`${type}로 로그인 시도`)
      // context.commit('social')
    }
  },
  getters: {

  }
}

export default Auth;