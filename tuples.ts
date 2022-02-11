//Tuple -> Array-like structure where each element represents
  //some property of a record


// {
//   color: brown,
//   carbonated: true,    ->   [ brown, true, 40 ]
//   sugar: 40
// }

//Memorize the order to understand the property and type associated in that place

const drink = {
  color: 'brown',
  caarbonated: true,
  sugar:40
};

//Type Alias
type Drink = [string,boolean,number]; // -> created idea of tuple, created a type

const pepsi: [string, boolean, number] = ['brown', true, 40];
//order matters in a tuple have to memorize what each element represents
//specified order in type annotation
pepsi[0] = 40; //gives me error trying to mess with order

const coke: Drink = ['black', true, 100];
//can now freely use Drink type

const carSpecs: [number, number] = [400, 3354];
//specs around car but what do numbers mean?
//Harder to understand at a glance

const carStats = {
  horsePower: 400,
  weight: 3354
};
//Compared to standard object