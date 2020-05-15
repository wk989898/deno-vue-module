import Version from "./Version.jsx"
import { data, methods } from "../data/DB.ts"
import tree from "./Tree.jsx"

export default
  `
<div>
{{name}}
${Version}
${tree}
</div>
`
data.name = "hello Deno"



