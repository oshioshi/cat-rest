<template>
  <div class="exotic">
    <h1>エキゾチックショートヘア</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_exotic_shorthair" src="../assets/cat_exotic_shorthair.png">
    </div>
    <p class="bodyMsg">大きな目と低い鼻が特徴のエキゾチックショートヘア</p>
    <p class="bodyMsg">物静かで落ち着いた性格をしています</p>
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
