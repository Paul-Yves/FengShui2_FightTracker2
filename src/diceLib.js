export function d6() {
    return Math.floor(6*Math.random())+1; 
}
export function d6Explode(){
	var res = d6();
	while(res % 6 == 0){
		res += d6();
	}
	return res;
}
export function roll(actionValue){
	var pos = d6Explode();
	var neg = d6Explode();
	var res = pos - neg;
	if(actionValue!=undefined){
		res += actionValue;
	}
	return res;
}
