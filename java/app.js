
// var i=1;
// while(i<10){
// 	console.log(i);
// 	i++;
// }


// for(var i=0;i<10;i++){
// 	console.log(i);
	
// }


var output=[1];

function fizzBuzz(){
    for(var count=1; count<101; count++){
        if(count%3===0 && count%5===0){
            output.push("fizzbuzz");
        }else if(count%3===0){
            output.push("fizz");
        }else if(count%5===0){
            output.push("buzz")
        }else{
            output.push(count)
        }
    }
    console.log(output);
}

// var l=[1,];
// var m=1;
// m++
// l.push(m);
// console.log(l)