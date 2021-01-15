<template>
  <Navbar v-on:handle-search="handleSearch" />
  <Table :stages="['Idea', 'Development', 'QA', 'Production']" :state="state" />
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Table from './components/Table/Table.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Table,
  },
  methods: {
    handleSearch(search) {
      this.state.push({index: this.state.length, name: search, stages: 'Idea'});
    },
  },
  data() {
    return {
      state: [],
    };
  },
};
</script>
