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