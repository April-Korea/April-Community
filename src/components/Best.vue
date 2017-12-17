<template>
  <div id="best">
    <div class="title">Best</div>
    <div class="content">
      <ul class="list">
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
      </ul>
      <a href="#">more...</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #best { position: relative; width: 100%; padding: 10px; border: 1px solid #E1E1E1; background-color: #FFF; overflow: hidden; box-sizing: border-box; }
  #best .title { padding: 5px 0; font-size: 1em; font-weight: 600; border-bottom: 1px solid #2F4454; }
  #best .content { padding: 10px 0; }
  #best .content ul.list { list-style-type: none; display: flex; justify-content: space-between; width: 100%; }
  #best .content ul.list li.item { width: 150px; height: 200px; border: 1px solid #E1E1E1; box-sizing: border-box; }
  #best .content a { float: right; padding-top: 10px; font-size: .85em; }
</style>
