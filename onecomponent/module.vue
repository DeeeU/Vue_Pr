<template>
  <p :class="$style.message">hello</p>
</template>

<script>
export default {
  created() {
    console.log("css modules: $style", this.$style);
  },
};
</script>

<style module>
.message {
  color: #42b983;
}
</style>
