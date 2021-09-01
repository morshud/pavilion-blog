<template>
  <div>
    <vs-dialog overflow-hidden v-model="login">
      <template #header>
        <h4 class="not-margin">
          <b>Login</b>
        </h4>
      </template>
        <vs-alert color="danger" :value="error" closable>
          invalid username or password
        </vs-alert>
      <div class="con-form">
        <vs-input v-model="email" placeholder="Email">
          <template #icon>
            @
          </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
        <!-- <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div> -->
      </div>
      <template #footer>
        <div class="footer-dialog">
          <vs-button @click.prevent="Login()" block>
            Sign In
          </vs-button>

          <div class="new">
            New Here? <router-link to="/signup">Create New Account</router-link>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: true,
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    Login () {
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password
      }).then(success => {
        // eslint-disable-next-line handle-callback-err
        this.$router.push('/')
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        this.error = true
      })
    }
  }
}
</script>
