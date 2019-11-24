<template>
  <div class="ragdoll">
    <h1>ラグドール</h1>
    <div class="cat_img">
      <img alt="cat_ragdoll" src="../assets/cat_ragdoll.png">
    </div>
    <p class="bodyMsg">「ぬいぐるみ」を意味するラグドール</p>
    <p class="bodyMsg">抱っこされても嫌がることが少なく、ぐでーんと体を預けてきます</p>
    <catInfo jsonFileName = "ragdoll.json"/>

  <div class="a8">
    <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+8YOYNM+4A2Y+5ZU29" rel="nofollow">
    <img border="0" width="468" height="60" alt="" src="https://www24.a8.net/svt/bgt?aid=191124220542&wid=001&eno=01&mid=s00000019969001007000&mc=1"></a>
  </div>
  
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
