//ES6
//Rest and Spread Operator

//Exmple Rest

function addNumber(a,b,c,...other){
    console.log(other[0])
   return a+b+c;

}
const res = addNumber(2,5,6,8,9)
console.log(res)

// Spread 
var names = ["ashwin" , "dishant" , "prabhat","aryan"]
function getNames(name1,name2,name3){
   console.log(name1,name2,name3)
}
// getNames(names[0],names[1],names[2])
getNames(...names) //spread operator ...
getNames(names)


//object ke sath -> Rest
var students = {
   name:"ajay",
   age:"28",
   hobbies:["cricket","singing"] 
}
// const age = students.age;

const {...rest} = students; //array destructuring
console.log(rest)
// console.log(age)
// console.log(name)
// console.log(hobbies)

//object ke sath -> spread

var newStudent={
   ...students,
   age:"30"
}
console.log(newStudent)
