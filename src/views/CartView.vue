<template>
  <div></div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    cart: {
      type: Object,
    },
  },
  setup(props) {
    console.log(props);
  },
};
</script>
