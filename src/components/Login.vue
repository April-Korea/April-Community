<template>
  <div id="login">
    <div class="form">
      <div class="input-group">
      <input type="email" v-model="email" placeholder="email">
      <input type="password" v-model="passwd" placeholder="password">
    </div>
    <button @click="login">sign in</button>
    </div>

    <div class="login-etc">
      <a href="#">sign up</a>
      <a href="#">find email/password</a>
    </div>

    <div class="social">
      <button class="facebook" @click="socialLogin('facebook')">
        <div class="icon">
          <icon name="facebook"></icon>
        </div>
        <span>Facebook</span>
      </button>
      <button class="google" @click="socialLogin('google')">
        <div class="icon">
          <icon name="google-plus"></icon>
        </div>
        <span>Google</span>
      </button>
      <button class="kakao" @click="socialLogin('kakao')">
        <div class="icon">
          <span class="icon"></span>
        </div>
        <span>Kakao</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Icon from 'vue-awesome'
export default {
  name: 'login',
  data() {
    return{ }
  },
  components: {
    Icon
  },
  computed: {
    ...mapState({
      isLogin: state => state.Auth.isLogin,
      email: state => state.Auth.email,
      passwd: state => state.Auth.passwd
    })
  },
  methods: mapActions([
    'login', 'socialLogin'
  ]),
}
</script>

<style scoped>
  #login { position: relative; width: 100%; padding: 10px 10px 5px 10px; border: 1px solid #E1E1E1; background-color: #FFF; box-sizing: border-box; }
  #login .form { display: flex; }
  #login .form .input-group { flex: 1; }
  #login .form button { flex-basis: 100px; margin-left: 3px; border: none; background-color: #282C34; color: #FFF; font-size: .8em; cursor: pointer; }

  #login .login-etc { display: flex; width: 100%; height: 30px; text-align: left; justify-content: space-between; }
  #login .login-etc a { height: 30px; line-height: 30px; padding: 0 5px; font-size: .8em; }

  #login .social { display: flex; margin-top: 10px; }
  #login .social button { position: relative; flex: 1; height: 32px; line-height: 32px; margin: 3px 2px; padding: 0 0 0 32px; border: none; background-color: transparent; font-size: .85em; font-weight: 500; box-sizing: border-box; cursor: pointer; }
  #login .social button:first-child { margin-left: 0; }
  #login .social button:last-child { margin-right: 0; }
  #login .social button span { display: block; width: 100%; height: 100%; text-align: center; }
  #login .social button div.icon { position: absolute; top: 0; left: 0; width: 32px; height: 32px; }

  #login .social button.facebook { background-color: #4468B0; color: #FFF; }
  #login .social button.facebook div.icon { background-color: #415A8D; }
  #login .social button.facebook div.icon svg { padding: 8px 0; }

  #login .social button.google { background-color: #DB4E47; color: #FFF; }
  #login .social button.google div.icon { background-color: #C73E31; }
  #login .social button.google div.icon svg { padding: 10px 0; }

  #login .social button.kakao { background-color: #FEE934; color: #423630 }
  #login .social button.kakao div.icon { background-color: #FEDC32; }
  #login .social button.kakao div.icon { padding: 4px; box-sizing: border-box; }
  #login .social button.kakao div.icon span.icon { display: block; width: 24px; height: 24px; background-image: url('../assets/kakao.png'); background-size: 100%; background-position: center; }
</style>
