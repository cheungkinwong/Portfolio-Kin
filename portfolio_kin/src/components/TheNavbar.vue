<template>
  <div class="navbar-container">
    <NavbarButton href="#home" class="fas fa-2x fa-home" name="home"></NavbarButton>
    <NavbarButton href="#skills" class="fas fa-2x fa-code" name="Skills"></NavbarButton>
    <NavbarButton href="#projects" class="fas fa-2x fa-folder-open" name="Projects"></NavbarButton>
    <NavbarButton href="#contact" class="far fa-2x fa-id-card" name="Contact me"></NavbarButton>
  </div>
</template>

<script>
import NavbarButton from "@/components/NavbarButton";
export default {
  name: "TheNavbar",
  components: {
    NavbarButton
  }
};
</script>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  align-content: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background: linear-gradient(
    202.83deg,
    #78e9ce 1.61%,
    rgba(123, 151, 223, 0.90535) 59.64%,
    rgba(128, 0, 255, 0.73) 118.72%
  );
}
</style>
