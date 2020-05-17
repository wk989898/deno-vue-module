// @ts-nocheck
/**
 * it is neccessary
 */
import Tree from "./pages/Tree.jsx"
import vue_compiler from "http://localhost:8080/compiler.js";

window.vue_compiler=vue_compiler
/**
 * support render
 */
const {compile,parseComponent}=vue_compiler

const template=
  `
<div>
{{name}}
<Tree/>
</div>
`
export default {
  template,
  data: {
    name: "hello Deno ~~",
  },
  components: {
    Tree
  }
}



