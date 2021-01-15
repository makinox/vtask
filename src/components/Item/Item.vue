<template>
  <span v-if="element?.name" @click="handleClick">{{ element?.name || 'Em' }}</span>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
export default {
  props: {
    element: Object,
  },
  methods: {
    handleClick() {
      switch (this.element.stages) {
        case 'Idea':
          this.element.stages = 'Development';
          break;
        case 'Development':
          this.element.stages = 'QA';
          break;
        case 'QA':
          this.element.stages = 'Production';
          break;
        case 'Production':
          this.element.stages = 'Idea';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  border: 1px #555555 solid;
  display: inline-block;
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
}
</style>
