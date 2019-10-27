/**
 *    检测设备的类型  
 *      利用正则匹配  
 * 
 *     浏览器的类型  navigator.userAgent
 *
 */
const detectDeviceType = ()=> {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
}