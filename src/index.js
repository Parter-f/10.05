"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
let message = "Hello World";
console.log(message);
let ures;
if (message.startsWith('H')) {
    console.log('H-val kezdődik');
    ures = 1;
}
else {
    ures = 2;
}
let ertek = 5;
//ertek = "asdfsghu";
function negyzet(szam) {
    return szam * szam;
}
let user = new User_1.User('nev', 44);
user.kiir();
let users = [];
users.push(new User_1.User("masikuser", 10));
users.push(user);
console.log(users);
let u = users[1];
for (let e of users) {
    e.kiir();
}
let usernames = ['str1', 'user2'];
let userHalmaz = new Set();
let nevUser = new Map();
let nevUser2 = new Map();
nevUser2.set("usernev", new User_1.User("usernev", 33));
(_a = nevUser2.get("usernev")) === null || _a === void 0 ? void 0 : _a.kiir();
/*
function osszead(t : number[] | string[]){
let sum : number | string = '';
for (let e of t){
    sum += e;
}
return sum;
}
*/
function osszead(t) { }
console.log(osszead([1, 45, 12]));
console.log(osszead(['a', 'b', 'c']));
//console.log(osszead(1 , 'ada'))
function IDKiir(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase);
    }
}
let elem = document.getElementById('asdf');
if (elem !== null) {
    console.log(elem.textContent);
}
console.log(elem === null || elem === void 0 ? void 0 : elem.textContent);
