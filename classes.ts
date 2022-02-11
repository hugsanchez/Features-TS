//Classes -> Blueprint to create an object with some fields (values)
  // and methods (functions) to represent a thing

//Interfaces and Classes -> How we get really strong code reuse in TS


class Vehicle {
  //color: string = 'red'; // This is a field
  //Any instance of Vehicle will have color property and its red

  constructor(public color:string){
   // this.color = color;
    //If we use constructor we dont need to initialize it up top

    //Using Public the first arguement from the instance will use public 
    //to do the this.color = color for us automatically
    //Can use other modifiers on it Private and Protected
  }

  public drive(): void {
    console.log('choo choo');
  }
  protected honk():void {
    console.log('beep');
    //Only accesible in child class or vehicle class not outside of it
  }
}

const vehicle = new Vehicle('orange');
//If we want to pass in parameters we need a constructor function
vehicle.drive();
vehicle.honk(); //Error because it is protected
console.log(vehicle.color);


class Car extends Vehicle {
//take all methods in Vehicle and paste it into Car

  constructor(public wheels: number, color:string) {
    //No public on color to NOT create a new field for color
    super(color);
    //super references the constructor function in the parent class
  }

  private drive2():void {
    //Can never call this method outside of this class
    //Redefined from public to private causes error
    //private not for security but to restrict usage of method by other developers
    //who might break our method or class
    console.log('neyun')
  }
  //overridden methon on child class which is Car
  //Vehicle is the parent class

  startDrive():void {
    this.drive();
    this.honk()
    //honk only accessible within Vehicle 
  }
}

const car = new Car(4, 'green');
//Because Car extends Vehicle we must satisfy the properties of Vehicle
//But Car does not have a constructor?
//So that means Car uses the constructor in Parent class aka Vehicle

car.drive()
car.startDrive();
car.honk()



//MODIFIERS -> keywords to place on properties or methods on class
//Goal of modifiers is to restrict access to different functions or different variables
//the default value is public

//PUBLIC -> This method can be called any where any time

//PRIVATE -> This method can only be called by other methods in this class

//PROTECTED -> This method can be called by other methods in this class 
  //or by other methods in child classes
