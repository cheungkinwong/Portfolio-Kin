<template>
  <div class="home-container" id="home">
    <div class="home-card">
      <img src="../assets/avatar.jpg" alt="avatar" class="avatar" />
      <h1>Hi! I'm Cheung Kin Wong</h1>
      <p>
        I’m a Junior Web Developer at BeCode Antwerp. This portfolio website is a personal project made using Vue.JS because I wanted to learn more about it.
        I love to be challenged, learning new things and I'm passionate about my projects. Thanks for visiting my portfolio and see you around.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHomePage"
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
.home-card {
  width: 85vw;
  height: 80vh;
  background: linear-gradient(
    202.83deg,
    #78e9ce 1.61%,
    rgba(123, 151, 223, 0.90535) 59.64%,
    rgba(128, 0, 255, 0.73) 118.72%
  );
  border-radius: 2rem;
  margin: 4rem 1rem 0rem 1rem;
  align-content: stretch;
  color: white;
  box-shadow: 2px 2px 8px rgba(128, 0, 255, 0.73);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

p {
  margin: 0 0 1rem 0;
}
@media screen and (max-height: 550px) {
  .home-container {
    height: auto;
  }
  .home-card {
    height: auto;
    margin: 4rem 1rem 4rem 1rem;
  }
}
@media screen and (min-width: 370px) {
  .avatar {
    border: 0.8rem solid white;
    border-radius: 2rem;
    width: 8rem;
    height: 8rem;
    margin: 2rem;
  }
}
@media screen and (min-width: 600px) {
  .avatar {
    border: 1rem solid white;
    border-radius: 2rem;
    width: 10rem;
    height: 10rem;
    margin: 2rem;
  }
}
@media screen and (min-width: 1000px) {
  .avatar {
    border: 1rem solid white;
    border-radius: 2rem;
    width: 12rem;
    height: 12rem;
    margin: 2rem;
  }
}
</style>