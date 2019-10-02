<template>
  <div id="projects">
    <h1 class="gradient-title">Projects</h1>
    <div class="portfolio-container">
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/Memory-game/" target="_blank">
          <img src="../assets/back.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>Memory game</h2>
        <p>I enjoyed this project a lot, the game is playable by keyboard and mouse and has local multiplayer. The project challenged my knowledge of HTML, CSS and JS. I had a hard time figuring out how to store which card was flipped.</p>
      </div>
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/weather-app/" target="_blank">
          <img src="../assets/10d.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>Weather app</h2>
        <p>Excercise using Rest API, enter a city name and get the weather forecast for the next five days. Figuring out how to request and use data from an API took 2 days but this project went pretty smooth overal.</p>
      </div>
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/project-eden/" target="_blank">
          <img src="../assets/image2.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>Project Eden</h2>
        <p>A group project to make a 1 page website for a fictional project. I was responsible for the navbar and making sure there were no merge conflicts. The correct use of Github and branches proved to be a bit of a challenge at first.</p>
      </div>
      <div class="portfolio-card">
        <a href="https://cheungkinwong.github.io/threejs-The-World/" target="_blank">
          <img src="../assets/earthmap1k.jpg" alt="avatar" class="avatar" />
        </a>
        <h2>The world</h2>
        <p>Introduction project to three.js a extensive js library for 3D imagery. We got a workshop and learned some basic but i'd like to learn more what this library can offer at some point.</p>
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
.avatar:hover {
  width: 6.5rem;
  height: 6.5rem;
}
</style>