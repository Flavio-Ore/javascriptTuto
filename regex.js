const lorem = '123 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, e ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sed  diam eu fugiat nulla pariatur et eu fugiat nulla pariatur et ea commodo consequat. 456'

let regex = new RegExp('dolor', 'ig')

let regex1 = /dolor/ig
let regex2 = /\d{2,}/
//let regex2 = /\d/g

console.log(regex.test(lorem), regex.exec(lorem));

console.log(regex1.test(lorem), regex1.exec(lorem))

console.log(regex2.test(lorem), regex2.exec(lorem))