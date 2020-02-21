/**
 *   es6 类
 *
 * @class point
 */
class point  {
    //  构造函数  super方法 
    constructor(x,y) {
          this.x = x;
          this.y =y;
    }
    // 静态方法  
    static distance (a,b) {
       const dx = a.x - b.y;
       const dy = a.y - b.y;

       return Math.max(dx,dy);
    }
}

 
   // 类的实例 new
const p1 = new point(5,5);
const p2 = new point(10,10);

console.log(point.distance(p1,p2));

/**  
 *   extend static 
 * 
 * new Set 交集
 * 
 * 
 */