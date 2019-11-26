<template>
  <div class="bengal">
    <h1>ベンガル</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_bengal" src="../assets/cat_bengal.png">
    </div>
    <p class="bodyMsg">ヒョウ柄が印象的なベンガル</p>
    <p class="bodyMsg">野生的な見た目とは裏腹に、穏やかで人懐っこいです</p>
    <catInfo jsonFileName = "bengal.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9HQU0I+46HI+626XT" rel="nofollow">
      <img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=191124220574&wid=001&eno=01&mid=s00000019503001018000&mc=1"></a>
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
