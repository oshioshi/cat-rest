<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/neko_osuwari.png">
    <HelloWorld msg="take a rest with cats"/>
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
