<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      router.push("/");
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          if (route.path == "/login" || route.path == "/register") {
            router.replace("/");
          }
        }
      });
    });
  },
};
</script>
<style lang="scss"></style>
