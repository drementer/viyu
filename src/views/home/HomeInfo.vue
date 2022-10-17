<template>
  <main class="main">
    <AsideMenu :childs="childs" />
    <div class="home-info">
      <h2>Home Info</h2>
      <img src="../../assets/code.jpg" alt="" />
    </div>
  </main>
</template>

<script>
import AsideMenu from '@/components/AsideMenu.vue';

export default {
  name: 'HomeInfo',
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
