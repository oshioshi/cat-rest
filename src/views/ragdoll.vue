<template>
  <div class="ragdoll">
    <h1>ラグドール</h1>
    <div class="cat_img">
      <img alt="cat_ragdoll" src="../assets/cat_ragdoll.png">
    </div>
    <p class="bodyMsg">「ぬいぐるみ」を意味するラグドール</p>
    <p class="bodyMsg">抱っこされても嫌がることが少なく、ぐでーんと体を預けてきます</p>
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
