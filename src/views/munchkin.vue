<template>
  <div class="munchkin">
    <h1>マンチカン</h1>
    <div class="cat_img">
      <img alt="cat_munchkin" src="../assets/cat_munchkin.png">
    </div>
    <p class="bodyMsg">マンチカンは短い足が特徴</p>
    <p class="bodyMsg">好奇心旺盛なため、小さな体で元気いっぱいに遊ぶところに癒されます</p>
    <catInfo jsonFileName = "munchkin.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE5+21TRSI+1XKG+1TIJEP" rel="nofollow">
      <img border="0" width="468" height="60" alt="" src="https://www27.a8.net/svt/bgt?aid=191124221124&wid=001&eno=01&mid=s00000009016011004000&mc=1"></a>
    </div>


  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'munchkin',
  components: {
    catInfo
  }
}
</script>
