/**
 *   比较字符串最小字母出现频次
 *    
 *   定义一个函数，传入非空字符串s，计算s中(按字典序比较)最小字母出现的频次
 * 
 * 例如，若 s = "dcce"，那么 f(s) = 2，因为最小的字母是 "c"，它出现了 2 次。
 * 
 * 现在，给你两个字符串数组待查表 queries 和词汇表 words，请你返回一个整数数组 answer 作为答案，
 * 其中每个 answer[i] 是满足 f(queries[i]) < f(W) 的词的数目，W 是词汇表 words 中的词。
 *
 * @param {*} queries 字符串数组待查表
 * @param {*} words 词汇表
 */
const numSmallerByFrequency = function(queries, words) {
 
    let res = []
    let tempMap = new Map()

    
}