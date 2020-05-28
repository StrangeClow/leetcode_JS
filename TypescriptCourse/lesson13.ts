class  Animal{
    private name;
    public age;
    public constructor(name, age) {
        this.name = name
        this.age = age
    }
}


let cat = new Animal('miaomiao',17)


console.log(cat.age)
// console.log(cat.name)     // 报错 私有属性   在子类属性中也是不能访问的  

