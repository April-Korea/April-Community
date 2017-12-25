const Auth = {
  state: {
    email: '',
    passwd: '',
    isLogin: false
  },
  getters: {
    email: state => { return state.email },
    passwd: state => { return state.passwd },
    isLogin: state => { return state.isLogin }
  },
  mutations: {
    change(state, { name, value }) { state[name] = value },
    login(state) {
      console.log(state.email);
      console.log(state.passwd);
      console.log(state.isLogin);
      state.email = ''
      state.passwd = ''
    },
    socialLogin(state, { type }) {
      alert(`${type}로 로그인 시도`)
    }
  },
  actions: {
    change(context, e) {
      const { name, value } = e.target;
      context.commit('change', { name, value })
    },
    login(context) {
      context.commit('login')
    },
    socialLogin(context, type) {
      context.commit('socialLogin', { type })
    }
  }
}

export default Auth;