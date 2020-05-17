import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.51.0/http/http_status.ts";
import { Application } from "https://deno.land/x/abc/mod.ts";


const { test ,readFile} = Deno
const app = new Application()
const port =8081
const host=`http://localhost`
const decoder=new TextDecoder();

test('vue', async () => {
  app.static("","vue")
  .start({port})

  let res=await fetch(`${host}:${port}/App.vue`);
  assertEquals(
    res.status,Status.OK
  )
  assertEquals(
    await res.text(),
    decoder.decode(await readFile("./vue/App.vue"))
  )
  await app.close()
})

