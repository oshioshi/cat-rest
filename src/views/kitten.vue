<template>
  <div class="kitten">
    <h1>里親募集</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_kitten" src="../assets/neko_osuwari.png">
    </div>
    <p class="bodyMsg">里親募集中の猫のTweetを集めました</p>
    <p class="bodyMsg">ぜひ覗いてみてください</p>
    <catInfo jsonFileName = "kitten.json"/>

<div class="a8">
  <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9H5EEQ+46DW+BXYE9" rel="nofollow"> 
  <img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=191124220573&wid=001&eno=01&mid=s00000019490002006000&mc=1"></a>
</div>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'kitten',
  components: {
    catInfo
  }
}
</script>
