<template>
  <section class="section AboutSection" id="About">
    <div class="container">
      <h2 class="AboutSection__Title">Profile</h2>
      <div class="TitleLine"></div>
      <div class="content Profile">
        <figure class="image is-200x200 ProfileImage">
          <img src="images/vilius.jpg" class="is-rounded" alt="Vilius Dzemyda" />
        </figure>
      </div>
      <div class="columns is-tablet">
        <div class="column is-two-thirds-tablet">
          <div class="content">
            <h3 class="AboutSection__Subtitle">Professional Summary</h3>
            <p class="AboutSection__Text">
              With over a decade in UI/UX Front End Development, experienced in
              designing and building responsive web applications. Proficient
              with Figma, Sketch, and Balsamiq for prototypes and wireframes,
              and skilled in JavaScript, HTML, CSS, React, Next.js, and Material
              UI. Expertise in UX design and meticulous attention to detail
              ensures intuitive, engaging user experiences.
            </p>
            <p class="AboutSection__Text">
              Experience across freelancing, consulting, and permanent roles
              highlights a strong blend of UI/UX design and front-end
              development skills. Includes crafting seamless, user-centric
              interfaces, collaborating with international teams, and developing
              interactive features to enhance usability. Committed to using
              cutting-edge technologies to drive successful project outcomes.
            </p>
          </div>
        </div>
        <div class="column is-one-third-tablet">
          <div class="content">
            <h3 class="AboutSection__Subtitle">Technical Skills</h3>
            <p class="AboutSection__Skills">
              JavaScript, HTML, CSS, React, Next.js, Node.js, TypeScript,
              Material UI, Bootstrap, Tailwind CSS, WordPress, Sass, Webpack,
              Git, MySQL, RESTful APIs, CLI, Linux
            </p>
            <h3 class="AboutSection__Subtitle">Design Tools</h3>
            <p class="AboutSection__Skills">
              Figma, Sketch, Photoshop, Balsamiq
            </p>
            <h3 class="AboutSection__Subtitle">Soft Skills</h3>
            <p class="AboutSection__Skills">
              Problem Solving, Team Collaboration, Attention to Detail, Empathy,
              Adaptability, Effective Communication, Creativity
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
  background: #180113;
  padding-bottom: 72px;

  .container {
    max-width: 1000px;
  }
}

.AboutSection__Title {
  color: $color-two;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
}

.AboutSection__Subtitle {
  color: $color-two;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
}

.AboutSection__Text {
  font-size: 18px;
  line-height: 1.75;
  padding-right: 60px;
}

.AboutSection__Skills {
  font-size: 16px;
  line-height: 1.75;
}

.TitleLine {
  background: $color-two;
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
    box-shadow: 2px 12px 0px #aaa;
  }
}
</style>
