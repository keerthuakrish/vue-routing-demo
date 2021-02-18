<template>
  <div class>
    <h1>This is Frontend Program {{greetings.text}}</h1>
  </div>
</template>

<script>
export default {
  name: "Frontend",
  props: {
    greetings: {
      type: Object,
      required: true
    }
  }
};
</script>