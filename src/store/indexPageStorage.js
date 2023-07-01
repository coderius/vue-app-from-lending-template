// import axios from "axios";
import {navigationData, navbarBrand} from "@/data/navigation"

export const indexPageStorage = {
    state: () => ({
        navigation: [],
        navbarBrand: [],
        // posts: [],
        // isPostsLoading: false,
        // selectedSort: '',
        // searchQuery: '',
        // page: 1,
        // limit: 10,
        // totalPages: 0,
        // sortOptions: [
        //     {value: 'title', name: 'По названию'},
        //     {value: 'body', name: 'По содержимому'},
        // ]
    }),
    getters: {
        getNavigation(state) {
             return state.navigation
        },
        getNavbarBrand(state) {
             return state.navbarBrand
        },

        // sortedPosts(state) {
        //     return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        // },
        // sortedAndSearchedPosts(state, getters) {
        //     return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        // }
    },
    mutations: {
        setNavigation(state, nav) {
            state.navigation = nav;
        },
        setNavbarBrand(state, brand) {
            state.navbarBrand = brand;
        },
        // setPosts(state, posts) {
        //     state.posts = posts;
        // },
        // setLoading(state, bool) {
        //     state.isPostsLoading = bool
        // },
        // setPage(state, page) {
        //     state.page = page
        // },
        // setSelectedSort(state, selectedSort) {
        //     state.selectedSort = selectedSort
        // },
        // setTotalPages(state, totalPages) {
        //     state.totalPages = totalPages
        // },
        // setSearchQuery(state, searchQuery) {
        //     state.searchQuery = searchQuery
        // },
    },
    actions: {
        loadNavigation ({commit}) {
           commit('setNavigation', navigationData)
        },
        loadNavbarBrand ({commit}) {
            commit('setNavbarBrand', navbarBrand)
        },

        // async fetchPosts({state, commit}) {
        //     try {
        //         commit('setLoading', true);
        //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        //             params: {
        //                 _page: state.page,
        //                 _limit: state.limit
        //             }
        //         });
        //         commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        //         commit('setPosts', response.data)
        //     } catch (e) {
        //         console.log(e)
        //     } finally {
        //         commit('setLoading', false);
        //     }
        // },
        // async loadMorePosts({state, commit}) {
        //     try {
        //         commit('setPage', state.page + 1)
        //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        //             params: {
        //                 _page: state.page,
        //                 _limit: state.limit
        //             }
        //         });
        //         commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        //         commit('setPosts', [...state.posts, ...response.data]);
        //     } catch (e) {
        //         console.log(e)
        //     }
        // }
    },
    namespaced: true
}