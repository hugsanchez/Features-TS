//Like function arguements but for types in class/function definitions

//Allows us to define the type of a property/arguement/return value
  //at a future point

//Used heavily when writing reusable code

//EXAMPLE

//NOTHING TO DO WITH GENERICS
const addOne = (a:number) => {
  return a + 1;
};

const addTwo = (a:number) => {
  return a + 2;
};

const addThree = (a:number) => {
  return a + 3;
};

//Duplicating function and changing hardcode part for add

const add = (a:number, b:number) => {
  return a + b;
};

//Now more reusable for different additions we wanna make


class HoldNumber {
  data:number;
}

class HoldString {
  data:string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'SILLY';

//Rather then defining these seperate classes we can instead use a generic
  //Generic will customize the definition of the class like add function with A + B


class HoldAnything<T> {
  //arguement like a function parameter to be more reuseable
  //By convention TypeOfDate is -> T Generic Type
  data: T;
}

const holdNumberG = new HoldAnything<number>();
//my type is defined at the creation of instance 'Parameter placed'
  //To customize how the class works
  holdNumberG.data = 123;

const holdStringG = new HoldAnything<string>();
holdStringG.data = 'Generics!';
