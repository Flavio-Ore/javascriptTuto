console.log(Date);

const d = new Date()

console.log(d)

console.log('Day of the month: ', d.getDate() );

//* Sunday: 0 /  Monday: 1 / Tuesday: 2 / Wednesday: 3 / Thursday: 4 / Friday: 5 / Saturday: 6
console.log(d.getDay());

//* Jan: 0 / Feb: 1 / Mar: 2 / Apr: 3 / May: 4 / Jun: 5 / Jul: 6 / Aug: 7 / Set: 8 / Oct: 9 / Nov: 10 / Dec: 11
console.log(d.getMonth());

console.log(d.getMilliseconds(), d.getSeconds(), d.getMinutes(), d.getHours());

console.log(d.toDateString());

console.log(d.toLocaleString());

console.log(d.toLocaleDateString());

console.log(d.getTimezoneOffset());

//UTC

//* date from local time zone
console.log(d.toString());

//* date from London (UTC)
console.log(d.toUTCString());  

//? Time expressed in seconds since the TimeStamp (1 january 1970)
console.log(Date.now());

let myBirthday = new Date(2004, 10, 4) //YY - MM - DD

console.log(myBirthday);