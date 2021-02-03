// @ts-nocheck
import Tree from "./pages/Tree.jsx"
const template =
`
<div>
<h1>{{tip}}</h1>
{{name}}
<Tree/>
</div>
`
export default {
  template,
  data() {
    return {
      name: "Hello Deno ~~",
      tip:"Now you can update file"
    }
  },
  components: {
    Tree
  }
}



