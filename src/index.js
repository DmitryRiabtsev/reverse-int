module.exports = function reverse (n) {
	return Number(n.toString().split('').filter((item,index)=>{
		if(item != '-') return item;
		if(index == n.length && item == '0') delete item;
	}).reverse().join(''));
}
