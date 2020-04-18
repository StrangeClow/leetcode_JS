/**
 *   一周中的第几天 
 * 
 * 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
 * 输入为三个整数：day、month 和 year，分别表示日、月、年。
 * 您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

 *
 * @param {*} day
 * @param {*} month
 * @param {*} year
 * @returns
 */
const dayOfTheWeek = function(day, month, year) {     // Date()  api
    
    let date = new Date(`${year}-${month}-${day}`)

    // return date.getDay()    // 一个星期的第几天  为数字 

    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return weekdays[date.getDay()]
}


console.log(dayOfTheWeek(17,04,2020));