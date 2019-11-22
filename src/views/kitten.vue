<template>
  <div class="kitten">
    <h1>里親募集</h1>
    <div class="cat_img">
      <img alt="cat_kitten" src="../assets/neko_osuwari.png">
    </div>
    <catInfo jsonFileName = "kitten.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'kitten',
  components: {
    catInfo
  }
}
</script>
