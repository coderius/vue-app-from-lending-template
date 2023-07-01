<template>
    <a class="navbar-brand" :href="navbarBrandHref">
      <span :key="brandText" v-for="brandText in navbarBrandText">{{brandText}}</span>
      <!-- <span>Smart</span><span>Watch</span> -->
    </a>
</template>

<script>
export default {
  name: 'NavBarBrand',
  props: {
    navbarBrandText: Array, //['vfdv','vdfv']
    navbarBrandHref: String, //'vfd'
  },
}
</script>


<style scoped>
</style>
