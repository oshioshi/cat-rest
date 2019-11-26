<template>
  <div class="maine">
    <h1>メインクーン</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_maine_coon" src="../assets/cat_maine_coon.png">
    </div>
    <p class="bodyMsg">大きな体が特徴的なメインクーン</p>
    <p class="bodyMsg">人懐っこくとても賢い性格です</p>
    <catInfo jsonFileName = "maine.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9IXP82+4EDO+5ZMCH" rel="nofollow">
      <img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=191124220576&wid=001&eno=01&mid=s00000020526001006000&mc=1"></a>
    </div>

  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'maine',
  components: {
    catInfo
  }
}
</script>
