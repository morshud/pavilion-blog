<template>
  <div id="nav">
      <vs-navbar color="#000444"  text-white square padding-scroll>
        <template #left>
          <img src="/favicon.ico" alt="">
        </template>
        <vs-navbar-item>
          Category
        </vs-navbar-item>
        <vs-navbar-item>
          Tags
        </vs-navbar-item>
        <template #right>
          <router-link to="/dashboard" class="vs-button vs-button--null vs-button--size-null vs-button--danger vs-button--flat">
            <div class="vs-button__content" style="color: red; text-decoration: none;">Dashboard</div>
          </router-link>
          <vs-button @click.prevent='Logout()' danger flat >Logout</vs-button>
        </template>
      </vs-navbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  data () {
    return {
      c_blog: false,
      name: '',
      description: '',
      domain: ''
    }
  },
  computed: {
    ...mapGetters(['USER_DETAILS']),
    user () {
      return this.$store.state.data.userDetails
    }
  },
  methods: {
    Logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('AccessToken')
      this.$router.push('/login')
    },
    CreateBlog () {
      this.$store.dispatch('CREATE_BLOG', {
        company_id: this.user.company,
        name: this.name,
        description: this.description,
        domain_name: this.domain,
        is_active: true,
        users: [this.user.id]
      })
        .then(success => {
          console.log('Created Successful')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
