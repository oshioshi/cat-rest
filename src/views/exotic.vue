<template>
  <div class="exotic">
    <h1>エキゾチックショートヘア</h1>
    <div class="cat_img">
      <img alt="cat_exotic_shorthair" src="../assets/cat_exotic_shorthair.png">
    </div>
    <p class="bodyMsg">大きな目と低い鼻が特徴のエキゾチックショートヘア</p>
    <p class="bodyMsg">物静かで落ち着いた性格をしています</p>
    <catInfo jsonFileName = "exotic.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+8ZAE9E+4BRS+601S1" rel="nofollow">
      <img border="0" width="468" height="60" alt="" src="https://www22.a8.net/svt/bgt?aid=191124220543&wid=001&eno=01&mid=s00000020188001008000&mc=1"></a>
    </div>

  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'exotic',
  components: {
    catInfo
  }
}
</script>
