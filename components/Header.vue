<template>
  <header class="AppHeader" id="Home">
    <section class="Hero">
      <div class="Hero__Canvas" ref="canvasContainer"></div>
      <div class="Hero__Content">
        <p class="Hero__Title">{{ msg }}</p>
        <h1 class="Hero__Subtitle">
          My name is Vilius,<br />
          I am Frontend Developer based in Ireland.
        </h1>
        <ButtonMail />
      </div>
    </section>
  </header>
</template>

<script>
import ButtonMail from '~/components/Buttons/ButtonMail.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      msg: 'Hello,',
      p5Instance: null,
      horlines: 10,
      vertlines: 17,
      frame_num: 800,
      horizon_prop: 0,
      perspectiveSpreadStart: 0.8,
      perspectiveSpreadEnd: 3,
      gridColor: {
        r: 159,
        g: 21,
        b: 80
      }
    }
  },
  components: {
    ButtonMail,
  },
  mounted() {
    this.initP5()
  },
  beforeUnmount() {
    if (this.p5Instance) {
      this.p5Instance.remove()
    }
  },
  methods: {
    async initP5() {
      // Dynamically import p5 only on client side
      const p5 = (await import('p5')).default

      const sketch = (p) => {
        p.setup = () => {
          const canvas = p.createCanvas(window.innerWidth, 400)
          canvas.parent(this.$refs.canvasContainer)
          p.noStroke()
        }

        p.draw = () => {
          p.background(0, 0, 0)

          const hor = p.height * this.horizon_prop

          // Draw horizontal lines with gradient fade-out (top to bottom)
          for (let i = 0; i < this.horlines; i++) {
            const prop = p.pow(
              ((p.frameCount + (i * this.frame_num) / this.horlines) % this.frame_num) / this.frame_num,
              1
            )
            const v = hor + prop * (p.height - hor)

            const alpha = p.map(v, 0, p.height, 255, 0, true)
            p.stroke(this.gridColor.r, this.gridColor.g, this.gridColor.b, alpha)
            p.line(0, v, p.width, v)
          }

          // Draw perspective (vertical) lines with gradient fade-out (top to bottom)
          for (let i = 0; i <= this.vertlines; i++) {
            const x = (i * p.width) / this.vertlines - p.width / 2

            for (let y = 0; y < p.height; y++) {
              const interX = p.map(
                y,
                0,
                p.height,
                p.width * 0.5 + x * this.perspectiveSpreadStart,
                p.width * 0.5 + x * this.perspectiveSpreadEnd
              )

              // Color gradient from grid color to black at 75%
              let r, g, b
              if (y < p.height * 0.95) {
                const fadeAmount = p.map(y, 0, p.height * 0.95, 0, 1, true)
                r = p.lerp(this.gridColor.r, 0, fadeAmount)
                g = p.lerp(this.gridColor.g, 0, fadeAmount)
                b = p.lerp(this.gridColor.b, 0, fadeAmount)
              } else {
                r = g = b = 0
              }

              p.stroke(r, g, b)
              p.point(interX, y)
            }
          }
        }

        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, 400)
        }
      }

      this.p5Instance = new p5(sketch)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

$app-header-background-colour: #000 !default;

.AppHeader {
  background-color: $app-header-background-colour;
}

.Hero {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin: 0 auto;
}

.Hero__Canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.Hero__Content {
  padding: 28px;
  margin: 0 auto;
  text-align: left;
  position: absolute;
  top: 70px;
  left: 30px;
  right: 0;
  z-index: 2;
  color: $color-two;
  font-family: 'Press Start 2P', cursive;
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    top: 100px;
    left: 160px;
  }
}

.Hero__Title {
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 500;
  color: $color-two;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
}

.Hero__Subtitle {
  font-size: 14px;
  line-height: 2.4;
  margin-bottom: 34px;
  color: #aaa
}
</style>
