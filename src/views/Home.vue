/* eslint-disable vue/no-unused-vars */
<template>
  <div class="home">
    <nav-bar/>
    <vs-card-group style="margin-top: 113px;">
    <vs-card v-for="blog in blogs" :key="blog.id">
      <template #title>
        <h3>{{blog.name}}</h3>
      </template>
      <!-- <template #img>
        <img :src="`/foto${card}.png`" alt="">
      </template> -->
      <template #text>
        <p>
          {{blog.description}}
        </p>
      </template>
      <template #interactions>
        <!-- <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button> -->
      </template>
    </vs-card>
  </vs-card-group>
    <div class="grid container" >
      <vs-row style="text-align: left">
        <vs-col :w="8">
          <h3 class="h3">Most Recent</h3>
          <vs-row justify="space-around">
            <vs-card v-for="blog in blogs" :key="blog.id">
              <template #title>
                <h3>{{blog.name}}</h3>
              </template>
              <template #img>
                <img :src="blog.domain_name" alt="">
              </template>
              <template #text>
                <router-link :to="'/blog/'+blog.id+'/'+blog.slug">
                  {{blog.description}}
                </router-link>
              </template>
              <template #interactions>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </template>
            </vs-card>
          </vs-row>
        </vs-col>
        <vs-col :w="4">
          <h4 class="h4">Follow Us</h4>
          <vs-row>
            <div class="follow facebook">
              <div class="icon"><i class='bx bxl-facebook' ></i></div>
              <div class="count">300k</div>
              <div class="text">Followers</div>
            </div>
            <div class="follow instagram">
              <div class="icon"><i class='bx bxl-instagram' ></i></div>
              <div class="count">200k</div>
              <div class="text">Followers</div>
            </div>
            <div class="follow twitter">
              <div class="icon"><i class='bx bxl-twitter' ></i></div>
              <div class="count">200k</div>
              <div class="text">Followers</div>
            </div>
          </vs-row>
          <div class="text-center mt-5">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/photomedia/img/most_recent/googleAdd2.jpg" alt="" srcset="">
            </a>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'
// import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    NavBar
  },
  async created () {
    this.getUserConnections()
  },
  computed: {
    ...mapGetters(['BLOGS', 'USER_DETAILS', 'POSTS']),
    user () {
      return this.$store.state.data.userDetails
    },
    blogs () {
      return this.$store.state.data.blogs.results
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

<style lang="css" scoped>

h4.h4{
  font-size: 24px;
}

/* h4.h4::after{
  position: absolute;
  content: "";
  background: #002347;
  width: 70px;
  height: 3px;
  top: 20%;
  margin-top: 3.5px;
  right: 235px;
} */

.follow{
  text-align: center;
  padding: 30px;
  color: #fff;
  margin: 5px;
}

.follow.facebook{
  background: #3b5998;
}
.follow.instagram{
  background: #517fa4;
}
.follow.twitter{
  background: #55acee;
}

.text-center {
  text-align: center !important;
}

.vs-card-content.type-1{
  margin-top: 25px !important;
}

.mt-5{
  margin-top: 1.5rem !important;
}

.vs-card__interactions {
  position: absolute;
  bottom: 0px;
  padding: 5px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  left: 0px;
}
.vs-card__group .vs-card__group-cards .vs-card-content {
  min-width: 180px;
  margin-left: 20px;
}
h3.h3{
  font-size: 24px;
}
/* h3.h3::before{
  position: absolute;
  content: "";
  background: #002347;
  width: 70px;
  height: 3px;
  top: 9%;
  margin-top: 3.5px;
  left: 150px;
} */

</style>
