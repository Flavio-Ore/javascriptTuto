//importation
import classFunc, {PI, imported} from './exportation.js'
import thisIsAlias, {all, extra as alias}from './morethings-exported.js'
console.log(PI);

console.log(imported)

const ba = new classFunc.Importated('', Date.now())

console.log(ba.getMsg);


const a = classFunc.multiplyArrBy(10,2,3,4,5,6,7)

console.log(a);

console.log(all(12312, 2));

console.log(alias('Heyooo'));

//* DIFFERENT NAMES (?) HOW?
thisIsAlias()