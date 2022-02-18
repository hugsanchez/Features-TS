//Functions that can be used to modify/change/
  //anything different properties/methods in the class

//Not the same as JS decorators

//Used inside/on classes only

//Understanding the order in which decorators are ran are the
  //key to understanding them

//Experimental

@classDecorator
//Coordinate decorators within class definitions
class Boat {
  @testDecorator
  color: string = 'red';
  //instance of property
  //property definition is put into constructor function 
  //When we create a class it also creates a constructor function and
  //   defines a prototype on that constructor function
  //The prototype of class boat will contain all the functions defined within the class

  @testDecorator
  get formattedColor():string {
    //accessor which is a getter
    return `This boats color is ${this.color}`;
  }

  @logError('Boat sunk factory')
  //All it does is loop through all the decorators within the array
  //and it calls each with the prototype the key and prototype descriptor
  pilot(@parameterDecorator speed:string, @parameterDecorator generateWake:boolean):void {
    //method as well

    if(speed === 'fast'){
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat){
  //typeof Boat refers to the constructor function
  console.log(constructor); 
}

function parameterDecorator(target:any, key:string, index:number){
  console.log(key,index);
  //index refers to the parameter in the index its located within ( of method)
}

function testDecorator(target:any, key:string){
  //Prototype only stores method definitions
  //primary types are defined in constructor function
  //Decorator will never access properties from an instance
  //Cannot get direct access to properties

  console.log('target',target); //is the prototype of the class
  console.log('key',key); // the key of where we applied @decorator right underneath it
}

//Decorator factory -> essentially a decorator that returns a function
//Used when we worry about passing in custom arguements
function logError(errorMessage:string){
  //Normal function that returns our decorator
  return function(target: any, key:string, desc: PropertyDescriptor): void{
    
    
    //Property descriptor is an object that has some config options around a property
      //defined on an object
      //Part of ES5 JS not a TS feature

    const method = desc.value;

    desc.value = function() {
      try{
        method();
      } catch(error){
        console.log(errorMessage)
      }
    }
  }
}

//new Boat().pilot();




//WHY DO WE CARE ABOUT USING DECORATORS?
