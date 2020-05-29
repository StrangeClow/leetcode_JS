###   http缓存  

       强制缓存
            服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。
            强制缓存若生效，不需要和服务器发生交互。
            cache-control（http1.1）  expires（http1.0老版本 现阶段基本忽略）
                
                private、 客户端可以缓存
                public、  客户端和代理服务器都可以缓存
                no-cache、 需要使用对比缓存来验证缓存数据 
                max-age，  缓存的内容将在xxx后失效
                no-store   所有缓存都不会触发
            


       对比缓存
           将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。
           对比缓存不管是否生效，都需要与服务端交互
           Last-Modified （服务器在响应请求时，告诉浏览器最后的修改时间）
           If-Modified-Since （再次请求服务器时，通过此字段通知服务器上次请求时，服务器返回的资源最后的修改时间）
           Etag/ If-None-Match （优先级高于Last-Modifed / If-Modifed-Since）服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识
    
 