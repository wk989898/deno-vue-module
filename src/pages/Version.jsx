// @ts-nocheck
import vue_compiler from "http://localhost:8080/compiler.js"

const template=
    `
  <div>
  {{version}}
  </div>
  `
export default {
  template,
  data() {
    return {
      version: "v2.0"
    }
  },
  mounted() {
    // @ts-ignore
    console.log(this.version);
  }
}
