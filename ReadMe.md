Why do we care about Types?

-Types are used by the Typescript Complier to analyze our code for errors
-Types allow other engineers to understand what values are flowing around our codebase

Type Inference -> Typescript tries to figure out what type of value a variable refers to
-TS guesses the type

Example: const color = 'red';
Variable Declaration (Where we are telling our program that we are going to have a new varible inside of our app with a given name) = Variable Initialization (Assigning a value to a varaible for the very first time)

If declaration and initialization are on the same line TS will figure out the type of 'color' for us

let apples;
apples = 5; -> here it won't work

RELY ON TYPE INFERENCE WHENEVER ITS A ONE LINER OF VARIBALE DECLARTION AND VARIABLE INITIALIZATION

Type inference for functions -> TS tries to figure out what type of value a function will return, won't see what the arguements are

General Strategy for Reusable Code in TS
-Create functions that accept arguements that are typed with interfaces
-Objects/classes can decide to 'implement' a given interface to work with a function
