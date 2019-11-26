
<template>
  <div>
      <section class="loadMsg" v-if="hasError">
        ねこが見つかりません
      </section>
      <section v-else>
        <div class="loadMsg" v-if="loading">
          ねこを探しています
          <img class="ld ld-bounce" src="../assets/loading.png" style="animation-duration:0.5s"/>
        </div>
        <div v-else>
          <ul>
            <li v-for="tw in list" :key="tw">
              <Tweet :id="tw.id_str" :options="{ align: 'center' }"/>
            </li>
          </ul>
        </div>
      </section>
  </div>
</template>

<style>
ul{
  list-style: none;
  padding: 20px;
}
.desc_img {
  width: 20rem;
  height: auto;
}

.loadMsg {
  font-size: 2rem;
  margin: 80px 0px 80px;
}
</style>
<script>
import Mixin from '@/mixins/reqJson'

export default {
  name: 'catInfo',
  props: {
    jsonFileName: String
  },
   data: function () {
    return {
      jsonName: this.jsonFileName
    }
  },
  mixins: [Mixin]
}


</script>
