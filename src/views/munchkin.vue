<template>
  <div class="munchkin">
    <h1>マンチカン</h1>
    <div class="cat_img">
      <img alt="cat_munchkin" src="../assets/cat_munchkin.png">
    </div>
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
