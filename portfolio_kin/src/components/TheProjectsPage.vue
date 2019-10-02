<template>
  <div id="projects">
    <h1 class="gradient-title">Projects</h1>
    <div class="portfolio-container">
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/Memory-game/" target="_blank">
          <img src="../assets/back.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>Memory game</h2>
        <p>It's playable by keyboard and mouse and has local multiplayer. The project challenged my knowledge of HTML, CSS and JS.</p>
        <div class="link-container">
          <a
            href="https://cheungkinwong.github.io/Memory-game/"
            target="_blank"
            class="link-button"
          >DEMO</a>
          <a
            href="https://github.com/cheungkinwong/Memory-game/"
            target="_blank"
            class="link-button"
          >CODE</a>
        </div>
      </div>
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/weather-app/" target="_blank">
          <img src="../assets/10d.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>Weather app</h2>
        <p>Excercise using Rest API, enter a city name and get the weather forecast for the next five days. Figuring out how to request and use data from an API took a while.</p>
        <div class="link-container">
          <a
            href="https://cheungkinwong.github.io/weather-app/"
            target="_blank"
            class="link-button"
          >DEMO</a>
          <a
            href="https://github.com/cheungkinwong/weather-app/"
            target="_blank"
            class="link-button"
          >CODE</a>
        </div>
      </div>
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/project-eden/" target="_blank">
          <img src="../assets/image2.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>Project Eden</h2>
        <p>A group project to make a 1 page website for a fictional project. I was responsible for the navbar and making sure there were no merge conflicts.</p>
        <div class="link-container">
          <a
            href="https://cheungkinwong.github.io/project-eden/"
            target="_blank"
            class="link-button"
          >DEMO</a>
          <a
            href="https://github.com/cheungkinwong/project-eden/"
            target="_blank"
            class="link-button"
          >CODE</a>
        </div>
      </div>
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/threejs-The-World/" target="_blank">
          <img src="../assets/earthmap1k.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>The world</h2>
        <p>Introduction project to three.js full 3D controls, with both keyboard and mouse.</p>
        <div class="link-container">
          <a
            href="https://cheungkinwong.github.io/threejs-The-World/"
            target="_blank"
            class="link-button"
          >DEMO</a>
          <a
            href="https://github.com/cheungkinwong/threejs-The-World/"
            target="_blank"
            class="link-button"
          >CODE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheprojectsPage"
};
</script>

<style lang="scss" scoped>
.link-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  background: white;
}
.link-button {
  background: linear-gradient(
    202.83deg,
    #78e9ce 1.61%,
    rgba(123, 151, 223, 0.90535) 59.64%,
    rgba(128, 0, 255, 0.73) 118.72%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // font-weight: bold;
}
.avatar:hover {
  width: 6.5rem;
  height: 6.5rem;
}
a {
  text-decoration: none;
  color: white;
}
</style>