import { Application } from "https://deno.land/x/abc/mod.ts";


const port = 3000
const app = new Application()
app
  .static('', "src"
  , (h:any) => (c:any) => {
    c.response.headers.set("Access-Control-Allow-Origin", "*")
    c.response.headers.set("Content-Type", "Application/javascript")
    return h(c)
  }
  ) 
  .start({ port })
console.log('start at http://localhost:%d', port);
