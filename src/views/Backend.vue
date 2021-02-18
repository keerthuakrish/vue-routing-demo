<template>
  <div class>
    <h1>This is Backend Program{{backendText}}</h1>
  </div>
</template>

<script>
export default {
  name: "Backend",
  props: {
    backendText: {
      type: Boolean,
      required: true
    }
  }
};
</script>