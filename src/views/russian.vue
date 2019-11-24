<template>
  <div class="russian">
    <h1>ロシアンブルー</h1>
    <div class="cat_img">
      <img alt="cat_russian_blue" src="../assets/cat_russian_blue.png">
    </div>
    <p class="bodyMsg">引き締まった体が特徴のロシアンブルー</p>
    <p class="bodyMsg">忠実で賢いですが、嫉妬深い一面もあります</p>
    <catInfo jsonFileName = "russian.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+8YOYNM+4A2Y+5ZU29" rel="nofollow">
      <img border="0" width="468" height="60" alt="" src="https://www24.a8.net/svt/bgt?aid=191124220542&wid=001&eno=01&mid=s00000019969001007000&mc=1"></a>
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
