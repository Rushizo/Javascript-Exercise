class Person {
  firstName = "";
  lastName = "";
  age = 0;
  
  constructor (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  } 
  
  //FIRST NAME
  get firstName(){
    return this.firstName
  }

  set firstName(myFirstName){                
    this.firstName = myFirstName;
  }


  //LAST NAME
  get lastname(){
    return this.lastName
  }

  set lastName(myLastName){
    this.lastName = myLastName;
  }

  get age(){
    return this.age;
  }

  set age(myAge){
    this.age = myAge;
  }

  get fullName(){
    return ` ${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);