<template>
  <div id="app">
    <Top />
    <router-view/>
  </div>
</template>

<script>
import Top from '@/components/Top';
export default {
  name: 'app',
  components: {
    Top
  }
}
</script>

<style>
* { padding: 0; margin: 0; outline: none; }
body { background-color: #F2F4F7; }
a { text-decoration: none; color: inherit; }
input { width: 100%; height: 32px; height: 32px; padding: 0 5px; font-size: .8em; box-sizing: border-box; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
