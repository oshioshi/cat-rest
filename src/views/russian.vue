<template>
  <div class="russian">
    <h1>ロシアンブルー</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_russian_blue" src="../assets/cat_russian_blue.png">
    </div>
    <p class="bodyMsg">引き締まった体が特徴のロシアンブルー</p>
    <p class="bodyMsg">忠実で賢いですが、嫉妬深い一面もあります</p>
    <catInfo jsonFileName = "russian.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE5+21TRSI+1XKG+1TIYU9" rel="nofollow">
      <img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=191124221124&wid=001&eno=01&mid=s00000009016011006000&mc=1"></a>
    </div>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'russian',
  components: {
    catInfo
  }
}
</script>
