<template>
  <section class="section HiringSection" id="Hiring">
    <div class="container">
      <h3 class="HiringSection__Title">
        Experience
      </h3>
      <div class="TitleLine"></div>
      <div class="Experience">
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Nov 2019 – Jan 2022</span>
            <div class="Experience__JobTitle">Cybertonica</div>
          </div>
          <h2 class="Experience__Title">Front End Developer</h2>
          <p class="Experience__Info">
            Cybertonica is a FinTech startup offering security services for
            payment gateways and online banking. Products provide fraud & risk
            monitoring on real-time automation and decision based on machine
            learning and enhanced behavioural insights, backed by Europe’s most
            successful venture firms and a network of angel investors.
          </p>
        </div>
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Jan 2016 – Oct 2019</span>
            <div class="Experience__JobTitle">Freelance</div>
          </div>
          <h2 class="Experience__Title">Front End Developer</h2>
          <p class="Experience__Info">
            Registered as a self-employed sole trader. Provide UI design, web
            development and server management services for local clients and
            companies.
          </p>
        </div>
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Apr 2015 – Nov 2015</span>
            <div class="Experience__JobTitle">Purple Pod</div>
          </div>
          <h2 class="Experience__Title">Web Developer</h2>
          <p class="Experience__Info">
            Purple Pod is an Irish-owned web development firm serving a global
            market of clients ranging from start-ups to blue-chip companies.
          </p>
        </div>
        <div class="Experience__Item">
          <div class="Experience__Meta">
            <div class="Experience__Indicator"></div>
            <span>Jun 2011 – Feb 2014</span>
            <div class="Experience__JobTitle">Snap Printing</div>
          </div>
          <h2 class="Experience__Title">Junior Web Developer</h2>
          <p class="Experience__Info">
            A marketing company with extensive expertise across a wide range of
            services, including graphic design, promotional products, website
            design, web application development, SEO and pay-per-click
            management.
          </p>
        </div>
        <div class="Experience__Line"></div>
      </div>
      <!-- <Hiring/> -->
    </div>
  </section>
</template>

<script>
//import Hiring from '~/components/Hiring.vue'

export default {
  name: 'Experience',
  components: {
    //Hiring,
  },
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
  font-size: 32px;
  text-align: center;
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
  margin-top: 8px;
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 500;

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

.Experience__Info {
  font-size: 16px;
  margin-bottom: 24px;
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
