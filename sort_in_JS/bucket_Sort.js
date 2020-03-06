/**
 *   桶排序
 * 
 *     桶排序是计数排序的升级版，利用了分治思想  
 * 
 *   思路解析：  
 *       1. 将要排序的数据分到有限数量的有限的几个桶里
 *       2. 每个桶里的数据在单独进行排序
 *       3. 桶内排序完毕后，再把桶里的数据按照顺序依次取出
 * 
 *    最快： 当输入的数据可以均匀的分配到每一个桶中
 *    最慢： 当输入的数据被分配到同一个桶中
 *
 * @param {*} arr  需要排序的数据 
 * @param {*} bucketSize 桶的数量(即分组的数量)
 */

function bucket_sort(arr, bucketSize) {
    
    // 判断边界值情况
    if(arr.length <= 1) {
       return arr
    }

    

    const buckets = Array.from({length: k}, ()=> [])
}