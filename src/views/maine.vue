<template>
  <div class="maine">
    <h1>メインクーン</h1>
    <div class="cat_img">
      <img alt="cat_maine_coon" src="../assets/cat_maine_coon.png">
    </div>
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
