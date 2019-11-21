let Duck = {name : 'Дональд', color: 'белый', old: '1'};

Duck.toStr = function toStr(){
	return Duck.name + ', ' + Duck.color + ', ' + Duck.old;	
}
console.log(Duck.toStr());

Duck.say = function say(){
	return result = 'кря кря';	
}

console.log(Duck.toStr());
console.log(Duck.say());

Duck.toStr();
Duck.say();