import { Application } from "https://deno.land/x/abc/mod.ts";


const port = 3300
const app = new Application()
app
  .static('', "src", (h: any) => (c: any) => {
    c.response.headers.set("Access-Control-Allow-Origin", "*")
    c.response.headers.set("Content-Type", "Application/javascript")
    return h(c)
  })
  .start({ port: 3000 })

new Application()
  .file("/", "index.html").file("sw.js", "ServiceWorker.js").start({ port })

console.log(`start at http://localhost:${port}`);
