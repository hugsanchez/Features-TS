class ArrayOfNums {
  constructor(public collection: number[]){}

  get(index:number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]){}

  get(index:number):string{
    return this.collection[index];
  }
}

//Condensed into one via Generics

class ArrayOfAnything<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a','b','c']);
//Type inference played a part here cause we didn't put <type>
  //When we created a new instance we passed in an array of strings TS knows that
  //Shows up as arguement "collection" so TS looks at that as a refernce and
  //assumes cause we put an array of strings <T> must be type string


//Example of Generics with Functions

function printStrs(arr:string[]): void{
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

function printNums(arr:number[]):void{
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

//Notice code duplication between the two use Generics to concise

function printAnything<T>(arr:T[]):void{
  //extra arguement for generic type so its more reusable
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

printAnything<string>(['a','b','c']);
//No square brackets [] cause that be implying nested array 
//remember whatever we put in the <> refers to the type its gonna be
//replaces T everywhere T is found

//** ADD IN TYPE ANNOTATION EVEN THO WE KNOW TYPE INFERENCE HELPS */
//** HELPS US CATCH ERRORS BETTER */


//Array of objects with some print methods
//GENERIC CONSTRAINTS

class Car {
  print(){
    console.log('I am car')
  }
}

class House {
  print(){
    console.log('I am a house')
  }
}

//Built constraint with interface
interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr:T[]):void{
  //Added constraint with extends

  for(let i = 0; i < arr.length; i++){
    arr[i].print();
    //print does NOT exist on type T
    //TS saying hey you're gonna say we are gonna dynamically specify type T
    // But NO gurantee that this type T is gonna have a print method avaliable
  }
}

printHouseOrCars([1,2,3]);
//This would cause an error cause this array does NOT have a print method
//and our function would not know that until we tried calling it
//Solution: Use Generic Constraint
  //Tell TS we promise there will be a print method avaliable
  //will always feed you with a type that has a print method
  //Now it does NOT satisfy Printable so it limits what we can pass in

printHouseOrCars<House>([new House(), new House()]);

printHouseOrCars<Car>([new Car(), new Car()]);