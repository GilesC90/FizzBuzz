

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    }
    if(i % 5 === 0){
        console.log("Buzz")
    }
    if( i % 15 === 0){
        console.log("FizzBuzz")
    }
    else{
        console.log(i)
    }
}