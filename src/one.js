"use strict";
function one(security_key, s){
    let result = "";
    let Alp = new String("abcdefghijklmnopqrstuvwxyz");
    s.trim();
    let sk = new String((security_key.trim())+Alp);
    sk = (new Set(sk));
    console.log(sk);

    for(let i = 0; i < s.length; i++){
        // console.log("오류");
        result += sk.charAt(Alp.indexOf(s.charAt(i)));
    }
    document.getElementById('pwsText') = result;
}


