/**
 *
 *
 * @param {*} arr
 * @param {*} callback
 */
const forEachRight = (arr, callback) => 
   arr.slice(0)
   .reverse()
   .forEach(callback)

