<template>
  <div class="norwegian">
    <h1>ノルウェージャンフォレストキャット</h1>
    <div class="cat_img">
      <img alt="cat_norwegian_forest_cat" src="../assets/cat_norwegian_forest_cat.png">
    </div>
    <catInfo jsonFileName = "norwegian.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'norwegian',
  components: {
    catInfo
  }
}
</script>
