<template>
  <section class="section AboutSection" id="About">
    <div class="container">
      <h2 class="AboutSection__Title">About</h2>
      <div class="TitleLine"></div>
      <div class="content Profile">
        <figure class="image is-200x200 ProfileImage">
          <img src="images/vd.jpeg" class="is-rounded" alt="Vilius Dzemyda" />
        </figure>
        <h3 class="AboutSection__Subtitle">Profile</h3>
        <p>
          I am an experienced web application UI developer based in Ireland. My
          primary skills are UXD and front-end web development.
        </p>
        <p>
          Specialise in HTML, CSS and JavaScript. Good understanding of UI design patterns, user experience, technology stacks, development tools, and industry best practices.
        </p>
        <p>
          Open-minded, curious, analytical thinker, able to grasp complex concepts and good at troubleshooting.
        </p>
      </div>
      <div class="columns is-tablet">
        <div class="column is-half-tablet">
          <div class="content">
            <h3 class="AboutSection__Subtitle">Skills</h3>
            <p>
              UX, Planning, Research, Information Architecture, Communication, Troubleshooting, Vector Graphics, Wireframes, Prototypes, Responsive UI Design, Web App Development, Data Visualisation, SEO, Attention to Detail, Multilingual, Remote Work
            </p>
          </div>
        </div>
        <div class="column is-half-tablet">
          <div class="content">
            <h3 class="AboutSection__Subtitle">Tech</h3>
            <p>
              React, JS, CSS & Sass, HTML5, APIs, NextJS, Git, CLI, Bootstrap, MUI, Bulma, VS Code, NVM, Node, npm, iTerm, Cloudflare, Postman Balsamiq, Figma, Sketch, Adobe, JIRA, Trello, Confluence, GApps, MacOS, Linux, WordPress
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

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
  font-size: 32px;
  text-align: center;
}

.AboutSection__Subtitle {
  color: $color-one;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
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
