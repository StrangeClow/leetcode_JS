/**
 *  希尔排序
 *    希尔排序是插入排序更高效的一种手段，它与插入排序不同的一点是，它会优先比较距离比较远的元素，希尔排序的核心在于间隔序列的设定
 *    既可以提前设定好间隔序列，也可以动态的定义间隔序列，
 *     希尔排序又称为"缩小增量排序"  
 *     
 *     分组 间隔分组比较 最后两两比较 类似冒泡排序  将数组进行分割 但比冒泡多了一层增量的概念     希尔排序的概念以及理解
 * 
 *   希尔排序的基本思想是 先将整个待排序的记录序列分割成为若干个子序列并分别并行排序 带整个序列中记录基本有序是， 在对全体记录依次进行直接插入排序
 */
