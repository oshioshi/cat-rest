import axios from 'axios'
import {Tweet} from 'vue-tweet-embed'

export default{
  components: {
    Tweet: Tweet
  },
  data() {
    return{
      hasError: false,
      loading: true,
      jsonName: ''
    }
  },
  mounted() {
    this.getCatInfoJson();
  },
  methods: {
    getCatInfoJson(){
      axios.get('https://cat-rest-bucket.s3.amazonaws.com/'+this.jsonName)
      .then(function(response) {
        this.list = response.data.body.statuses
      }.bind(this))
      .catch(function(error) {
        this.hasError = true
      }.bind(this))
      .finally(function() {
        this.loading = false
      }.bind(this))
    },
    setJsonName(catType){
      this.jsonName = catType.jsonName;
    }
  }
  
}