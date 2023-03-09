const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};


const person2 = Object.assign({}, person1);
person2.firstName = "Simon";

/* becouse in the previus methods we copy the two object so changing one will change the other too,
like this, instead, we can clone the object and create 2 different object */


// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
