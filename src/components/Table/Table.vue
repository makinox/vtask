<template>
  <section>
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
            <div>
              <Item :element="s.stages === 'Idea' ? s : {name: '', stages: ''}" />
            </div>
          </td>
          <td>
            <div>
              <Item :element="s.stages === 'Development' ? s : {name: '', stages: ''}" />
            </div>
          </td>
          <td>
            <div>
              <Item :element="s.stages === 'QA' ? s : {name: '', stages: ''}" />
            </div>
          </td>
          <td>
            <div>
              <Item :element="s.stages === 'Production' ? s : {name: '', stages: ''}" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
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

<style scoped>
section {
  justify-content: center;
  display: flex;
}

section table {
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  border-radius: 5px;
}

section table th {
  border-bottom: 1px solid #dddddd;
  min-width: 140px;
}

section table td div {
  justify-content: center;
  display: flex;
  margin: 3px;
}
</style>
