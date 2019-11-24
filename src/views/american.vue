<template>
  <div class="american">
    <h1>アメリカンショートヘア</h1>
    <div class="cat_img">
      <img alt="cat_american_shorthair" src="../assets/cat_american_shorthair.png">
    </div>
    <p class="bodyMsg">体つきがしっかりしているアメリカンショートヘア</p>
    <p class="bodyMsg">自立心があり、慎重で賢い性格をしています</p>
    <catInfo jsonFileName = "american.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9HQU0I+46HI+644DT" rel="nofollow">
      <img border="0" width="468" height="60" alt="" src="https://www21.a8.net/svt/bgt?aid=191124220574&wid=001&eno=01&mid=s00000019503001027000&mc=1"></a>
    </div>

  </div> 
</template>

<script>
import catInfo from '@/components/catInfo.vue'
export default {
  name: 'american',
  components: {
    catInfo
  }
}
</script>
