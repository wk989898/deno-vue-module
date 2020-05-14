import { serve } from "https://deno.land/std/http/server.ts";
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts"


const str = await readFileStr("./App.ejs")
const template = `var App=\`${str}\`;export default App`
const port = 3000
const server = serve({ port })
const header = [
  ['Access-Control-Allow-Origin', '*'],
  ['Content-Type', 'application/javascript']
]
console.log(`server run at http://localhost:${port}`)
for await (const req of server) {
  req.respond({ body: template, headers:new Headers(header) })
}
