import Version from "./Version.jsx"
import { data, methods } from "./data/DB.ts"

data.name = "hello Deno"

export default
  `
<div>
{{name}}
${Version}
</div>
`


