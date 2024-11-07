//variable scoping
// in blocks code we called it local scope and outer from block is global scope.
//but the behavior of "var" is very abnormal in this pattern thats why most programer
//igoner it
// var a = 10;
// let b = 20;
// const c = 30;

// if(true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
    
// }
// console.log(a)
// console.log(b)
// console.log(c)

// let d = 300;
// if(true){
//     var a = 10;
//     let d = 20;
//     // const c = 30;
//     console.log("inner:", d);
    
// }
// console.log(a)
// console.log(d)
// console.log(c)











//closure function
// function clickHandLer(color){
//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
// }
// document.getElementById("orange").onclick = clickHandLer("orange")
// document.getElementById("green").onclick = clickHandLer("green")
// document.getElementById("#313131").onclick = clickHandLer("Black")


//Templete litrals
// let superHeros = ["spiderman", "superman", "thor", "batman", "ironman",]
// console.log(superHeros)
// console.log(superHeros[2])
// console.log(`we have ${2+3} supr heros`)

//Destructuring
// let arr = [3,5,6,7,8,9,14]
// // let [a,b,c,d, ...rest] = arr
// let [a, , , ...rest] = arr
// console.log(a,  ...rest)


// const obj = {a: 1, b : 2}
// const {a,b} = obj;
// console.log(a,b)




//Default peerameters

// function talk(msg='hi'){
//     console.log(msg)
// }
// talk("hello");

//Rest parameters
// function sum(...args){
//     let result = 0;
//     for (let i= 0; i<args.length; i++){
//         result  += args[i];
//     }
//     console.log(result)
// }
// sum(2,3, 23,5)


//spread oprators
//we spread one array in another one
// let array1 = ["pakistan", "india", "bangladesh"]
// let array2 = ["srilanka", "butan", "nepal"]
// let array3 = ["afghanistan", array1, "china"]
// let array4 = [...array1, ...array2]
// console.log(array3)

//arrow function , this
// function chai(){
//     console.log(this);

// }
// chai();
// function chai(){
//     let userName = "moeed";
//     console.log(this.userName);

// }
// chai();
// console.log(this)


// const chai = function(){
//     let userName = "moeed"
//     console.log(this.userName);
// }
// chai()

//arrow

// const chai = () => {
//     let userName = "moeed"
//     console.log(this.userName);
// }
// chai()

// const addTwo = (num1,num2) => {
//  return num1 + num2
// }
// console.log(addTwo(3,4))


// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(5,10))

//peranthesis we use then return is not necessary or inavlid in arrow function
//curely braces are used when and return are also essential in the code after curely braces
//in arrow function.
//for creation of object we mostly used curely braces but in react we use perentheis very 
//much.