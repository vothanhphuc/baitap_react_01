// @flow
Array.prototype.myFind = function (cb) {
	for (let i = 0; i < this.length; i++) {
		let number = this[i];
		if (cb(number)) {
			return number;
		}
	}
};
function cb(n) {
	return n < 5;
}

const numberList = [1, 2, 5, 8];
// console.log(numberList.myFind(cb));

Array.prototype.myFindIndex = function (tb) {
	for (let i = 0; i < this.length; i++) {
		let number = this[i];
		if (tb(number)) {
			return i;
		}
	}
	return -1;
};
function tb(n) {
	return n < 2;
}
// console.log(numberList.myFindIndex(tb));

Array.prototype.myMap = function (ab) {
	let arrayRong = [];
	for (let i = 0; i < this.length; i++) {
		arrayRong.push(ab(this[i], i, this));
	}
	return arrayRong;
};
let arr = [1, 2, 3, 4];
function cb(value, index, arr) {
	return {
		value: value * 2,
		index: index,
		array: arr
	};
}
console.log(arr.myMap(cb));

Array.prototype.myFilter = function (bb) {
	let arrRong = [];
	for (let i = 0; i < this.length; i++) {
		if (bb(this[i]) === true) {
			arrRong.push(this[i]);
		}
	}
	return arrRong;
};
function bb(value) {
	if (value > 2) return true;
	return false;
}
console.log(arr.myFilter(bb));

const array01 = [1, 2, 3, 9, 5];
Array.prototype.mySome = function (cc) {
	for (let i = 0; i < this.length; i++) {
		if (cc(this[i]) === true) {
			return true;
		}
	}
	return false;
};
function cc(value) {
	if (value % 2 === 0) return true;
	return false;
}
console.log(array01.mySome(cc));
Array.prototype.myEvery = function (aa) {
	for (let i = 0; i < this.length; i++) {
		if (aa(this[i]) === false) {
			return false;
		}
	}
	return true;
};
function aa(value) {
	if (value < 6) return true;
	return false;
}
console.log(array01.myEvery(aa));
