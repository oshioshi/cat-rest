<template>
  <div class="scottish">
    <h1>スコティッシュフォールド</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_scottish_fold" src="../assets/cat_scottish_fold.png">
    </div>
    <p class="bodyMsg">垂れ耳とまん丸顔が印象的なスコティッシュフォールド</p>
    <p class="bodyMsg">名前の通り「スコ座り」を見せることの多い猫種です</p>
    <catInfo jsonFileName = "scottish.json"/>

<div class="a8">
  <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9H5EEQ+46DW+BXYE9" rel="nofollow"> 
  <img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=191124220573&wid=001&eno=01&mid=s00000019490002006000&mc=1"></a>
</div>

  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'scottish',
  components: {
    catInfo
  }
}
</script>
