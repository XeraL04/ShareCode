// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

    // option one : destructuring 
// const {jhon, peter} =require('./4-names');

    // option two : use proprety name
    const names = require('./4-names')
    const sayHi = require('./5-utils')
    const data = require('./6-alternative-flavor')
    
    require('./7-mind-grenade')
    
    
    // console.log(names);
    
    sayHi("susan")
    sayHi(names.jhon)
    sayHi(names.peter)