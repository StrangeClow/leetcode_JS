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