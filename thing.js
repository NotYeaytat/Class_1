/*const numbers = [2,3,4,5,6];


numbers.push(5);
numbers.pop();
console.log(numbers);
const answer = array_.filter((numbers)=>{
return number%2===0

})
console.log(answer);*/
const info  = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
              .then(response)=>;
                console.log(response.json())
const promise_ = new promise ((resolve,reject)=>{

    const error = false; 
    if(!error){
        resolve("hello")
    }
    else{
        reject("bye bye")
    }
});

console.log(promise_)
promise_.then ((value)=>{
    console.log(value);
}).catch(err=>console,log(err));
