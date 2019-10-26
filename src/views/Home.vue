<template>
  <div class="home">
     <HelloWorld msg="take a rest with cats"/>
    <img alt="Vue logo" src="../assets/neko_osuwari.png">
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
