//Type annotations for functions -> Code we add to tell TS what type
  //of arguements a function will receive and what type of values it will return


const add = (a:number,b:number):number => {
  // Added return annotation so that our function is going to return a number
  //TS does not care about the logic
  return a - b; //function is called add but we are subtracting
  return a + b;
  return 'asfa' //Not what we specified that we would return
};

//ALWAYS USE TYPE ANNOTATIONS FOR THE ARGUEMENTS
//Type inference works out output but we wont use it!!

const subtract = (a:number, b: number) => {
  //adding return annotation helps catch errors
  a-b; //notice no return statement here even though we wanted one
  //catch easy bugs
}

function divide(a:number, b:number): number {
  return a/b;
}

const multiply = function(a:number, b:number): number {
  return a * b;
}

const logger = (message:string):void => {
  //function that wont return anything use return annotation void
  //Can return null and undefined
  console.log(message);
}

const throwError = (message:string): never => {
  throw new Error(message);
  //anytime we throw error function wont return anything
  //return type annotation never which means will never reach the end of this function
  //rarely used in this format
}

const throwErrorReal = (message2:string): string => {
  if(!message2){
    throw new Error(message2)
  }
  return message2;
}

const forecast = {
  date: new Date(),
  weather:'sunny'
};

const logWeather = (forecast: {date:Date; weather:string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(forecast);

//DESTRUCTURE with ANNOTATION

const logWeather2 = ({date, weather}: {date:Date, weather:string}): void => {
  console.log(date);
  console.log(weather);
}
//First Destructure then put the annotations