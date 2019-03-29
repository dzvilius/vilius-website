<template>
  <section class="section AboutSection" id="About">
    <div class="container">
      <h2 class="is-size-2 has-text-centered">About</h2>
      <div class="content is-medium Profile">
        <figure class="image is-240x240 ProfileImage">
          <img src="images/me.jpg" class="is-rounded" alt="Vilius Dzemyda">
        </figure>
        <h3 class="is-uppercase">Profile</h3>
        <p>Strong technical and communication skills. More than six years of experience in building and maintaining client-side web applications. Good understanding of UI design patterns, user experience, technology stacks, development tools, and best practices.</p>
        <p>Open-minded, analytical, logical, able to grasp difficult concepts and good at troubleshooting.</p>
      </div>
      <div class="columns is-tablet">
        <div class="column is-half-tablet">
          <div class="content is-medium">
            <h3 class="is-uppercase">Skills</h3>
            <p>
              Problem Solving, Communication
              <br>Website Development, SEO
              <br>Prototyping, UI Design
              <br>Responsive Web Design
            </p>
          </div>
        </div>
        <div class="column is-half-tablet">
          <div class="content is-medium">
            <h3 class="is-uppercase">Tech</h3>
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
}

.Profile {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.ProfileImage {
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 142px;
}
</style>
