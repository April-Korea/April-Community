<template>
  <div id="home-view">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login';
export default {
  name: 'home-view',
  data() {
    return {}
  },
  components: {
    Login
  }
}
</script>

<style scoped>
  #home-view { position: relative; width: 1080px; margin: 0 auto; }
</style>
