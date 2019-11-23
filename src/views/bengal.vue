<template>
  <div class="bengal">
    <h1>ベンガル</h1>
    <div class="cat_img">
      <img alt="cat_bengal" src="../assets/cat_bengal.png">
    </div>
    <p class="bodyMsg">ヒョウ柄が印象的なベンガル</p>
    <p class="bodyMsg">野生的な見た目とは裏腹に、穏やかで人懐っこいです</p>
    <catInfo jsonFileName = "bengal.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'bengal',
  components: {
    catInfo
  }
}
</script>
