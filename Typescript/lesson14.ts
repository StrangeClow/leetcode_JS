/**
 *   接口
 * 
 * 接口用于对对象形状就行描述  
 * 
 * 对类的一部分行为进行抽象 
 *
 * @interface Alarm
 */



interface Alarm {
    alert(): void;
}


class door{

}


class SecurityDoor extends door implements Alarm{
   alert() {
       console.log('alert')
   }
}




class car implements door {
    alert() {
        console.log('this is a car')
    }
}





/**
 *  一个类可以实现多个接口 
 *
 * @interface eat
 */
interface eat {
  eat(): void;
}

interface drink{
    drink(): void;
}



class person implements eat, drink{
    eat() {
        console.log('eat food')
    }

    drink() {
        console.log('drink milk')
    }
}