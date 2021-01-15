<template>
  <nav>
    <form v-on:submit.prevent="handleSubmit">
      <input v-model="search" type="text" />
    </form>
  </nav>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    // handleSearch() {
    //   this.$emit('handleSearch', this.search);
    // },
    handleSubmit(e) {
      e.preventDefault();
      this.$emit('handleSearch', this.search);
    },
  },
};
</script>
