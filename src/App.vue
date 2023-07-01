<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <IndexView />
</template>

<script>
import IndexView from './views/IndexView.vue'

export default {
  name: 'App',
  components: {
    IndexView
  },
  mounted() {
    // alert(window.$);
    // const plugin = document.createElement("script");
    // plugin.setAttribute(
    //   "src",
    //   "./assets/js/script.js"
    // );
    // plugin.async = true;
    // document.head.appendChild(plugin);
  }
}

</script>

<style>
/* Font */
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500');
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/themify-icons.css';
@import '@/assets/css/owl.carousel.min.css';
@import '@/assets/css/style.css';
</style>
