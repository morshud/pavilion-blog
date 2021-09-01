<template>
  <div>
    <side-bar/>
    <vs-row>
      <vs-col :w='3'></vs-col>
      <vs-col :w='9' >
        <vs-button
        style="float: right"
        primary
      >
        <i class='bx bx-plus'></i> Add Blog
      </vs-button>
        <vs-table style="position: relative;right: 22px; top: 10px;">
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Description
              </vs-th>
              <vs-th>
                Action
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
              <vs-td>
              {{ blog.description }}
              </vs-td>
              <vs-td>
              <vs-button
                style="float: right"
                danger
              >
                <i class='bx bx-plus'></i> Add Post
              </vs-button>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
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
      max: 3
    }
  },
  async created () {
    this.getUserConnections()
  },
  computed: {
    ...mapGetters(['BLOGS', 'USER_DETAILS']),
    user () {
      return this.$store.state.data.userDetails
    },
    blogs () {
      return this.$store.state.data.blogs
    }
  },
  mounted () {
    this.$store.dispatch('GET_USER')
    this.$store.dispatch('GET_BLOGS')
  },
  methods: {
    getUserConnections () {
      console.log(this.blogs)
    }
  }
}
</script>
