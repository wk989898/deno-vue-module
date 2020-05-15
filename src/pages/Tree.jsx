// @ts-nocheck
import { data, methods } from "../data/DB.ts"
export default
  `
<div v-for="i in lists">
<p @click="btnclick(i)">{{i}}</p>
</div>
`
data.lists = ['tree1', 'tree2', 'tree3']

const Method={
  btnclick(i){
    console.log(i)
  }
}

Object.assign(methods,Method)