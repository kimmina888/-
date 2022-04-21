"use strict";
let security_key ="coffee";
let s = new String("i want to drink coffee");
let result = new Array();
let Alp = new Array("abcdefghijklmnopqrstuvwxyz");
s.trim();
let sk = new String(new Set(security_key.trim()+Alp));

for(let i = 0; i < s.length; i++){
    result.push(sk.charAt(Alp.indexOf(s.charAt(i))));
}
console.log(result);
