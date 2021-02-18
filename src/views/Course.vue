<template>
  <section class="course-details">
    <img :src="require(`../assets/${course.image}.png`)" :alt="course.name" />
    <h1>{{ course.name }}</h1>
    <div v-if="cname">
      <div class="course-desc">
        <div class="row" v-for="courseRow in course.courses" :key="courseRow.name">
          <b-card
            :img-src="require(`../assets/${courseRow.image}.png`)"
            :img-alt="courseRow.name"
            img-left
            class="mb-3"
          >
            <b-card-text>
              <p>{{ courseRow.name }}</p>
              <p>{{ courseRow.description }}</p>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CourseDetails",
  data() {
    return {};
  },
  props: {
    cname: {
      type: String,
      required: true
    }
  },
  computed: {
    course() {
      return this.$store.getters.degreeProgramByCourse(this.cname);
    }
  }
};
</script>
