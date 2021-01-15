<template>
  <span v-if="element?.name" @click="handleClick">{{ element?.name || 'Em' }}</span>
</template>

<script>
export default {
  props: {
    element: Object,
  },
  methods: {
    handleClick() {
      this.element.stages = 'Development';
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
