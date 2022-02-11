//Interfaces and Classes => Is how we get really strong code reuse in TS

//Interfaces -> Creates a new type describing the property names and value
  //types of an Object
  //Custom type

  interface Reportable {
    //using generic name for different properties it might have
    // name: string;
    // year: number;
    // today: Date;
    // broken: boolean;
    summary(): string;
    //Object method annotation
  }
  //Only question gets asked is if it has All the interface properties it does NOT
    //care if old civic has all the extra properties with it

  const oldCivic = {
    name: 'civiv',
    year:2000,
    broken: true,
    today: new Date(),
    summary(): string {
      return `Name:${this.name}`
    }
  };

  const printVehicle = (vehicle: { name: string; year: number; broken:boolean }): void => {
    //long as type annotation, duplicate for every vehicle
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);

  }
  const printSummaryTS = (item:Reportable):void => {
    console.log(item.summary());
  }

  printSummaryTS(oldCivic);
  //oldCivic meets the parameters (has all the properties of Vehicle 
  //    and matches the type associated to that property) for type Vehicle


  const drink = {
    color:'brown',
    carbonated: 'true',
    sugar: 40,
    summary(): string {
      return `Amount of Sugar: ${this.sugar}`
    }
  }
  //Representing two different things but both have summary functions so they 
    //both qualify for type Reportable
  printSummaryTS(drink);

  //Can use a single interface to describe the shape or the different properties
    //of very different Objects
    //Lets us write generic functions via generic interfaces
    //Created a more Reusable function 
    //Lets us write more Reusable code