<template>
  <main class="main">
    <AsideMenu :childs="childs" />
    <div class="home-view">
      <h2>Home View</h2>
      <img src="../../assets/code.jpg" alt="" />
    </div>
  </main>
</template>

<script>
import AsideMenu from '@/components/AsideMenu.vue';

export default {
  name: 'HomeView',
  components: {
    AsideMenu,
  },
  data() {
    return {
      menu: this.$router.options.routes,
      childs: this.$router.options.routes.find((child) => child.name == 'home')
        .children,
    };
  },
};
</script>
