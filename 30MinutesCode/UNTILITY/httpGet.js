/**
 *  向给定url发送请求  
 *
 * @param {*} url
 * @param {*} callback
 * @param {*} [err=console.error]
 */
const httpGet = function(url, callback, err = console.error) {   // 默认参数
 
 // new一个XML实例
  const request = new XMLHttpRequest()
  
  // 1.  xhr.open()
  request.open('GET', url, true)
  
  // 成功回调 
  request.onload = function() {
      return callback(request.responseText)
  }
  // 程序报错
  request.onerror = function() {
      return err(request)
  }
  // 发送请求
  request.send()
}



//   new XMLHttpRequest()

//   open()

//  onLoad()

//  send()