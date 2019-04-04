<template>
  <section class="section AboutSection" id="About">
    <div class="container">
      <h2 class="is-size-3 has-text-centered AboutSection__Title">About</h2>
      <div class="TitleLine"></div>
      <div class="content Profile">
        <figure class="image is-200x200 ProfileImage">
          <img src="images/me.jpg" class="is-rounded" alt="Vilius Dzemyda">
        </figure>
        <h3 class="is-uppercase is-size-5">Profile</h3>
        <p>I am an experienced web developer based in Ireland. My primary skills are front-end web development and UI design. Currently, I am studying full-stack software development at Code Institute in Dublin, and hoping to transition into more advanced, data-driven software development.</p>
        <p>Specialise in HTML, CSS and JavaScript. Good understanding of UI design patterns, user experience, technology stacks, development tools, and best practices.</p>
        <p>Open-minded, analytical, logical, able to grasp difficult concepts and good at troubleshooting.</p>
      </div>
      <div class="columns is-tablet">
        <div class="column is-half-tablet">
          <div class="content">
            <h3 class="is-uppercase is-size-5">Skills</h3>
            <p>
              Problem Solving, Communication
              <br>Website Development, SEO
              <br>Prototyping, UI Design
              <br>Responsive Web Design
            </p>
          </div>
        </div>
        <div class="column is-half-tablet">
          <div class="content">
            <h3 class="is-uppercase is-size-5">Tech</h3>
            <p>
              HTML, CSS, JavaScript, Vue.js
              <br>Bulma, Bootstrap, SCSS
              <br>Linux, CLI, Git, npm, Webpack
              <br>WordPress, Nuxt.js
              <br>Netlify, Cloudways
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

.AboutSection {
  background: #f4f6f8;
  padding-bottom: 72px;

  .container {
    max-width: 800px;
  }
}

.AboutSection__Title {
  color: $color-one;
  font-weight: 500;
}

.TitleLine {
  background: #db5c6e;
  margin: 12px auto;
  border-radius: 4px;
  height: 4px;
  width: 60px;
}

.Profile {
  margin-top: 110px;
  margin-bottom: 48px;
}

.ProfileImage {
  margin-right: auto;
  margin-left: auto;
  position: relative;
  top: -40px;

  img {
    box-shadow: 2px 12px 0px #dcefff;
  }
}
</style>
