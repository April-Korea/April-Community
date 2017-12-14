<template>
  <div id="main-view">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login';
export default {
  name: 'main-view',
  data() {
    return {}
  },
  components: {
    Login
  }
}
</script>

<style scoped>
  #main-view { position: relative; width: 1080px; margin: 0 auto; }
</style>
