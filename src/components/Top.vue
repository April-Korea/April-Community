<template>
  <div id="top">
    <div class="title">{{ title }}</div>
    <div class="menu">
      <ul>
        <li>Main</li>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
      </ul>
    </div>
    <div class="mypage">OO님 환영합니다.</div>
    <div class="logout">Logout</div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data() {
    return {
      title: 'April-Korea Community'
    }
  }
}
</script>

<style scoped>
  #top { position: fixed; display: flex; top: 0; left: 0; width: 100%; min-width: 1080px; height: 60px; line-height: 60px; background-color: #21252B; color: #FFF; }
  #top .title { flex-basis: 300px; font-size: 1.4em; font-weight: 600; }
  #top .menu { flex: 1; }
  #top .menu > ul { list-style-type: none; display: flex; padding: 0; margin: 0; }
  #top .menu > ul > li { padding: 0 10px; cursor: pointer; }
  #top .mypage { flex-basis: 120px; }
  #top .logout { flex-basis: 100px; }
</style>
