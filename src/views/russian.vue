<template>
  <div class="russian">
    <h1>ロシアンブルー</h1>
    <div class="cat_img">
      <img alt="cat_russian_blue" src="../assets/cat_russian_blue.png">
    </div>
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
