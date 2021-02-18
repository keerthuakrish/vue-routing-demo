<template>
  <div>
    <section class="degree-details">
      <b-card
        :img-src="require(`../assets/${degree.image}.png`)"
        :img-alt="degree.name"
        img-left
        class="mb-3"
      >
        <b-card-text>
          <h1>{{ degree.name }}</h1>
          <p>{{ degree.description }}</p>
        </b-card-text>
      </b-card>
    </section>
    <section class="course-details">
      <h2>Courses available</h2>
      <div class="courses">
        <div class="card" v-for="courseRow in degree.courses" :key="courseRow.name">
          <router-link :to="{ name: 'CourseDetails', params: { cname: courseRow.routePath } }">
            <img :src="require(`../assets/${courseRow.image}.png`)" :alt="courseRow.name" />
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
export default {
  name: "DegreeDetails",
  data() {
    return {};
  },
  props: {
    dname: {
      type: String,
      required: true
    }
  },
  computed: {
    degree() {
      return this.$store.getters.degreeProgramByName(this.dname);
    }
  }
};
</script>
<style lang="scss">
.courses {
  display: flex;
  justify-content: center;
}
.card {
  margin: 20px;
}
</style>