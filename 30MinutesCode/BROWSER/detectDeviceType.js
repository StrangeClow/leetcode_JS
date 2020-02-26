/**
 *    检测设备的类型  
 *      利用正则匹配  
 * 
 *        navigator.userAgent 浏览器的类型  
 *
 */
const detectDeviceType = () => {

  // 设备类型 
  let userAgent =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    
   return userAgent.test(navigator.userAgent)
    
      ? 'Mobile'
    
      : 'Desktop'
}





console.log(detectDeviceType());