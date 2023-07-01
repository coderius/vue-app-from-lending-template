<template>
  <li class="nav-item">
    <a class="nav-link active" :href="item.href">{{ item.text }}</a>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  }
}
</script>


<style scoped></style>
