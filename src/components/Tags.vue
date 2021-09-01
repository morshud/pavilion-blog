<template>
  <div>
    <side-bar/>
    <vs-row>
      <vs-col :w='3'></vs-col>
      <vs-col :w='9' >
        <vs-button
        @click="c_blog=!cblog"
        style="float: right"
        primary
      >
        <i class='bx bx-plus'></i> Add Category
      </vs-button>
        <vs-table style="position: relative;right: 22px; top: 10px; text-align: left;">
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="blog.id"
              v-for="blog in blogs.results"
            >
              <vs-td>
                {{ blog.name }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
    <vs-dialog overflow-hidden v-model="c_blog">
        <template #header>
          <h4 class="not-margin">
            <b>Create Tag</b>
          </h4>
        </template>
        <div class="con-form">
          <vs-input v-model="name" placeholder="Name">
            <template #icon>
              <i class='bx bx-notepad'></i>
            </template>
          </vs-input>
          <!-- <div class="flex">
            <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
            <a href="#">Forgot Password?</a>
          </div> -->
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button @click.prevent="CreateCategory()" block>
              Create
            </vs-button>
          </div>
        </template>
      </vs-dialog>
  </div>
</template>

<script>
import SideBar from '@/components/sidebar.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    SideBar
  },
  data () {
    return {
      page: 1,
      max: 3,
      c_blog: false,
      name: ''
    }
  },
  async created () {
    this.getUserConnections()
  },
  computed: {
    ...mapGetters(['TAG', 'USER_DETAILS']),
    user () {
      return this.$store.state.data.userDetails
    },
    blogs () {
      return this.$store.state.data.tag
    }
  },
  mounted () {
    this.$store.dispatch('GET_USER')
    this.$store.dispatch('GET_TAG')
  },
  methods: {
    getUserConnections () {
      console.log(this.blogs)
    },
    CreateCategory () {
      this.$store.dispatch('CREATE_TAG', {
        name: this.name
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
