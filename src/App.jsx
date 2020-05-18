// @ts-nocheck
/**
 * it is neccessary
 */
import Tree from "./pages/Tree.jsx"

const template =
  `
<div>
{{name}}
<Tree/>
</div>
`
export default {
  template,
  // render:h=>h(
  // ),
  data() {
    return {
      name: "hello Deno ~~",
    }
  },
  components: {
    Tree
  }
}



