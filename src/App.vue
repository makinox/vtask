<template>
  <Search v-on:handle-search="handleSearch" />
  <Table :stages="['Idea', 'Development', 'QA', 'Production']" :state="state" />
</template>

<script>
import Search from './components/Search/Search.vue';
import Table from './components/Table/Table.vue';

export default {
  name: 'App',
  components: {
    Search,
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
