<template>
  <div class="maine">
    <h1>メインクーン</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_maine_coon" src="../assets/cat_maine_coon.png">
    </div>
    <p class="bodyMsg">大きな体が特徴的なメインクーン</p>
    <p class="bodyMsg">人懐っこくとても賢い性格です</p>
    <catInfo jsonFileName = "maine.json"/>


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
