// 数据结构
 // 栈是一种先进后出原则的有序结合 新添加的或待删除的元素都将保存在栈的末尾，称作栈顶，另一端叫栈低，新元素靠近栈顶

// 队列是一种先进先出的数据结构 队列在尾部添加新元素，并从头部移除元素，最新添加的元素必须排在队列的末尾

// 数组 相同数据类型的元素按一定的顺序组成的集合

/**
* 冒泡排序：比较任何两个相邻的项，如果第一个比第二个大，则交换它们；元素项向上移动至正确的顺序，好似气泡上升至表面一般。
*  选择排序：每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，以此循环，直至排序完毕。
 * 插入排序：将一个数据插入到已经排好序的有序数据中，从而得到一个新的、个数加一的有序数据，此算法适用于少量数据的排序，时间复杂度为 O(n^2)。
  *归并排序：将原始序列切分成较小的序列，只到每个小序列无法再切分，然后执行合并，即将小序列归并成大的序列，合并过程进行比较排序，只到最后只有一个排序完毕的大序列，时间复杂度为 O(n log n)。
  *快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行上述递归排序，以此达到整个数据变成有序序列，时间复杂度为 O(n log n)。
*
*
*/

let a = [1,2,3,4,5];
let b= [...a];
console.log(b);

function add(...arr) {
  let total = arr.reduce((prev,cur,index,arrs)=> {
    console.log(prev,cur,index);
    prev + cur
  })
  console.log(total);
}
add(1,2,3,45,6,88,88);


function book(title,author,year) {
 this.title = title;
 this.author = author;
 this.year = year;
}

const book1 = new book('语文书','zyx','2018');
const book2 = new book('数学书','x大法','248');
console.log(book1,book2);


// vue 双向绑定的原理    订阅者-发布者模式
/**
 * @param {number[]} nums
 * @return 
 */
var moveZeroes = function(nums) {
  for(var i=0,m=0,n=nums.length;i<n;i++){
      if(nums[m] === 0){
          nums.splice(m,1);
          nums.push(0);
      }else{
          m++;
      }
  }
};

//数组元素的删除 以及更新 splcie 根据插入的数据不同 以及个数 俩判断不同

// 小程序  javascript   vue系列  react系列

// reduce reduceRight   增删改查