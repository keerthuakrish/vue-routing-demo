<template>
  <div class="navigation">
    <div class="programs">
      <router-link to="/">Home</router-link>
      <div v-for="item in alldegreePrograms" :key="item.routePath">
        <router-link
          :to="{ name: 'DegreeDetails', params: { dname: item.routePath } }"
        >{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "TheNavigation",
  computed: mapGetters(["alldegreePrograms"])
};
</script>

<style scoped>
.navigation {
  max-width: 800px;
  margin: 0 auto;
}
.my-router-active-class {
  color: green;
}
.programs {
  display: flex;
  justify-content: space-between;
}
</style>
