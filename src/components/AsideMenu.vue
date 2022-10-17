<template>
  <div class="aside-menu">
    <nav class="aside-menu__links nav">
      <router-link
        class="nav__link"
        v-for="child in childs"
        :key="child.name"
        :to="child.path"
      >
        {{ child.name }}
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AsideMenu',
  props: {
    childs: Array,
    activeTab: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aside-menu {
  padding: 1rem;
  height: 100%;
  width: 100%;
  max-width: 400px;

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;

    width: 100%;
  }

  &__link {
    padding: 0.5rem 1rem;
    color: #42b983;
  }
}
</style>
