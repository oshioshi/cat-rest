<template>
  <div class="ragdoll">
    <h1>ラグドール</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_ragdoll" src="../assets/cat_ragdoll.png">
    </div>
    <p class="bodyMsg">「ぬいぐるみ」を意味するラグドール</p>
    <p class="bodyMsg">抱っこされても嫌がることが少なく、ぐでーんと体を預けてきます</p>
    <catInfo jsonFileName = "ragdoll.json"/>

  <div class="a8">
    <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9IXP82+4EDO+5ZMCH" rel="nofollow">
    <img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=191124220576&wid=001&eno=01&mid=s00000020526001006000&mc=1"></a>
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
