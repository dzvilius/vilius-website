<template>
  <section class="section HiringSection" id="Hiring">
    <div class="container">
      <h3 class="is-size-3 has-text-centered HiringSection__Title">
        Experience
      </h3>
      <div class="TitleLine"></div>
      <div class="Experience">
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Mar 2020 – Present</span>
            <div class="Experience__JobTitle">Cybertonica</div>
          </div>
          <h2 class="Experience__Title">UI / Front-End Developer</h2>
          <p>
            User experience design, interactive prototypes, documentation, UI
            component development using React. Data visualisation.
          </p>
        </div>
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Jan 2017 – Feb 2020</span>
            <div class="Experience__JobTitle">Freelance</div>
          </div>
          <h2 class="Experience__Title">Front-End Web Developer</h2>
          <p>
            Planning, design and development of UI components using Vue.
            WordPress sites development. Domains, emails, migration, backups,
            servers configuration. Client support by phone and email.
          </p>
        </div>
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Apr 2015 – Nov 2015</span>
            <div class="Experience__JobTitle">Purple Pod</div>
          </div>
          <h2 class="Experience__Title">Front-End Web Developer</h2>
          <p>
            Convert design mock-ups into fully functional templates for online
            stores and websites. Responsible for the design and development of
            WordPress sites, and daily website maintenance.
          </p>
        </div>
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Jun 2011 – Feb 2014</span>
            <div class="Experience__JobTitle">The DG Group / Snap</div>
          </div>
          <h2 class="Experience__Title">Web Developer</h2>
          <p>
            Convert Photoshop mock-ups into fully functional websites. In-house
            CSS framework and starter WordPress theme. Website optimisation for
            mobile, responsive techniques implementation, browser compatibility
            testing. Client support.
          </p>
        </div>
        <div class="Experience__Line"></div>
      </div>
      <!-- <Hiring/> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

.HiringSection {
  background: #fff;
}

.HiringSection__Title {
  color: $color-one;
  font-weight: 500;
}

.TitleLine {
  background: #66eecc;
  margin: 12px auto;
  border-radius: 4px;
  height: 4px;
  width: 60px;
}

.Experience {
  padding-top: 12px;
  margin-top: 72px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 60px;
  padding-right: 20px;
  position: relative;
  max-width: 700px;

  @media screen and (min-width: 960px) {
    padding-left: 180px;
  }
}

.Experience__Item {
  padding-bottom: 36px;
  font-size: 14px;
}

.Experience__Meta {
  position: relative;

  span {
    font-style: italic;
    font-size: 14px;
  }

  @media screen and (min-width: 960px) {
    span {
      position: absolute;
      display: inline-block;
      top: 5px;
      left: -200px;
      text-align: right;
      width: 140px;
    }
  }
}

.Experience__Indicator {
  position: absolute;
  top: 4px;
  left: -42px;
  height: 16px;
  width: 16px;
  border: 2px solid #66eecc;
  background: #fff;
  border-radius: 100px;
  z-index: 2;

  @media screen and (min-width: 960px) {
    top: 6px;
  }
}

.Experience__JobTitle {
  margin-top: 14px;
  font-size: 16px;

  @media screen and (min-width: 960px) {
    position: absolute;
    top: 22px;
    left: -230px;
    text-align: right;
    width: 170px;
  }
}

.Experience__Title {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
}

.Experience__Line {
  background: #c4cdd5;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 25px;
  bottom: 24px;
  width: 2px;
  z-index: 1;

  @media screen and (min-width: 960px) {
    left: 145px;
  }
}
</style>
