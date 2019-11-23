<template>
  <div class="russian">
    <h1>ロシアンブルー</h1>
    <div class="cat_img">
      <img alt="cat_russian_blue" src="../assets/cat_russian_blue.png">
    </div>
    <p class="bodyMsg">引き締まった体が特徴のロシアンブルー</p>
    <p class="bodyMsg">忠実で賢いですが、嫉妬深い一面もあります</p>
    <catInfo jsonFileName = "russian.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'russian',
  components: {
    catInfo
  }
}
</script>
