class Person {                  //class 'Person'
    constructor(name) {         // class 'Person', which has a constructor that takes a 'name' parameter 
      this.name = name;         //the 'name' property of the class instance
    }
  }
  
  const member = new Person('John'); //new class of 'Person'- 'John'
  console.log(typeof member);       //The output of this code will be 'object' because member is an object of type Person, created using the Person constructor.
