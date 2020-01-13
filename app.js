
let personInfo = require('./personInfo.json');
// console.log(personInfo)
let personInfoArr = [personInfo];

// output a list of each property of the object and it's value, separated by a colon
personInfoArr.forEach(ele => {
  console.log('name : ', ele.name);
  console.log('pets : ', ele.pets);
  console.log('childern : zach :', ele.children.zach.age)
  console.log('allie :', ele.children.allie.age);
  console.log('job : ', ele.job);
});


// Output a list (array) of all pets that start with the letter 'R'
personInfoArr.filter(ele => {
  let petWithR =[];
  if (ele.pets) {
   petWithR =  ele.pets.filter(pet => (pet.charAt(0))=== 'R');
  }
  console.log(`pets start with R ${petWithR}`);
  return petWithR ;
});


//Create a new instance of "Person" for each child, with the properties "name" and "age"
function Person(name , age) {
  this.name = name,
    this.age = age,
    this.dogYear =age*7 ,
  Person.all.push(this);
}
Person.all = [];

 // adding a new instances of Person 

let zach = new Person(Object.keys(personInfo.children)[0], Object.values(personInfo.children)[0].age);
let allie = new Person(Object.keys(personInfo.children)[1], Object.values(personInfo.children)[1].age);

// console.log(zach);
// console.log(allie);

//Create a method for a Person instance that outputs their age in dog years (their current age * 7)

Person.prototype.dogYearAge = function () {
  let dogYear= this.age*7 ;
   console.log(` ${dogYear} `);
}
// zach.dogYearAge();
// allie.dogYearAge();

// For each Person in the children array, output their name, current age, and age in dog years
console.log(Person.all);



