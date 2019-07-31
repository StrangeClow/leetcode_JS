
/**
 *  题意： 给定包含多个点的集合，从集合中去三个点组成三角形，使其面积最大
 * 
 * 三角子那个求面积公式： 
 * 
 *
 * @param {*} points
 */
var largestAngelArea = function(points) {
    var max = 0
    for (const x of points) {
        for (const y of points) {
            for (const z of points) {
                // 数学公式  三角函数
                max = Math.max(max, 0.5 * Math.abs(x[0]*y[1] + y[0]*z[1] + z[0]*x[1] - x[0]*z[1] - y[0]*x[1] - z[0]*y[1]))
            }
        }
    }
}