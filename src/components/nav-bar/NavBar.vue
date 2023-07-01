<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <NavBarBrand :navbarBrandText="navbarBrandText" :navbarBrandHref="navbarBrandHref" />
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="burger-button"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav ml-auto">
        <NavItem :item="item" :key="item.sort" v-for="item in getNavigation"/>
      </ul>
    </div>
  </nav>
</template>

<script>
import NavBarBrand from "@/components/nav-bar/NavBarBrand";
import NavItem from "@/components/nav-bar/NavItem";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'NavBar',
  components: {
    NavBarBrand,
    NavItem
  },
  props: {

  },
  data() {
    return {
      // navbarBrandText: ['Smart', 'Watch'],
      // navbarBrandHref: "#home"
    }
  },
  methods: {
    ...mapMutations({
      // setPage: 'post/setPage',
      // setSearchQuery: 'post/setSearchQuery',
      // setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadNavigation:  'indexPageStorage/loadNavigation',
      loadNavbarBrand: 'indexPageStorage/loadNavbarBrand',
      // loadMorePosts: 'post/loadMorePosts',
      // fetchPosts: 'post/fetchPosts'
    }),
    // createPost(post) {
    //   this.posts.push(post);
    //   this.dialogVisible = false;
    // },
    // removePost(post) {
    //   this.posts = this.posts.filter(p => p.id !== post.id)
    // },
    // showDialog() {
    //   this.dialogVisible = true;
    // },
  },
  computed: {
    ...mapState({
      navbarBrandText: state => state.indexPageStorage.navbarBrand.text,
      navbarBrandHref: state => state.indexPageStorage.navbarBrand.href
    }),
    ...mapGetters({
      getNavigation: 'indexPageStorage/getNavigation',
      // getNavbarBrand: 'indexPageStorage/getNavbarBrand',
      
    })
  },
  mounted() {
    this.loadNavigation();
    this.loadNavbarBrand();
  },
}
</script>


<style scoped></style>
