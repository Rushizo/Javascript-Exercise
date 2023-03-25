function isAdult(person) {
  let age;
  [id, firstName, lastName, age] = [1, "Mario", "Rossi", 25]
  return age >= 18; 
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));