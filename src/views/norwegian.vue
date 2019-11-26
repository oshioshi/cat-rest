<template>
  <div class="norwegian">
    <h1>ノルウェージャンフォレストキャット</h1>
    <div class="cat_img">
      <img class="desc_img" alt="cat_norwegian_forest_cat" src="../assets/cat_norwegian_forest_cat.png">
    </div>
    <p class="bodyMsg">木登りが好きなノルウェージャンフォレストキャット</p>
    <p class="bodyMsg">穏やかで賢く、優しい性格をしています</p>
    <catInfo jsonFileName = "norwegian.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9H5EEQ+46DW+BXYE9" rel="nofollow"> 
      <img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=191124220573&wid=001&eno=01&mid=s00000019490002006000&mc=1"></a>
    </div>
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
