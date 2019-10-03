<template>
  <div id="app">
    <TheNavbar></TheNavbar>
    <TheHomePage></TheHomePage>
    <ParallaxBanner></ParallaxBanner>
    <TheSkillsPage></TheSkillsPage>
    <ParallaxBanner></ParallaxBanner>
    <TheProjectsPage></TheProjectsPage>
    <ParallaxBanner></ParallaxBanner>
    <TheContactPage></TheContactPage>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheHomePage from "@/components/TheHomePage";
import ParallaxBanner from "@/components/ParallaxBanner";
import TheSkillsPage from "@/components/TheSkillsPage";
import TheProjectsPage from "@/components/TheProjectsPage";
import TheContactPage from "@/components/TheContactPage";
export default {
  name: "app",
  components: {
    TheNavbar,
    TheHomePage,
    ParallaxBanner,
    TheSkillsPage,
    TheProjectsPage,
    TheContactPage
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  text-align: justify;
  color: #2c3e50;
  background: white;
}
.avatar {
  border: 0.5rem solid white;
  border-radius: 1rem;
  transform: rotate(45deg);
  text-align: center;
  width: 6rem;
  height: 6rem;
  margin: 1rem;
  transition: all 300ms ease-in-out;
}
.gradient-title {
  text-align: center;
  background: linear-gradient(
    202.83deg,
    #78e9ce 1.61%,
    rgba(123, 151, 223, 0.90535) 59.64%,
    rgba(128, 0, 255, 0.73) 118.72%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.portfolio-container {
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: white;
}
.portfolio-card {
  width: 85vw;
  height: auto;
  background: linear-gradient(
    202.83deg,
    #78e9ce 1.61%,
    rgba(123, 151, 223, 0.90535) 59.64%,
    rgba(128, 0, 255, 0.73) 118.72%
  );
  border-radius: 1rem;
  color: white;
  box-shadow: 2px 2px 8px rgba(128, 0, 255, 0.73);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem 1rem 1rem;
  padding: 1rem;
}
i {
  margin: 1rem;
  color: white;
}
h2 {
  margin: 0;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  text-align: center;
}
a:link {
  text-decoration: none;
}

@media screen and (min-width: 400px) {
  html {
    font-size: 18px;
  }
}
@media screen and (min-width: 600px) {
  html {
    font-size: 20px;
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 22px;
  }
}

@media screen and (min-width: 1000px) and (orientation: landscape) {
  .portfolio-container {
    flex-flow: wrap;
  }
  .portfolio-card {
    height: 50vh;
    width: 40vw;
  }
  .home-card {
    padding: 1rem 5rem;
  }
}
</style>
