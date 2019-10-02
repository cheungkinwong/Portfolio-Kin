<template>
  <div class="parallax"></div>
</template>

<script>
export default {
  name: "ParralaxBanner"
};
</script>

<style lang="scss" scoped>
.parallax {
  background-image: url("./../assets/hackaton.jpg");
  position: relative;
  height: 50vh;
  width: 100vw;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
}
</style>