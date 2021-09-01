<template>
  <div>
    <vs-dialog overflow-hidden v-model="signup">
      <template #header>
        <h4 class="not-margin">
          <b>Signup</b>
        </h4>
      </template>
      <div class="con-form">
        <vs-input v-model="name" placeholder="Company Name">
          <template #icon>
            <i class='bx bxs-business'></i>
          </template>
        </vs-input>
        <vs-input v-model="user.first_name" placeholder="Firstname">
          <template #icon>
            <i class='bx bx-user-circle'></i>
          </template>
        </vs-input>
        <vs-input v-model="user.last_name" placeholder="Lastname">
          <template #icon>
            <i class='bx bx-user-circle'></i>
          </template>
        </vs-input>
        <vs-input v-model="user.email" placeholder="Email">
          <template #icon>
            @
          </template>
        </vs-input>
        <vs-input type="password" v-model="user.password" placeholder="Password">
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
          <vs-button @click.prevent="Signup()" block>
            Sign Up
          </vs-button>

          <div class="new">
            Already Register? <router-link to="/login">Login</router-link>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data: () => {
    return {
      signup: true,
      error: false,
      name: '',
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    Signup () {
      const loading = this.$vs.loading({
        progress: 0
      })
      const interval = setInterval(() => {
        if (this.progress <= 50) {
          loading.changeProgress(this.progress++)
        }
      }, 40)
      setTimeout(() => {
        loading.close()
        clearInterval(interval)
        this.progress = 0
      }, 4100)
      this.$store.dispatch('SIGNUP', {
        user: {
          email: this.user.email,
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          password: this.user.password
        },
        name: this.name
      })
        .then(success => {
          this.error = false
          loading.close()
          // eslint-disable-next-line handle-callback-err
          this.$router.push('/login')
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          this.error = true
        })
    }
  }
}
</script>
