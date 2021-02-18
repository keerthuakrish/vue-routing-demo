<template>
  <div class>
    <h1>Hi, Welcome {{nameprop}}</h1>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["nameprop"]
};
</script>