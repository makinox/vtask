<template>
  <Navbar v-on:handle-search="handleSearch" />
  <Table :stages="['Idea', 'Development', 'QA', 'Production']" :state="state" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/navbar/navbar.vue';
import Table from './components/Table/Table.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
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
