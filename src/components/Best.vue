<template>
  <div id="best">
    <div class="title">Best</div>
    <div class="content">
      <ul class="list">
        <li  class="item" v-for="item in best" :key="item.id">
          <div class="image"></div>
          <div class="info">
            <h4>{{ item.text }}</h4>
            <p>test....</p>
          </div>

        </li>
      </ul>
      <router-link :to="{ path: 'best' }">more..</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  created () {
    this.getBest()
  },
  methods: {
    ...mapActions(['getBest'])
  },
  computed: {
    ...mapGetters(['best'])
  }
}
</script>

<style scoped>
  #best { position: relative; width: 100%; padding: 10px; border: 1px solid #E1E1E1; background-color: #FFF; overflow: hidden; box-sizing: border-box; }
  #best .title { padding: 5px 0; font-size: 1em; font-weight: 600; border-bottom: 1px solid #2F4454; }
  #best .content { padding: 10px 0; }
  #best .content ul.list { list-style-type: none; display: flex; justify-content: space-between; width: 100%; }
  #best .content ul.list li.item { width: 150px; height: 200px; border: 1px solid #E1E1E1; box-sizing: border-box; }
  #best .content ul.list li.item div.image { height: 100px; background-color: pink; }
  #best .content ul.list li.item div.info { padding: 5px; }


  #best .content a { float: right; padding-top: 10px; font-size: .85em; }
</style>
