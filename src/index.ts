import {User} from "./User"
let message : string = "Hello World";
console.log(message);
let ures;
if(message.startsWith('H'))
{
    console.log('H-val kezdődik');
    ures = 1;
}
else{
    ures = 2;
}
let ertek = 5;
//ertek = "asdfsghu";

function negyzet(szam : number) : number{
    return szam * szam ; 
}


let user = new User('nev', 44);
user.kiir();

let users : User[] = [];
users.push(new User("masikuser" , 10 ));
users.push(user)
console.log(users);
let u = users[1];
for(let e of users)
{
    e.kiir();
}
let usernames : Array<string> = ['str1' , 'user2'];
let userHalmaz : Set<User> = new Set();
let nevUser : Map<string , User> = new Map();
let nevUser2 = new Map<string , User>();

nevUser2.set("usernev" , new User("usernev" , 33));
nevUser2.get("usernev" )?.kiir();

/*
function osszead(t : number[] | string[]){
let sum : number | string = '';
for (let e of t){
    sum += e;
}
return sum;
}
*/

function osszead(t : number[] | string[]){}

console.log(osszead([1 , 45 , 12]))
console.log(osszead(['a' , 'b' , 'c']));
//console.log(osszead(1 , 'ada'))

function IDKiir(id : string | number){
   if(typeof id === 'number'){
    console.log(id);
   }
   else{
    console.log(id.toUpperCase);
   }
}
let elem = document.getElementById('asdf');
if(elem !== null){
    console.log(elem.textContent);
}
console.log(elem?.textContent);