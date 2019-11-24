<template>
  <div class="bengal">
    <h1>ベンガル</h1>
    <div class="cat_img">
      <img alt="cat_bengal" src="../assets/cat_bengal.png">
    </div>
    <p class="bodyMsg">ヒョウ柄が印象的なベンガル</p>
    <p class="bodyMsg">野生的な見た目とは裏腹に、穏やかで人懐っこいです</p>
    <catInfo jsonFileName = "bengal.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE5+21TRSI+1XKG+1TIJEP" rel="nofollow">
      <img border="0" width="468" height="60" alt="" src="https://www27.a8.net/svt/bgt?aid=191124221124&wid=001&eno=01&mid=s00000009016011004000&mc=1"></a>
    </div>

  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'bengal',
  components: {
    catInfo
  }
}
</script>
