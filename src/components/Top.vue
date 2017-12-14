<template>
  <div id="top">
    <div class="content">
      <div class="title">
      <img src="../../static/april-korea.png" alt="">
      <span>{{ title }}</span>
    </div>
    <div class="menu">
      <ul>
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Project</a></li>
      </ul>
    </div>
    <div class="gab">|</div>
    <div class="mypage">OO님 환영합니다.</div>
    <div class="logout">Logout</div>
    </div>
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
  #top { position: fixed; top: 0; left: 0; width: 100%; min-width: 1080px; height: 300px; line-height: 300px; background-image: url('../../static/header.jpg'); background-size: cover; background-position: center; color: #FFF; }
  #top::after { position: absolute; display: block; content: ' '; top: 0; left: 0; width: 100%; height: 100%; background-color: RGBA(0,0,0,0.4); z-index: 2; }
  #top .content { position: relative; display: flex; width: 100%; height: 50px; line-height: 50px; z-index: 100; background: linear-gradient(RGBA(0,0,0,.9), transparent); }
  #top .content .title { display: flex; padding: 0 20px; font-size: 1.4em; font-weight: 600; }
  #top .content .title img { flex-basis: 30px; height: 30px; margin: 8px; }
  #top .content .title span { flex: 1; }
  #top .content .menu { flex: 1; }
  #top .content .menu > ul { list-style-type: none; display: flex; justify-content: flex-end; padding: 0; margin: 0; }
  #top .content .menu > ul > li { padding: 0 10px; cursor: pointer; font-weight: 600; }
  #top .content .menu > ul > li.active a { border-bottom: 2px solid #FFF; }
  #top .content .gab { flex-basis: 30px; text-align: center; }
  #top .content .mypage { flex-basis: 120px; font-weight: 600; }
  #top .content .logout { flex-basis: 100px; font-weight: 600; }
</style>
