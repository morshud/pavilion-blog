<template>
    <div class="hidden">
      <vs-sidebar
        absolute
        open
        >
        <template #logo>
          <!-- ...img logo -->
          <img src="/favicon.ico" alt="" srcset="">
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          <router-link to='/'>Home</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bxs-dashboard' ></i>
          </template>
          <router-link to='dashboard'>Dashboard</router-link>
        </vs-sidebar-item>
        <!-- <vs-sidebar-item id="post">
          <template #icon>
            <i class='bx bx-podcast'></i>
          </template>
          <router-link to='/posts'>Posts</router-link>
        </vs-sidebar-item> -->
        <vs-sidebar-item id="Category">
          <template #icon>
            <i class='bx bxs-category' ></i>
          </template>
          <router-link to='/categories'>Categories</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="donate">
          <template #icon>
            <i class='bx bxs-tag'></i>
          </template>
          <router-link to='/tags'>Tags</router-link>
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </template>
<script>
export default {
  data: () => ({
  })
}
</script>
