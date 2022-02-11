//Types Arrays -> Arrays where each element is some consistent type of value

//When to use typed arrays? -> Any time we need to represent a collection of records with 
    //some arbitrary sort order

const carMakers = ['ford', 'toyota', 'jeep'];
//Type inference made carMakers type string[] (array with nothing but strings)

const carMakersTS: string[] = [];
//initialize with empty array gotta add on annotation

const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['cherokee']
]
// nested array is string[][] notice 2 brackets via type inference

 //ADVATAGES ARRAYS IN TS

 //1.)TS can do type inference when extracting values from an array
 const carA = carMakers[0];
 //pulled one value and type inference gave it string
 const myCar = carMakers.pop();

 //2.)TS can prevent us from adding incompatible values to the array
 carMakers.push(100);
 //help us from adding in dissimilar elements into exclusive array

 //3.)We can get help with map, forEach, reduce functions
carMakers.map((car:string):string => {
  return car;
  car.toLowerCase();
  //since TS knows its a string we get access to all properties and methods of type String
})


 //4.)Flexible - arrays can still contain multiple different types
 const importantDates = [new Date(), '2030-10-10'];
 //Type inference states this array can contain strings or Date types
 const importantDatesTS: (Date | string)[] = [new Date()];
 //Here if we know we gonna add a string later on but only start with one type gotta include type annotation
 //so that TS is aware 
 importantDatesTS.push(new Date());
 importantDates.push('2030-10-02');