import { Application } from "https://deno.land/x/abc/mod.ts";
import { acceptWebSocket } from "https://deno.land/std@0.51.0/ws/mod.ts";
import { watchFile, ob } from "./utils.ts"

const app = new Application()
app
  .static('', "src", (h: any) => (c: any) => {
    watchFile()
    c.response.headers.set("Access-Control-Allow-Origin", "*")
    c.response.headers.set("Content-Type", "Application/javascript")
    return h(c)
  })
  .start({ port: 3000 })

new Application()
  .file("/", "./index.html")
  .file("/module.js", "./module.js")
  // .file("sw.js", "ServiceWorker.js")

  .get('/ws', async (c: any) => {
    const { conn, headers, r: bufReader, w: bufWriter } = c.request;
    const ws = await acceptWebSocket({
      conn,
      headers,
      bufReader,
      bufWriter,
    });
    for await (const e of ws) {
      /**
       * issue solved
       * https://stackoverflow.com/questions/61833945/question-about-websocket-and-loction-replace/61834079?noredirect=1#comment109369427_61834079
       */
      if (e === 'close') {
        ob.remove("fileUpdate")
        continue
      }
      ob.on("fileUpdate", () => {
        if (!ws.isClosed)
          ws.send("fileUpdate")
      })
    }
  })
  .start({ port: 8080 })

console.log(`start at http://localhost:8080`);

try {
  Deno.run({
    cmd: ["explorer", "http://localhost:8080"]
  })
} catch{ }

