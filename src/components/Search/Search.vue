<template>
  <section id="search-section">
    <form v-on:submit.prevent="handleSubmit">
      <input v-model="search" type="text" placeholder="Sumbit a task" />
    </form>
  </section>
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

<style scoped>
section {
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  display: flex;
}

section input {
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease 0s;
  border-radius: 20px;
  padding: 10px;
  border: none;
}

section input:hover,
section input:focus,
section input:active {
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.08);
  outline: none;
  border: none;
}
</style>
