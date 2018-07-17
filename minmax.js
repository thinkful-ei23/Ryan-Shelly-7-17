function max(numbers) {
  let x = null;
	let i = 0;
	while(i<numbers.length){
		i++;		
         if(numbers[i]>x){x = numbers[i];}
	}
       return x;
}		

function min(numbers) {
  let x = null;
	let i = 0;
	while(i<numbers.length){
		i++;		
        	if(numbers[i]===0){
			x = numbers[i];
		}
  		if(numbers[i]<x){
			x = numbers[i];
		}
	}
        return x;	
}
let myArray = [1,2,4,3];

console.log(max(myArray));
