<template>
  <div>
    hello
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {}
  },
  created () {
    this.getBlogDetails()
  },
  methods: {
    getBlogDetails () {
      axios.get('blog/' + this.$route.params.id + '/' + this.$route.params.slug + '/', {
        headers: {
          READTOKEN: localStorage.getItem('ReadToken')
        }
      })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
