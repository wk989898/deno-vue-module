// @ts-nocheck
import Version from "./Version.jsx";

export default {
  template:
    `
    <div>
    <div v-for="i in tree">
    <p @click="btnclick(i)">{{i}}</p>
    </div>
    <div><Version/></div>
    </div>
`,
  data() {
    return {
      tree: ['tree1', 'tree2', 'tree3']
    }
  },
  components: {
    Version
  },

  methods: {
    btnclick(i) {
      console.log(i)
    }
  }
}
