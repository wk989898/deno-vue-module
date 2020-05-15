import { data, lifestyle } from "../data/dataBase.js"

export default
  `
<div>
{{version}}
</div>
`
data.version = "v1.0"

const life = {
  mounted() {
    // @ts-ignore
    console.log(this.version);
  }
}

Object.assign(lifestyle,life)
