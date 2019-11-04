<template>
  <div class="american">
    <h1>アメリカンショートヘア</h1>
    <div class="cat_img">
      <img alt="cat_american_shorthair" src="../assets/cat_american_shorthair.png">
    </div>
    <catInfo jsonFileName = "american.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'american',
  components: {
    catInfo
  }
}
</script>
