/**
 *   是否是有效的json
 *
 * @param {*} str
 * @returns
 */
const isValidJSON = str => {
    console.log('str',str)
    debugger
    try { 
       JSON.parse(str)
       return true
    } catch(e) {
        return false
    }
}

console.log(isValidJSON('true'));