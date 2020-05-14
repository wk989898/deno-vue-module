import { serve } from "https://deno.land/std/http/server.ts";
import App from "./src/App.jsx"
import { data, methods } from "./src/data/DB.ts"

const port = 3000
const body = `
const template=\`${App}\`;
const data=${JSON.stringify(data)};
const methods=${JSON.stringify(methods)};
export default {template, data,methods}`
const server = serve({ port })
const header = [
  ['Access-Control-Allow-Origin', '*'],
  ['Content-Type', 'application/javascript']
]
console.log(`server run at http://localhost:${port}`)
for await (const req of server) {
  req.respond({ body, headers: new Headers(header) })
}
