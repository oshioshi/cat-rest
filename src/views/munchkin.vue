<template>
  <div class="munchkin">
    <h1>マンチカン</h1>
    <div class="cat_img">
      <img alt="cat_munchkin" src="../assets/cat_munchkin.png">
    </div>
    <p class="bodyMsg">マンチカンは短い足が特徴</p>
    <p class="bodyMsg">好奇心旺盛なため、小さな体で元気いっぱいに遊ぶところに癒されます</p>
    <catInfo jsonFileName = "munchkin.json"/>
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
