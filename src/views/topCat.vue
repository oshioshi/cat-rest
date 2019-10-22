
<template>
  <div class="topCat">
    <h1>ラグドール</h1>
      <section v-if="hasError">
        Error.
      </section>
      <section v-else>
        <div v-if="loading">
          Loading ...
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
}
</style>

<script>
import axios from 'axios'
import {Tweet} from 'vue-tweet-embed'

export default{
  name: 'topCat',
  components: {
    Tweet: Tweet
  },
  data() {
    return{
      bpi: null,
      hasError: false,
      loading: true
    }
  },
  mounted() {
    axios.get('https://wc44116dwf.execute-api.us-east-1.amazonaws.com/default/getTweets')
      .then(function(response) {
        console.log(response.data.body.statuses)
        this.list = response.data.body.statuses
      }.bind(this))
      .catch(function(error) {
        console.log(error)
        this.hasError = true
      }.bind(this))
      .finally(function() {
        this.loading = false
      }.bind(this))
  }
}

</script>