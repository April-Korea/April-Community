<template>
    <div id="home-view">
      <div class="left">
        <Best />
      </div>
      <div class="right">
        <Login />
        <div class="banner">
          Banner
        </div>
      </div>
      <div class="center">
        <Analysis />
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Best from '@/components/Best'
import Login from '@/components/Login'
import Analysis from '@/components/Analysis'
export default {
  name: 'home-view',
  metaInfo: {
    title: 'April-Korea 커뮤니티에 오신걸 환영합니다.'
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      isLogin: state => state.Auth.isLogin
    })
  },
  methods: mapActions([

  ]),
  components: { Best, Login, Analysis }
}
</script>

<style scoped>
  #home-view { position: relative; display: flex; flex-wrap: wrap; width: 1080px; margin: 0 auto; padding: 10px; box-sizing: border-box; }
  #home-view .left { flex-basis: 680px; margin-right: 5px; box-sizing: border-box; }
  #home-view .right { flex-basis: 370px; margin-left: 5px; box-sizing: border-box; }
  #home-view .right .banner { height: 125px; margin-top: 10px; padding: 10px; border: 1px solid #E1E1E1;background-color: #FFF; box-sizing: border-box; }
  #home-view .center { flex-basis: 1080px; margin-top: 10px; }
</style>
