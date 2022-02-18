// METADATA

// - Essentially a snippet of information that can be tied to a method on a class, a property on a class, or a class definition itself
//   (Essentially any kind of object)

// - Can be used for super custom stuff
// - TS will (optionally) provide type information as metadata
//   (normally when we convert TS to JS all the TS code gets wiped away but this optinal feature exports some type information)
// - Proposed feature to be added to JS (and thus TS)
// - Read and written using the reflect-metadata package

import 'reflect-metadata'
//automatically adds variable to global scope ( Reflect )

const plane = {
  color:'green'
};

Reflect.defineMetadata('note','hi there',plane);
//key value object we sticking it in
Reflect.defineMetadata('note','hi there',plane, 'color');

const note2 = Reflect.getMetadata('note',plane, 'color');
//console.log(note2);
//color property attached metadata property to it


//Like adding new property to plane ( note: 'hi there' )
//Except its never going to show up in any debugger
//Invinsible property

//console.log(plane)

const note = Reflect.getMetadata('note', plane);
//the key we are looking for and the object we want to get that metadata from

//console.log(note)

@controller
class Plane {
  color:string = 'red';

  @get('/login')
  fly(): void{
    console.log('vrrr')
  }
}

function get(path:string){
  return function(target:Plane, key:string){
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target:typeof Plane){
  for(let key in target.prototype){
    //iterate through all the keys of prototype aka the methods
    const path = Reflect.getMetadata('path', target.prototype, key);
    //Try and find metadata info within each key or method of the class

    //Pull out middleware here too
    const middleware = Reflect.getMetadata('middleware', target.prototype, key)

    router.get(path, middleware, target.prototype[key]);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret)