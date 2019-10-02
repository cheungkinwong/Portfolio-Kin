<template>
  <a class="NavbarButton"></a>
</template>

<script>
export default {
  name: "NavbarButton",
  props: ["name"]
};
</script>

<style lang="sass" scoped>
  .selected-button
    color:red
  .NavbarButton
    text-align: center
    margin: 0 0.5vw
    padding: 0.5rem 1rem 
    curser: pointer
    transition: color 300ms ease-in-out
    color: rgb(220, 233, 255)
    &:hover
        color: white
        cursor: pointer
  a:link
    text-decoration: none
    color: white
</style>