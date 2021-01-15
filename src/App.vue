<template>
  <Nab />
  <Search v-on:handle-search="handleSearch" />
  <Table :stages="['Idea', 'Development', 'QA', 'Production']" :state="state" />
</template>

<script>
import Nab from './components/Nab/Nab.vue';
import Search from './components/Search/Search.vue';
import Table from './components/Table/Table.vue';

export default {
  name: 'App',
  components: {
    Search,
    Table,
    Nab,
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
