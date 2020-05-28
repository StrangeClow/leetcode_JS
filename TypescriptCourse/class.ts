interface FoodInterface {
    type: string,
    name: string
}


class FoodClass implements FoodInterface {
    public type: string
    public name: string
}





class A {
    protected name: string
}
interface B extends A {

}
class C extends A implements B {
    public name: string
}