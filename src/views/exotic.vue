<template>
  <div class="exotic">
    <h1>エキゾチックショートヘア</h1>
    <div class="cat_img">
      <img alt="cat_exotic_shorthair" src="../assets/cat_exotic_shorthair.png">
    </div>
    <catInfo jsonFileName = "exotic.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'exotic',
  components: {
    catInfo
  }
}
</script>
