const listData = [
    { firstName: "Rick", lastName: "Sanchez", size: 18 },
    { firstName: "Morty", lastName: "Smith", size: 6 },
    { firstName: "Jerry", lastName: "Smith", size: 3 },
    { firstName: "Beth", lastName: "Smith", size: 0 },
    { firstName: "Summer", lastName: "Smith", size: 0 },
    { firstName: "Rick", lastName: "Sanchez", size: 18 },
    { firstName: "Morty", lastName: "Smith", size: 6 },
  ];

  

  const sortClass = (sortData) => {
    const groupBy = (array, f) => {
      let groups = {};
      array.forEach((o) => {
        let group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return Object.keys(groups).map((group) => {
        return groups[group];
      });
    };
    const sorted = groupBy(sortData, (item) => {
      return item.firstName; // 返回需要分组的对象
    });
    return sorted;
  };
  
  // 分组前
  console.log('分组前--',listData);
  // 分组后
  console.log('分组后-',sortClass(listData));
  
  const dataList = [
	{
		name: 'Apple',
		type: 'Fruit',
		price: '￥1.5'
	},
	{
		name: 'Banana',
		type: 'Fruit',
		price: '￥3.5'
	},
	{
		name: 'Grape',
		type: 'Fruit',
		price: '￥2.5'
	},
	{
		name: 'Cabbage',
		type: 'Vegetable',
		price: '￥2.5'
	},
	{
		name: 'Tomoto',
		type: 'Vegetable',
		price: '￥5.5'
	}
]
// 需要根据 type为Fruit 和 Type为Vegetable 的两种类型来分组，也就是说将同类的放到一组中，
// 当然 type还可以是其他比如：Food,那么如何实现？


  function handleSameTypeGroup(dataList, name = 'type') {

	let list = [] // 定义空数据用于存放同类type数据
	let obj = {} // 定义空对象用于获取同类type数据
	
	if (dataList.length > 0) {
		for (let item of dataList) {
			if (obj['group_' + item.type]) {
				obj['group_' + item.type].push(item)
			} else {
				obj['group_' + item.type] = [item]
			}
		}
		for (let key in obj) {
			list.push({
				[name]: obj[key]
			})
		}
	}
	return list
}
// 执行函数

console.log('分组--',handleSameTypeGroup(dataList))



const formateArrData1 = (initialArr, name, newArr) => {
    // newArr是承接分类的新数组，整个initialArr处理完成之后，会根据不同的name生成一个二维数组
    // 判定传参是否符合规则
    if (!(initialArr instanceof Array) || !(newArr instanceof Array)) {
      return '请传入正确格式的数组'
    }
    if (!name) {
      return '请传入对象属性'
    }
    // 每一个类型的单独数组，注意此处不能return出每个alikeArr，
    // 因为递归的返回值只返回最后一次的值
    let alikeArr = []
    let propertyName = ''
    if (initialArr.length > 0) {
      propertyName = initialArr[0][`${name}`]
      let tempArr = []
      // 将拥有共同propertyName属性的对象放到此次遍历的alikeArr中，
      // 将其他的对象放入到tempArr中，等待下次遍历
      initialArr.forEach((val, key) => {
        if (val[`${name}`] === propertyName) {
          alikeArr.push(val)
        } else {
          tempArr.push(val)
        }
      })
      newArr.push(alikeArr)
      initialArr = tempArr
      return formateArrData1(initialArr, name, newArr)
    } else {
      return newArr
    }
  }
let arrs = []
  console.log('333--33',formateArrData1(dataList,'type',arrs))

  let a = [
      {
          id:'1',
          costCode:'7',
          costName:'押车补贴',
          workNumber:'GD20220310-07'
      },
      {
          id:'2',
          costCode:'9',
          costName:'押车补贴2',
          workNumber:'GD20220310-09'
      },
      {
          id:'3',
          costCode:'12',
          costName:'押车补贴3',
          workNumber:'GD20220310-12'
      },
      {
          id:'4',
          costCode:'7',
          costName:'押车补贴4',
          workNumber:'GD20220310-07'
      },
      {
          id:'5',
          costCode:'9',
          costName:'押车补贴9',
          workNumber:'GD20220310-09'
      },
  ]
let b = [
    { date: '2018-01-06',SW: '90.95', LL: '136', XXSW: '80.22',CKLL: '500' },
     { date: '2018-01-06', SW: '164.95', LL: '137', XXSW: '99.22', CKLL: '93' },
     { date: '2018-01-07', SW: '176.95', LL: '236', XXSW: '99.22', CKLL: '93' },
     { date: '2018-01-07', SW: '178.95', LL: '236', XXSW: '99.22', CKLL: '93' },
     { date: '2018-01-07', SW: '182.95', LL: '236', XXSW: '99.22', CKLL: '93' },
     { date: '2018-01-08', SW: '187.95', LL: '366', XXSW: '99.22', CKLL: '93' },
     { date: '2018-01-09', SW: '197.95', LL: '466', XXSW: '99.22', CKLL: '93' }

]
const format = function(arr, property){
    let dataArr = []
    arr.map(mapItem => {
      if (dataArr.length == 0) {
          dataArr.push({ date: mapItem.date, List: [mapItem] })
      } else {
         let res = dataArr.some(item=> {//判断相同日期，有就添加到当前项
          if (item.date == mapItem.date) {
            item.List.push(mapItem)
            return true
          }
        })
        if (!res) {//如果没找相同日期添加一个新对象
          dataArr.push({ date: mapItem.date, List: [mapItem] })
        }
      }
    })
    return dataArr
}

console.log('cost-code--',format(a,'costCode'))
console.log('date--',format(b,'date'))

const arrGroup = function (arr, fn) {
    const obj = {};
    arr.forEach(item => {
        const key = JSON.stringify(fn(item));
        obj[key] = obj[key] || [];
        obj[key].push(item)
    });
    return Object.keys(obj).map(k => {
        return obj[k];
    })
    }

    console.log('arrgroup--',arrGroup(a,(item) => item.costCode))

    const aa = function(dataTemp){
        let bb= []
        for (let key in dataTemp ) {
            let obj = {}
            obj.date = key
            obj.list = dataTemp[key]
            bb.push(obj)
          }
          return bb
    }

    let sourceData=[
        {date:"2021-01-01",name:"LuckyJin"},
        {date:"2021-01-01",name:"JinFed"},
        {date:"2021-02-01",name:"olivivian"}
    ]
      console.log('格式二',aa(sourceData));