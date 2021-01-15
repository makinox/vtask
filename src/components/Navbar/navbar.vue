<template>
  <nav>
    <input v-model="search" type="text">
    <button @click="handleSearch">Search</button>
  </nav>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('handleSearch',this.search)
    }
  }
}
</script>
