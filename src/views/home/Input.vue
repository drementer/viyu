<template>
  <main class="main">
    <AsideMenu :childs="childs" />
    <CustomInput />
  </main>
</template>

<script>
import AsideMenu from '@/components/AsideMenu.vue';
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'HomeView',
  components: {
    AsideMenu,
    CustomInput,
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
