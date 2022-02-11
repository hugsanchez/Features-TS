//Type -> Easy way to refer to the different properties and
//   functions that a value has 

const today = new Date();
//today variable is pointing at an object of type Date
//TS can now use that information to decide exactly what we can do with that variable
today.getMonth();
//Lists all the functions and properties that a Date has 
// TS only knows to show this information right here because it has an internal definition of exactly what a Date is
//In other words TS knows the properties and methods that a Date has
//If we reference one that does NOT exist we get an error

const person = {
  age:20
};

class Color {

}

const red = new Color();
//red variable is pointing at an object of type Color
//red now has access to all the properties and functions of type Color

//Where do we use types? EVERYWHERE!!
//Every value we define will have a type associated with it





