<template>
  <div class="scottish">
    <h1>スコティッシュフォールド</h1>
    <div class="cat_img">
      <img alt="cat_scottish_fold" src="../assets/cat_scottish_fold.png">
    </div>
    <p class="bodyMsg">垂れ耳とまん丸顔が印象的なスコティッシュフォールド</p>
    <p class="bodyMsg">名前の通り「スコ座り」を見せることの多い猫種です</p>
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
