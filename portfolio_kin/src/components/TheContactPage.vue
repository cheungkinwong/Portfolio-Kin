<template>
  <div id="info">
    <h1 class="gradient-title">Info</h1>
    <div class="home-container">
      <div class="home-card">
        <i class="fas fa-2x fa-user-circle"></i>
        <h2>About me</h2>
        <p>Born in Vilvoorde, 28/12/1983. My parents are from Hong Kong, China. Growing up I've always been fascinated by technology and science. I spend a lot of time in the library and loved to play on the computer.</p>
        <p>
          When I had to choose my studies, I chose science because I loved chemistry and doing experiments. But when I started working in a laboratory I quickly found out that studying science and doing a job in science wasn't quite the same thing.
          I wanted to do something more creative and more tech related and with the proper retraining started to work in the printing sector.
        </p>
        <p>
          I really enjoyed my job as a prepress, every project came with it's own set of challenges and it allowed me to be creative at times.
          But after 9 years, I've noticed the printing sector going into a decline, there were less work, and the boss asked if I'd make a website with a webshop for the company to boost sales. I didn't had any experience making websites at that point but was eager to do give it a try.
        </p>
        <p>It took a while and a lot of trial and error but It was functional and while I learned a lot in the process I wanted to be able to do it properly. When I saw an add from BeCode for a free retraining in Junior Web Developer I knew what my next step was going to be.</p>
      </div>
    </div>

    <div class="portfolio-container">
      <div class="portfolio-card">
        <i class="fas fa-2x fa-user-graduate"></i>
        <h2>Education</h2>
        <table>
          <tr>
            <td>AP hogeschool:</td>
            <td>Chemistry</td>
          </tr>
          <tr>
            <td>VDAB:</td>
            <td>Prepress</td>
          </tr>
          <tr>
            <td>BeCode:</td>
            <td>Junior Web Developer</td>
          </tr>
          <tr>
            <td>Drivers License:</td>
            <td>B</td>
          </tr>
        </table>
      </div>
      <div class="portfolio-card">
        <i class="fas fa-2x fa-briefcase"></i>
        <h2>Experience</h2>
        <table>
          <tr>
            <td>2007-2009:</td>
            <td>Umicore Lab Technician</td>
          </tr>
          <tr>
            <td>2010:</td>
            <td>Internship: JPG Pharma Desktop Publisher</td>
          </tr>
          <tr>
            <td>2011-2019:</td>
            <td>Gazelle Prepress Coordinator</td>
          </tr>
        </table>
      </div>
      <div class="portfolio-card">
        <i class="fas fa-2x fa-info-circle"></i>
        <h2>contact</h2>
        <ul>
          <li>Grote Markt 50, Antwerp</li>
          <li>+32 (0) 485 47 41 48</li>
          <a href="mailto:cheungkin.wong@gmail.com" title="cheungkin.wong@gmail.com">
            <i class="fas fa-2x fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/cheungkin/"
            target="_blank"
            title="www.linkedin.com/in/cheungkin"
          >
            <i class="fab fa-2x fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/cheungkinwong?tab=repositories"
            target="_blank"
            title="github.com/cheungkinwong"
          >
            <i class="fab fa-2x fa-github"></i>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThecontactPage"
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
.home-card {
  width: 85vw;
  height: auto;
  background: linear-gradient(
    202.83deg,
    #78e9ce 1.61%,
    rgba(123, 151, 223, 0.90535) 59.64%,
    rgba(128, 0, 255, 0.73) 118.72%
  );
  border-radius: 1rem;
  margin: 1rem;
  align-content: stretch;
  color: white;
  box-shadow: 2px 2px 8px rgba(128, 0, 255, 0.73);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
table {
  width: 100%;
  height: 10rem;
  margin: auto;
}
td {
  vertical-align: top;
  padding-left: 0.1rem;
}

@media screen and (min-width: 1000px) and (orientation: landscape) {
  .home-card {
    height: 80vh;
  }
}
@media screen and (min-width: 1000px) and (orientation: landscape) {
  .home-card {
    padding: 1rem 15rem;
  }
}
</style>

