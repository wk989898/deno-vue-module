/**
 * it is neccessary
 */
import Version from "./Version.jsx"
import { data, methods } from "../data/dataBase.js"
import tree from "./Tree.jsx"

export default
  `
<div>
{{name}}
${Version}
${tree}
</div>
`

data.name = "hello Deno ~~"



