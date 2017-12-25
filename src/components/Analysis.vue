<template>
  <div id="analysis">
    <div class="title">Analysis</div>
    <div class="content">
      <IEcharts :option="bar"></IEcharts>
    </div>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js';
export default {
  data: () => ({
      bar: {
        title: {
          left: 'center',
          text: 'Community Best Language',
          subtext: '접속자가 많이 검색하는 언어를 보여줍니다.'
        },
        color: ['#C53F36'],
        barWidth: 20,
        tooltip: {},
        xAxis: {
          data: ['AWS', 'JAVA', 'Javascript', 'ES6', 'ReactJS', 'AngularJS', 'VueJS', 'NodeJS', 'Python']
        },
        yAxis: {},
        series: [{
          name: '확인수',
          type: 'bar',
          data: [4520, 2900, 1220, 606, 3010, 1910, 2020, 908, 805],
          markPoint: {
            data: [
              { type: 'max', name: 'max' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '확인 평균' }
            ]
          }
        }]
      }
    }),
    methods: {

    },

  components: {
    IEcharts
  }
}
</script>

<style>
  #analysis { width: 100%; padding: 10px; border: 1px solid #E1E1E1; background-color: #FFF; box-sizing: border-box; }
  #analysis .title { padding: 5px 0; font-size: 1em; font-weight: 600; border-bottom: 1px solid #2F4454; }
  #analysis .content { width: 70%; height: 300px; padding: 10px 0; }
</style>
