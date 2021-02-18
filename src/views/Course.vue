<template>
  <div>
    <section class="course-details">
      <h1>{{ course.name }}</h1>
      <div class="card">
        <img :src="require(`../assets/${course.image}.png`)" :alt="course.name" />
        <p>{{ course.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CourseDetails",
  data() {
    return {};
  },
  props: {
    dname: {
      type: String,
      required: true
    },
    cname: {
      type: String,
      required: true
    }
  },
  computed: {
    degree() {
      return this.$store.getters.degreeProgramByName(this.dname);
    },
    course() {
      return this.degree.courses.find(
        course => course.routePath === this.cname
      );
    }
  }
};
</script>
<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>