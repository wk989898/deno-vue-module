type ObList = {
  event: string,
  cb?: Function
}
class Ob {
  private list: ObList[] = []
  send(event: string) {
    this.list.forEach((e: ObList) => {
      if (e.event === event) {
        e.cb && e.cb()
      }
    })
  }
  on(event: string, cb: Function) {
    this.list.push({ event, cb })
  }
  remove(event:string){
    this.list=this.list.filter((e:ObList)=>{
      return e.event!==event
    })
  }
}
export const ob = new Ob()

/** watchFile */
const path = "./src"
const watcher = Deno.watchFs(path);
var status = false, timer: number

export const watchFile = async () => {
  if (status) return;
  status = true
  for await (const event of watcher) {
    // debounce
    if (!timer) timer = setTimeout(() => {
      ob.send("fileUpdate")
      timer = 0
    }, 500);
  }
}

export const decoder=new TextDecoder()
export const encoder=new TextEncoder()
