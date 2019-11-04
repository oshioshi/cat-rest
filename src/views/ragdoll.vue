<template>
  <div class="ragdoll">
    <h1>ラグドール</h1>
    <div class="cat_img">
      <img alt="cat_ragdoll" src="../assets/cat_ragdoll.png">
    </div>
    <catInfo jsonFileName = "ragdoll.json"/>
  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'ragdoll',
  components: {
    catInfo
  }
}
</script>
