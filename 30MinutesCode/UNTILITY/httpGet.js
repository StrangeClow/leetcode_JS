/**
 *  向给定url发送请求  
 *
 * @param {*} url
 * @param {*} callback
 * @param {*} [err=console.error]
 */
const httpGet = function(url, callback, err = console.error) {
 
 // new一个实例
  const request = new XMLHttpRequest()

  request.open('GET', url, true)

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
