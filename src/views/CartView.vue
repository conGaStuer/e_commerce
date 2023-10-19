<template></template>

<script>
import axios from "axios";
export default {
  mounted() {
    // axios
    //   .post("http://localhost:3000/mona", {
    //     name: "hello",
    //     id: 10,
    //   })
    //   .then((response) => console.log(response));
    axios
      .get("http://localhost:3000/mona")
      .then((response) => console.log(response));
  },
};
</script>

<style></style>
