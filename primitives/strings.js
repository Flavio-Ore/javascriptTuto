//Night owl dark

//*[Primitive]
//? String, Number, Boolean, Null, Undefined, NaN 

const myName = 'Flavio'

const lorem = 'Lorem Flavio ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing'

let ba = new String('ba')

console.log(lorem.length);

console.log(lorem.toUpperCase());

console.log(lorem.toLowerCase());

console.log(lorem.includes(myName));

const trim = '          sd a sd as d asd as d s    sd  sd '

console.log(trim);
console.log(trim.trim());

console.log(lorem.split(' '));

console.log(lorem); //const

let interpolate = `this is ${lorem} and ${myName}`

//alt + 96 to interpolate

const seasons = //${myName}
`<ul>
  <li>Verano</li>
  <li>Otoño</li>
  <li>Invierno</li>
  <li>Primavera</li>
</ul>`

console.log(seasons);