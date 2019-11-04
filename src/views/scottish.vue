<template>
  <div class="scottish">
    <h1>スコティッシュフォールド</h1>
    <div class="cat_img">
      <img alt="cat_scottish_fold" src="../assets/cat_scottish_fold.png">
    </div>
    <catInfo jsonFileName = "scottish.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'scottish',
  components: {
    catInfo
  }
}
</script>
