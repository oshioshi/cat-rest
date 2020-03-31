<template>
  <div class="kitten">
    <h1>里親募集</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_kitten" src="../assets/neko_osuwari.png">
    </div>
    <p class="bodyMsg">里親募集中の猫のTweetを集めました</p>
    <p class="bodyMsg">ぜひ覗いてみてください</p>
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
