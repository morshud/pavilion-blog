/* eslint-disable quotes */
/* eslint-disable vue/valid-v-bind */
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
        <i class='bx bx-plus'></i> Add Blog
      </vs-button>
        <vs-table style="position: relative;right: 22px; top: 10px; text-align: left;">
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
                flat
                danger
                @click="showModal(blog)"
              >
                <i class='bx bx-plus'></i> Add Post
              </vs-button>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
    <vs-dialog overflow-hidden v-model="c_blog">
      <template #header>
        <h4 class="not-margin">
          <b>Create Blog</b>
        </h4>
      </template>
      <div class="con-form">
        <vs-input v-model="name" placeholder="Name">
          <template #icon>
            <i class='bx bx-notepad'></i>
          </template>
        </vs-input>
        <textarea row="10px" class="vs-textarea" v-model="description" height="200px" placeholder="Firstname">
        </textarea>
        <vs-input v-model="domain" placeholder="Lastname">
          <template #icon>
            <i class='bx bx-broadcast'></i>
          </template>
        </vs-input>
        <!-- <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div> -->
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button @click.prevent="CreateBlog()" block>
            Create
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog overflow-hidden v-model="post">
      <template #header>
        <h4 class="not-margin">
          <b>Create Post {{addPost.name}}</b>
        </h4>
      </template>
      <div class="con-form">
        <vs-input v-model="title" placeholder="Title">
          <template #icon>
            <i class='bx bx-notepad'></i>
          </template>
        </vs-input>
        <div class="vs-input-content">
          <vs-select
            label="Select Categories"
            filter
            multiple
            collapse-chips
            placeholder="Select Category"
            v-model="categories"
          >
            <vs-option  :label="cat.name" v-for="cat in category" :key="cat.id" :value='cat.id'>
              {{cat.name}}
            </vs-option>
          </vs-select>
        </div>
        <div class="vs-input-content">
          <vs-select
            label="Select Tags"
            filter
            multiple
            collapse-chips
            placeholder="Select Tag"
            v-model="tags"
          >
            <vs-option  :label="tag.name" v-for="tag in tag" :key="tag.id" :value='tag.id'>
              {{tag.name}}
            </vs-option>
          </vs-select>
        </div>
        <textarea row="10px" class="vs-textarea" v-model="content" height="300px" placeholder="Description">
        </textarea>
        <!-- <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div> -->
      </div>
      <template #footer>
        <div class="footer-dialog">
          <vs-button @click.prevent="CreatePost()" block>
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
      name: '',
      description: '',
      domain: '',
      is_active: true,
      post: false,
      addPost: '',
      title: '',
      content: '',
      tags: [],
      categories: [],
      blog: ''
    }
  },
  async created () {
    this.getUserConnections()
  },
  computed: {
    ...mapGetters(['BLOGS', 'CATEGORY']),
    selectedBlog () { return this.$store.state.modals.modalData },
    user () {
      return this.$store.state.data.userDetails
    },
    blogs () {
      return this.$store.state.data.blogs
    },
    tag () {
      return this.$store.state.data.tag.results
    },
    category () {
      return this.$store.state.data.category.results
    }
  },
  mounted () {
    this.$store.dispatch('GET_USER')
    this.$store.dispatch('GET_BLOGS')
    this.$store.dispatch('GET_CATEGORY')
    this.$store.dispatch('GET_TAG')
  },
  methods: {
    getUserConnections () {
      console.log(this.blogs)
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
    },
    showModal (data) {
      this.$store.dispatch('openModal', { data: data, modalId: 'myModal' })
        .then(response => {
          console.log(data)
          this.addPost = data
          this.post = true
        })
    },
    CreatePost () {
      const ta = this.tags
      const ca = this.categories
      console.log(ta)
      this.$store.dispatch('CREATE_POST', {
        title: this.title,
        content: this.content,
        is_active: true,
        is_published: true,
        tags: ta,
        categories: ca,
        blog: this.addPost.id
      })
        .then(() => {
          console.log('created')
        })
    }
  }
}
</script>

<style>
  .vs-select__input.multiple {
      padding: 22px !important;
  }
</style>
