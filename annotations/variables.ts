//Scenarios to USE TYPE ANNOTATIONS

//1.) When a function returns the 'any' type and we need to clarify the value
const json = '{"x":10, "y":20}';
const coordinates = JSON. parse(json);
const coordinatesTS: { x:number; y: number} = JSON. parse(json);

//Right now TS inferred coordinates as type any
//The reason being that TS has no idea what is going to be returned from JSON.parse()

//AVOID VARIABLE WITH 'ANY' AT ALL COSTS
  //TS canNOT do any error checking around this value

console.log(coordinates); //{x:10, y:20}
coordinates.fosjngnsogn // -> TS NO help in telling me this does NOT exist for coordinates
coordinatesTS.fosjngnsogn

//2.) When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord; //declared here
let foundWordTS: boolean; //Type inference wont work here

for(let i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundWord = true; //Initialized here
    foundWordTS = true;
  }
}

//3.) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // different choices of media (image, blog, video)

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i]; //Based on Type inference TS thinks this variable should only be of type boolean
  }
}





let apples: number  = 5;
//colon (:) and type after it is the type annotation
//This means apples can only ever be a number
const apple:number = true; // -> gives me error

apples = 'string';
apples = 10;


//Can reassign to a different number but NOT to a different type

//Annotations can use any of the Primitive Types (number, boolean, void, undefined, string
            //symbol, null)
            //any of the Object Types (functions, arrays, classes, objects)


let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch:null = null;
let nothing:undefined = undefined;

//Built in Objects

let now:Date = new Date();

//Array Annotation
let colors:string[] = ['red','green','blue'];
//We're going to assign type array that contains strings

let myNumbers:number[] = [1,2,3];
//type of value I want in the array

let truths: boolean[] = [true,true,false];

//Classes
class Car {

}

let car: Car = new Car();
//referring to the type class car, variable car is only going to refere to an instance of Car


//Object Literal
let point: { x:number; y:number } = {
  //semicolon (;) to seperate different types
  //key: value are both checked to match my annotation
  x:10,
  A:20,
  y:20
};


//Functions
const logNumber: (i:number) => void = (i:number) => {
  //different arguements its going to take and different arguements its going to return
  console.log(i);
}

 
