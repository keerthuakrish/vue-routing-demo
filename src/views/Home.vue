<template>
  <div class="home">
    {{nameprop}}
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="programs">
      <div v-for="item in alldegreePrograms" :key="item.routePath">
        <router-link :to="{ name: 'DegreeDetails', params: { dname: item.routePath } }">
          <h2 v-html="item.name"></h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  props: ["nameprop"],
  computed: mapGetters(["alldegreePrograms"])
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}
.programs {
  display: flex;
  justify-content: space-between;
}
</style>
