<template>
  <div class="norwegian">
    <h1>ノルウェージャンフォレストキャット</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_norwegian_forest_cat" src="../assets/cat_norwegian_forest_cat.png">
    </div>
    <p class="bodyMsg">木登りが好きなノルウェージャンフォレストキャット</p>
    <p class="bodyMsg">穏やかで賢く、優しい性格をしています</p>
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
