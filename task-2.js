let string_1 = [1, 5, 12, 4, 3];
let string_2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let string_3 = [3, 10, 17];

function average(string){
	let k = 0;
	for(let i = 0; i < string.length; i++){
		k += string[i];
	}
	return k / string.length;
}
console.log('string_1: ', average(string_1));
console.log('string_2: ', average(string_2));
console.log('string_3: ', average(string_3));
