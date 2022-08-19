const obje = {
    string: "name",
    number: 99,
    boolean: true,
    array: ["Something", "Something", "Something", "Something"],
    object: {
      string: "Other string",
      number: 51
    },
    nil: null
}

console.log(obje)

console.log(JSON)

console.log(JSON.parse("[1,2,3,4,5]")); //JSON to object
//!console.log(JSON.parse("text")); //invalid object to javascript
console.log(JSON.parse("null"));

console.log(JSON.stringify(obje));
console.log(JSON.stringify(obje, null, '  '));

console.log(JSON.parse('{"string": "name","number": 99,"boolean": true,"array": ["Something", "Something", "Something", "Something"],"object": {"string": "Other string","number": "51"},"nil": null}'));