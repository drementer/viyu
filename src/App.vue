<template>
  <div id="app" class="app">
    <nav class="nav">
      <router-link
        class="nav__link"
        v-for="menu in menuList"
        :key="menu.name"
        :to="menu.path"
      >
        {{ menu.name }}
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: this.$router.options.routes,
    };
  },
};
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  display: flex;
  flex-direction: row;
}
.home {
  flex-grow: 1;
}

.nav {
  padding: 30px;
  display: flex;
  justify-content: center;

  a {
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: #2c3e50;

    &.-exact-active,
    &.-active {
      color: #42b983;
    }
  }
}

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
