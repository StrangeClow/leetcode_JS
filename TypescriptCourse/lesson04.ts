//  对象的类型  ---接口 

//  只读属性 希望在创建对象的时候 有一些对象中的字段只能在创建的时候被赋值  readonly


interface Person {
  readonly id: number,
  name: string,
  age: number
}

let tom: Person = {
    id: 999,
    name: 'hhh',
    age: 19
}

// tom.id = 00  //     此时就会报错 