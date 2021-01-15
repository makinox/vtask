<template>
  <table>
    <thead>
      <tr>
        <th v-for="(s, i) in stages" :key="i">
          {{ s }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(s, i) in state" :key="i">
        <td>
          <Item :element="s.stages === 'Idea' ? s : {name: '', stages: ''}" />
        </td>
        <td>
          <Item :element="s.stages === 'Development' ? s : {name: '', stages: ''}" />
        </td>
        <td>
          <Item :element="s.stages === 'QA' ? s : {name: '', stages: ''}" />
        </td>
        <td>
          <Item :element="s.stages === 'Production' ? s : {name: '', stages: ''}" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Item from '../Item/Item.vue';

export default {
  components: {
    Item,
  },
  props: {
    state: Array,
    stages: Array,
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {},
};
</script>
