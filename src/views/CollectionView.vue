<template>
  <HomeView> </HomeView>
  <div class="about" v-for="item in items" :key="item.id">
    <div v-for="itemm in item" :key="itemm.id">
      {{ itemm.name }}
    </div>
  </div>
  fqfw
</template>

<script>
import HomeView from "@/views/HomeView.vue";
export default {
  name: "CollectionView",
  components: {
    HomeView,
  },
};
</script>

<style></style>
