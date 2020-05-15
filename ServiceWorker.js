// @ts-nocheck
// sw.js
var cacheKey='key'

/*  self : ServiceWorkerGlobalScope 
    installing → installed → activating → activated
    在intall阶段 旧的 Service Webworkers 仍然控制着页面 (不要在此阶段清除缓存)
    在activate阶段 新的 Service Webworkers 控制页面
*/

// 安装
self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(cacheKey).then(cache=>{
      return cache.add('/')
    })
  )
})
// 请求缓存
self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      if(res) return res
      var fetchRequest=e.request.clone()
      return fetch(fetchRequest).then(res=>{
        if(!res||res.status!==200||res.type!=='basic'){
          return res
        }
        rescache=res.clone()
        caches.open(cacheKey).then(cache=>{
          cache.put(e.request,rescache)
        })
      })
    })
  )
})
// 激活
self.addEventListener('active',e=>{
  let deletearr=[cacheKey]
  e.waitUntil(
    caches.keys().then(cachename=>{
      return Promise.all(
        cachename.map(name=>{
          if(deletearr.indexOf(name)!==-1) {
            return caches.delete(name)
          }
        })
      )
    })
  )
})
