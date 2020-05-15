import { data, lifestyle } from "../data/DB.ts"

export default
  `
<div>
{{version}}
</div>
`
const life = {
  mounted() {
    // @ts-ignore
    console.log(this.version);
  }

}
Object.assign(lifestyle,life)
data.version = "v1.0"
