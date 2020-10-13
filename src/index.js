module.exports = function reverse (n) {
	let str = String(n);
	let strArr = str.split('');
	for(let i =0; i<strArr.length; i++){
		if(strArr[i]=='-'){
			strArr.splice(0,1);
		}
		if(strArr[strArr.length-1]=='0'){
			strArr.splice(strArr.length-1,strArr.length-1);
		}
	}
return parseInt(strArr.reverse().join(''));
  
}
