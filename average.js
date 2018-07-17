function avg(x){
    let sum = 0;
    x.forEach(function(element){
	sum += element;
    });
    return sum/x.length;
}

myArray = [1,2,3,4,20,8];
console.log(avg(myArray));



