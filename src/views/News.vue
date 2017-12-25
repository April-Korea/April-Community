<template>
  <div id="news-view">
    <vue-markdown class="test" v-highlight
    source="
    # Test

    ```js
    const a = 'test';
    ```
    "
    />
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'news',
  metaInfo: {
    title: 'April-Korea 커뮤니티 뉴스입니다.'
  },
  data() {
    return {}
  },
  components: {
    VueMarkdown
  },
  methods: {
    aaa: () => {
      console.log('do');
    }
  }
}
</script>

<style>
  #news-view { position: relative; display: flex; flex-wrap: wrap; width: 1080px; margin: 0 auto; padding: 10px; box-sizing: border-box; background-color: #FFF; }
  #news-view .test { width: 100%; }



</style>
