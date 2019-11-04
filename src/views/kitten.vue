<template>
  <div class="kitten">
    <h1>子猫</h1>
    <div class="cat_img">
      <img alt="cat_kitten" src="../assets/pet_omocha_neko.png">
    </div>
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
