<template>
  <div class="bengal">
    <h1>ベンガル</h1>
    <div class="cat_img">
      <img alt="cat_bengal" src="../assets/cat_bengal.png">
    </div>
    <catInfo jsonFileName = "bengal.json"/>
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
