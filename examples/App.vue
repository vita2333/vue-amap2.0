<template>
  <div id="app">
    <div id="nav">
      <!--      <router-link to="/">Home |</router-link>-->
      <router-link :key="route.path" :to="route.path" v-for="(route) in demos">{{route.meta.title}} |</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import { demos } from '@/router'

  export default {
    name: 'App',
    computed: {
      demos () {
        return demos
      },
    },
  }
</script>

<style lang="scss">


  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      padding-right: 10px;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  pre {
    background-color: #f2f2f2;
    padding: 15px;
    overflow-x: scroll;
  }

  a {
    color: dodgerblue;
    text-decoration: none;
  }
</style>
