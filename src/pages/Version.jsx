// @ts-nocheck
const template=
    `
  <div>
  {{version}}
  </div>
  `

export default {
  template,
  // render:h=>h(Vue),
  data() {
    return {
      version: "Vue 3.0"
    }
  },
  mounted() {
    // @ts-ignore
    console.log(this.version);
  }
}
