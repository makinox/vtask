<template>
  <span v-if="element?.name" @click.left="handleClick(true)" @click.right="handleClick(false)">{{ element?.name || 'Em' }}</span>
</template>

<script>
export default {
  props: {
    element: Object,
  },
  methods: {
    handleClick(left) {
      if (left) {
        const mutedElement = this.element;
        switch (this.element.stages) {
          case 'Idea':
            mutedElement.stages = 'Development';
            break;
          case 'Development':
            mutedElement.stages = 'QA';
            break;
          case 'QA':
            mutedElement.stages = 'Production';
            break;
          case 'Production':
            mutedElement.stages = 'Idea';
            break;
          default:
            break;
        }
      } else {
        const mutedElement = this.element;
        switch (this.element.stages) {
          case 'Idea':
            mutedElement.stages = 'Production';
            break;
          case 'Development':
            mutedElement.stages = 'Idea';
            break;
          case 'QA':
            mutedElement.stages = 'Development';
            break;
          case 'Production':
            mutedElement.stages = 'QA';
            break;
          default:
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
span {
  border: 1px #dddddd solid;
  display: inline-block;
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
}
</style>
